import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 34,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginLeft: metrics.basePadding,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: metrics.basePadding / 2,
  },
});

export default styles;
