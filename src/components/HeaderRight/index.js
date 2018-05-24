import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'services/api';

import { TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import 'config/ReactotronConfig';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class HeaderRight extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          repository: PropTypes.string,
        }),
      }),
      setParams: PropTypes.func,
    }).isRequired,
  }

  state = {
    repository: '',
    loading: false,
  }

  componentDidMount() {
    this.verifyRepository();
  }

  verifyRepository = () => {
    const { params } = this.props.navigation.state;

    if (params === undefined) return;

    if (params.repository.length === 0) return;

    this.setState({ repository: params.repository });
  }

  checkRepositoryExists = async (repository) => {
    const repos = await api.get(`/repos/${repository}`);

    return repos;
  }

  returnObjectRepository = repo => (
    {
      id: repo.id,
      name: repo.full_name,
      organization: repo.name,
      avatar_url: repo.owner.avatar_url,
    }
  )

  saveRepository = async (repository) => {
    let repos = await AsyncStorage.getItem('@Desafio:repositories');

    if (repos == null) {
      repos = '';
      repos = { data: [this.returnObjectRepository(repository.data)] };
    } else {
      repos = JSON.parse(repos);
      repos.data.push(this.returnObjectRepository(repository.data));
    }

    this.props.navigation.setParams({ data: repos.data });

    await AsyncStorage.setItem('@Desafio:repositories', JSON.stringify(repos));
  }

  loadRepository = async () => {
    this.setState({ loading: true });

    try {
      await this.verifyRepository();

      if (this.state.repository === '') return;

      const repo = await this.checkRepositoryExists(this.state.repository);

      await this.saveRepository(repo);

      await this.props.navigation.setParams({ repository: '' });
    } catch (err) {
      console.tron.log('salvando repositório');
      console.tron.log(err);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.loadRepository}
      >
        {
          this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : <Icon name="plus" size={16} style={styles.icon} />
        }
      </TouchableOpacity>
    );
  }
}
