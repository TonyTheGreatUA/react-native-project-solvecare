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
    height: 30,
    padding: 10,
  },
  itemRow: {
    flexDirection: 'row',
  },
  firstName: {
    fontSize: 12,
    color: 'black',
  },
  lastName: {
    paddingLeft: 3,
    fontSize: 12,
    color: 'black',
  },
  buttons: {
    paddingTop: 20,
    paddingBottom: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputText: {
    alignSelf: 'stretch',
    fontSize: 18,
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  selected: { backgroundColor: '#FA7B5F' },
});
