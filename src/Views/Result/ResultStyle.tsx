import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	product: {
		flexDirection: 'row'
	},
	thumbnail: {
		width: 150,
		height: 150
	},
	complementInformations: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		width: '100%',
		paddingVertical: 10
	},
	description: {
		width: '100%',
	},
	price: {
		width: '100%',
		textAlign: 'right',
		color: '#4285F4'
	},
	emptyResult: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 20
	}
});
  