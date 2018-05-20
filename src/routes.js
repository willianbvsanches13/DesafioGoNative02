import React from 'react';
import { createStackNavigator, createTabNavigator } from 'react-navigation';

import HeaderRight from 'components/HeaderRight';
import SearchInput from 'components/SearchInput';

import Repositories from 'pages/Repositories';

import All from 'pages/Issues/All';
import Closed from 'pages/Issues/Closed';
import Open from 'pages/Issues/Open';

const Routes = createStackNavigator({
  Repositories: { screen: Repositories },
  Issues: {
    screen: createTabNavigator({
      All: { screen: All },
      Closed: { screen: Closed },
      Open: { screen: Open },
    }),
  },
}, {
  initialRouteName: 'Repositories',
  navigationOptions: ({ navigation }) => ({
    headerTitle: <SearchInput />,
    headerRight: <HeaderRight navigation={navigation} />,
  }),
});

export default Routes;
