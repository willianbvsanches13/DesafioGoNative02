import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'services/api';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
  Linking,
} from 'react-native';

import IssueItem from './components/IssueItem';

import styles from './styles';

const tabs = [
  { id: '?state=all', name: 'Todas' },
  { id: '?state=open', name: 'Abertas' },
  { id: '?state=closed', name: 'Fechadas' },
];

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  }

  state = {
    issues: [],
    loading: true,
    status: '',
  }

  componentDidMount() {
    this.loadIssues();
  }

  onPressState = async (status) => {
    await AsyncStorage.setItem('@Desafio:status', status);

    await this.loadIssues();
  }

  styledComponent = async (status) => {
    let statusDB = await AsyncStorage.getItem('@Desafio:status');

    if (statusDB === null) statusDB = '';

    if (statusDB === '' && status === '?state=all') return styles.buttomPressed;

    if (status === statusDB) return styles.buttomPressed;

    return styles.buttom;
  }

  loadIssues = async () => {
    try {
      this.setState({ loading: true });

      let status = await AsyncStorage.getItem('@Desafio:status');

      if (status === null) {
        status = '?state=all';
        await AsyncStorage.setItem('@Desafio:status', status);
      }

      await this.setState({ status });

      const repositoryName = this.props.navigation.getParam('repositoryItem', '');

      const issues = await api.get(`/repos/${repositoryName}/issues${status}`);

      this.setState({ issues: issues.data });
    } catch (err) {
      console.tron.log(err);
    } finally {
      this.setState({ loading: false });
    }
  }

  renderIssueItem = ({ item }) => <IssueItem item={item} press={() => Linking.openURL(item.html_url)} />;

  renderList = () => (
    <FlatList
      style={styles.lista}
      data={this.state.issues}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderIssueItem}
      onRefresh={this.loadIssues}
      refreshing={this.state.loading}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar} >
          { tabs.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => this.onPressState(item.id)}
              style={styles.buttom}
            >
              <Text style={[styles.text, this.state.status === item.id && styles.textSelect]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )) }
        </View>

        { this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}
