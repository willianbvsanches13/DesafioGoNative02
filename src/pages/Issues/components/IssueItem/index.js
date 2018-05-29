import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssueItem = ({ item, press }) => (
  <TouchableOpacity onPress={press} style={styles.container} >
    <View style={styles.info} >
      <Image style={styles.avatar} source={{ uri: item.user.avatar_url }} />
      <View style={styles.description}>
        <Text style={styles.title}>
          { item.title.length > 20
            ? item.title.substring(0, 20).concat('...')
            : item.title }
        </Text>
        <Text style={styles.subTitle}>{ item.user.login }</Text>
      </View>
    </View>
    <Icon name="chevron-right" size={20} style={styles.icon} />
  </TouchableOpacity>
);

IssueItem.propTypes = {
  item: PropTypes.shape({
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
  press: PropTypes.func.isRequired,
};

export default IssueItem;
