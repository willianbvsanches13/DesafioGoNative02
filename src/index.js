import React from 'react';

import { YellowBox } from 'react-native';
import 'config/ReactotronConfig';

import Routes from 'routes';

// import styles from './styles';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const App = () => (
  <Routes />
);

export default App;
