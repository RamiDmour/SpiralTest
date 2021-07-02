import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	topPart: {
		flex: 1,
		marginHorizontal: '10%',
		marginTop: '15%',
	},
	footer: {
		flex: 1,
		marginHorizontal: '7%',
		marginBottom: '10%',
		marginTop: '80%',
	},
	login: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginBottom: '10%',
	},
	loginText: {
		fontSize: 25,
		borderBottomColor: '#C81A7C',
		borderBottomWidth: 3,
		borderRadius: 0.5,
	},
	emailPasswordText: {
		fontSize: 17,
		marginBottom: -10,
	},
	textInput: {
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		paddingBottom: 5,
		marginBottom: 15,
		paddingLeft: -4,
	},
	forgot: {
		color: '#C81A7C',
		fontWeight: 'bold',
		fontSize: 10,
		alignSelf: 'flex-end',
		marginTop: 10,
	},
	loginButton: {
		width: '100%',
		height: '28%',
		alignSelf: 'center',
		borderColor: '#C81A7C',
		borderRadius: 50,
		backgroundColor: '#C81A7C',
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginButtonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 13,
	},
	twoWaysLogIn: {
		color: 'grey',
		alignSelf: 'center',
		paddingTop: '15%',
		paddingBottom: '4%',
	},
	ID: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonID: {
		width: '48%',
		height: '60%',
		borderColor: 'black',
		borderRadius: 50,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	viewImage: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 25,
		height: 25,
		paddingRight: 5,
	},
});

export default styles;
