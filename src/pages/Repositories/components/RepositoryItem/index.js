import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class RepositoryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      avatar_url: PropTypes.string,
      name: PropTypes.string,
      organization: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      setParams: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  }

  issuesNavigate = () => {
    try {
      this.props.navigation.setParams({ repositoryItem: this.props.item.name });
      this.props.navigation.navigate({
        routeName: 'Issues',
        params: {
          repositoryItem: this.props.item.name,
        },
      });
    } catch (err) {
      console.tron.log(err);
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.issuesNavigate} style={styles.container} >
        <View style={styles.info} >
          <Image style={styles.avatar} source={{ uri: this.props.item.avatar_url }} />
          <View style={styles.description}>
            <Text style={styles.title}>
              { this.props.item.name.length > 20
                ? this.props.item.name.substring(0, 20).concat('...')
                : this.props.item.name }
            </Text>
            <Text style={styles.subTitle}>{ this.props.item.organization }</Text>
          </View>
        </View>
        <Icon name="chevron-right" size={20} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
