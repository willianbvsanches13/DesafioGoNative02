import React from 'react';

import { TouchableOpacity } from 'react-native';
import 'config/ReactotronConfig';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const HeaderRight = () => (
  <TouchableOpacity
    onPress={() => {}}
  >
    <Icon name="plus" size={16} style={styles.icon} />
  </TouchableOpacity>
);

export default HeaderRight;
