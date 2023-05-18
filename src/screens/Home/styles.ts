import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#1a1a1a',
      padding: 24,
      justifyContent:'center',
      alignItems: 'center',
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    input: {
        flex: 1,/*ocupar todo o espaço */
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        borderWidth: 1,
        borderColor:'black',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
        display: 'flex',
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:'#1f709f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 80, 
        marginBottom: 42,
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '700',
        margin: 16

    },
    TextTasks1:{
        color: '#428db7',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: 190,
        marginBottom: 0.1,
    },
    TextTasks2:{
        color: '#7577db',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 0.1,
    }
  });