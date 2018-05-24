import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  AsyncStorage,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import RepositoryItem from 'pages/Repositories/components/RepositoryItem';

import styles from './styles';

export default class Repositories extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      setParams: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  }

  state = {
    loading: true,
    refreshing: false,
  }

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    try {
      this.setState({ loading: true });

      const dataR = await AsyncStorage.getItem('@Desafio:repositories');

      if (dataR == null) return;

      this.props.navigation.setParams({ data: JSON.parse(dataR).data });
    } catch (err) {
      console.tron.log(err);
    } finally {
      this.setState({ loading: false });
    }
  }

  renderListItem = ({ item }) => <RepositoryItem item={item} press={() => this.props.navigation.navigate('Issues')} />;

  renderList = () => (
    <FlatList
      style={styles.lista}
      data={this.props.navigation.getParam('data', [])}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepositories}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}
