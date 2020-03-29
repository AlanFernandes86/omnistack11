import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    
},

header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
},

headerText: {
    fontSize: 15,
    color: '#737380'
},

headerTextBold: {
    fontWeight: 'bold',
},

title: {
    fontSize: 24,
    marginBottom: 16,
    marginTop: 24,
    color: '#13131a',
    fontWeight: 'bold'
},

description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
},

incidentList: {
    marginTop: 32,
    
},

incident: {
    elevation: 4,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginLeft: 4,
    marginRight: 4,
    marginTop:4
},

incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
},

incidentValue: {
    marginTop: 4,
    fontSize: 15,
    marginBottom: 16,
    color: '#737380'
},

detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},

detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
}


});