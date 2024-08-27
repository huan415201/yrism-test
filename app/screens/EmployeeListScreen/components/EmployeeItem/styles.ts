import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteBtn: {
    justifyContent: 'flex-start',
    height: '100%',
  },
  deleteBtnImg: {
    width: 20,
    height: 20,
  },
  avatarWrapper: {
    borderRadius: 32,
    marginRight: 4,
    padding: 8,
  },
  avatar: {
    width: 48,
    height: 48,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 15,
    marginTop: 4,
  },
});
