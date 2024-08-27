import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 24,
  },
  name: {
    color: 'tomato',
    fontSize: 18,
  },
  avatar: {
    width: 32,
    height: 32,
    marginRight: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  actionRow: {
    marginTop: 20,
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 120,
    borderRadius: 8,
    borderWidth: 1,
  },
  deleteBtn: {
    backgroundColor: 'tomato',
    borderColor: 'transparent',
  },
  cancelBtn: {
    marginRight: 16,
    borderColor: 'grey',
  },
  btnText: {
    textAlign: 'center',
    fontWeight: '500',
  },
});
