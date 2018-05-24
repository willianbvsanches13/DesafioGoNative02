import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  lista: {
    marginTop: metrics.basePadding,
  },
  loading: {
    marginTop: metrics.basePadding,
  },
});

export default styles;
