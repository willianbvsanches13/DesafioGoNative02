import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 54,
    backgroundColor: colors.white,
    alignItems: 'center',
  },

  left: {
    alignSelf: 'flex-start',
  },

  icon: {
    padding: metrics.basePadding,
    color: colors.dark,
  },

  content: {
    flex: 1,
    marginRight: 20 + (metrics.basePadding * 2),
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
