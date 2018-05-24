import { StyleSheet } from 'react-native';

import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.basePadding / 2,
    marginLeft: metrics.basePadding,
    marginRight: metrics.basePadding,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    margin: metrics.basePadding,
  },
  icon: {
    padding: metrics.basePadding,
    color: colors.primary,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
  subTitle: {
    color: colors.regular,
    fontSize: 12,
  },
});

export default styles;
