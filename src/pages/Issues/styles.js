import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 34,
    borderRadius: 5,
    marginLeft: metrics.basePadding,
    marginRight: metrics.basePadding,
    marginTop: metrics.basePadding,
  },

  lista: {
    marginTop: metrics.basePadding / 2,
  },

  buttom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
  },

  text: {
    color: colors.dark,
    opacity: 0.5,
  },

  textSelect: {
    opacity: 1,
    fontWeight: 'bold',
  },

  loading: {
    marginTop: metrics.basePadding,
  },
});

export default styles;
