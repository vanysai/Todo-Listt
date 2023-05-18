import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        width: 300,
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        height:70,
        borderWidth: 1,
        borderColor:'#424242',
        textAlign: 'center',
    },
    name:{
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
        borderColor: '#407da1'
      },
      checked: {
        backgroundColor: 'green',
      },
      unchecked: {
        borderColor: 'black',
      },

      checkboxPressed: {
        backgroundColor: '#595abd',
        borderColor: '#595abd'
      },
})
