import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputSection: {
    flex: 1,
    paddingTop: 5,
  },
  buttons: {
    paddingTop: 20,
    paddingBottom: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
  picker: {
    alignSelf: 'stretch',
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
  inputError: {
    borderBottomColor: '#FF0000',
  },
  inputDefault: {
    borderBottomColor: '#F3C678',
  },
});
