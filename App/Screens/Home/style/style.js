import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	tapBar: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tapBarElements: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},
	topBar: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
	},
	topBarImage: {
		height: '50%',
		width: '11%',
		tintColor: '#fff',
	},
	topBarText: {
		marginLeft: 5,
		color: '#fff',
		fontSize: 18,
		lineHeight: 18,
	},
	screenView: {
		flex: 1,
		backgroundColor: '#E8E8ED',
	},
	container: {
		margin: 10,
	},
	date: {
		paddingBottom: 10,
	},
	partsContainer: {
		backgroundColor: '#fff',
		borderRadius: 5,
		marginBottom: 20,
	},
	button: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingVertical: 10,
		paddingLeft: 10,
		borderBottomColor: '#E8E8ED',
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default styles;
