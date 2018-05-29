import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack() } style={styles.left} >
      <Icon style={styles.icon} name="chevron-left" size={20} />
    </TouchableOpacity>
    <View style={styles.content}>
      <Text style={styles.title}>{ navigation.getParam('repositoryItem', '') }</Text>
    </View>
  </View>
);

Header.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

export default Header;
