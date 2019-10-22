import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
  },
  cardLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputText: {
    alignSelf: 'stretch',
    fontSize: 18,
    height: 40,
    marginBottom: 30,
    color: '#000000',
    borderBottomColor: '#F3C678',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#F3C678',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  inputError: {
    borderBottomColor: '#FF0000',
  },
  inputDefault: {
    borderBottomColor: '#F3C678',
  },
});
