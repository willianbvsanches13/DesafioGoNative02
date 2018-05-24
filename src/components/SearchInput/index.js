import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from 'react-native';

import { colors } from 'styles';

import styles from './styles';

const SearchInput = ({ navigation }) => (
  <TextInput
    style={styles.input}
    autoCapitalize="none"
    autoCorrect={false}
    placeholder="Adicionar repositório"
    placeholderColor={colors.regular}
    underlineColorAndroid="rgba(0,0,0,0)"
    value={navigation.getParam('repository', '')}
    onChangeText={repository => navigation.setParams({ repository })}
  />
);

SearchInput.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func,
  }).isRequired,
};

export default SearchInput;
