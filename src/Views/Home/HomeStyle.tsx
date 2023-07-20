import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flexDirection: 'row',
        marginBottom: 10
    },
    googleText: {
        fontSize: 46,
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center'
    },
    inputContent: {
        borderColor: '#dddddd',
        width: '80%',
        borderWidth: 1,
        borderRadius: 20,
        padding: 4,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageSearch: {
        width: 14,
        height: 14,
        marginRight: 10,
        marginLeft: 4,
    },
    input: {
        fontSize: 12,
        width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#fafafa',
        padding: 5,
        paddingHorizontal: 14,
        margin: 3,
        borderRadius: 2
    },
    textButton: {
        fontSize: 10
    },
    loader: {
        position: 'absolute',
        backgroundColor: '#888888',
        flex: 1,
        width: '100%',
        opacity: 0.5,
        bottom: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
  