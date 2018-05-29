import React from 'react';
import { createStackNavigator } from 'react-navigation';


import Header from 'pages/Issues/components/Header';
import HeaderRight from 'components/HeaderRight';
import SearchInput from 'components/SearchInput';

import Repositories from 'pages/Repositories';

import Issues from 'pages/Issues';

const Routes = createStackNavigator({
  Repositories: {
    screen: Repositories,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <SearchInput navigation={navigation} />,
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
  Issues: {
    screen: Issues,
    navigationOptions: ({ navigation }) => ({
      header: <Header navigation={navigation} />,
    }),
  },
}, {
  initialRouteName: 'Repositories',
});

export default Routes;
