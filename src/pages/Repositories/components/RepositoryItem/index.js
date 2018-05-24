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

const RepositoryItem = ({ item, press }) => (
  <TouchableOpacity onPress={press} style={styles.container} >
    <View style={styles.info} >
      <Image style={styles.avatar} source={{ uri: item.avatar_url }} />
      <View style={styles.description}>
        <Text style={styles.title}>
          { item.name.length > 27
            ? item.name.substring(0, 27).concat('...')
            : item.name }
        </Text>
        <Text style={styles.subTitle}>{ item.organization }</Text>
      </View>
    </View>
    <Icon name="chevron-right" size={20} style={styles.icon} />
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  item: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    organization: PropTypes.string,
  }).isRequired,
  press: PropTypes.func.isRequired,
};

export default RepositoryItem;
