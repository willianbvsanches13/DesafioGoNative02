import React, { Component } from 'react';

import { TextInput } from 'react-native';

import { colors } from 'styles';

import styles from './styles';

export default class SearchInput extends Component {
  state = {
    username: '',
  };

  render() {
    return (
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Adicionar repositório"
        placeholderColor={colors.regular}
        underlineColorAndroid="rgba(0,0,0,0)"
        value={this.state.username}
        onChangeText={username => this.setState({ username })}
      />
    );
  }
}
