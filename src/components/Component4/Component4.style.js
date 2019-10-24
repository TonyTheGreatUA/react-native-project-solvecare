import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  view: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 50,
  },
  item: {
    flex: 1,
    width: '100%',
    height: 100,
  },
  itemRow: {
    flexDirection: 'row',
    margin: 5,
  },
  index: {
    paddingLeft: 30,
    fontSize: 22,
    paddingRight: 15,
    color: 'white',
  },
  firstName: {
    fontSize: 22,
    color: 'white',
  },
  lastName: {
    paddingLeft: 3,
    fontSize: 22,
    color: 'white',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
});
