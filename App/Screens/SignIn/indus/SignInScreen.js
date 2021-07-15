import React, { useEffect, useState } from 'react';
import { TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Text, View, Alert } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import styles from './style';

import { AuthContext } from '../components/context';
import Users from './users';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, SIGN_IN_SET_LOADING } from '../../../../store/action-creators/authAction';

function SignInScreen({ navigation }) {
	const [data, setData] = useState({
		username: '',
		password: '',
		check_textInputChange: false,
		secureTextEntry: true,
		isValidUser: true,
		isValidPassword: true,
	});

	const dispatch = useDispatch()
	const { loading, token, error } = useSelector(state => state.auth)

	const textInputChange = (val) => {
		if (val.length >= 4) {
			setData({
				...data,
				username: val,
				check_textInputChange: true,
				isValidUser: true,
			});
		} else {
			setData({
				...data,
				username: val,
				check_textInputChange: false,
				isValidUser: false,
			});
		}
	};

	const handlePasswordChange = (val) => {
		if (val.length >= 8) {
			setData({
				...data,
				password: val,
				isValidPassword: true,
			});
		} else {
			setData({
				...data,
				password: val,
				isValidPassword: false,
			});
		}
	};

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	const handleValidUser = (val) => {
		if (val.trim().length >= 4) {
			setData({
				...data,
				isValidUser: true,
			});
		} else {
			setData({
				...data,
				isValidUser: false,
			});
		}
	};

	const loginHandle = (userName, password) => {
		// const foundUser = Users.filter((item) => {
		// 	return userName == item.username && password == item.password;
		// });
		// if (data.username.length == 0 || data.password.length == 0) {
		// 	Alert.alert('Wrong Input!', 'Username or password field cannot be empty', [{ text: 'Okay' }]);
		// 	return;
		// }
		// if (foundUser.length == 0) {
		// 	Alert.alert('Invalid User!', 'Username or password is incorrect', [{ text: 'Okay' }]);
		// 	return;
		// }
		// dispatch(signIn(userName, password))
		dispatch({ type: SIGN_IN_SET_LOADING, payload: true })
	};

	console.log(loading)
	if (loading) {
		return <View><Text>Loading...</Text></View>
	}

	if (error) {
		return <View><Text>Error</Text></View>
	}

	return (
		<KeyboardAvoidingView style={styles.container}>
			<View style={styles.topPart}>
				<View style={styles.login}>
					<Text style={styles.loginText}>Login</Text>
				</View>
				<View>
					<Text style={styles.emailPasswordText}>Email</Text>
					<View style={styles.textInput}>
						<TextInput
							placeholder="Your email address"
							autoCapitalize="none"
							onChangeText={(val) => textInputChange(val)}
							onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
						/>
						{data.check_textInputChange ? (
							<Animatable.View animation="bounceIn">
								<Feather name="check-circle" color="green" size={20} />
							</Animatable.View>
						) : null}
					</View>
				</View>
				{data.isValidUser ? null : (
					<Animatable.View animation="fadeInLeft" duration={500}>
						<Text style={styles.errorMess}>Username must be 4 characters long</Text>
					</Animatable.View>
				)}
				<View>
					<Text style={styles.emailPasswordText}>Password</Text>
					<View style={styles.textInput}>
						<TextInput
							placeholder="Password"
							secureTextEntry={data.secureTextEntry ? true : false}
							autoCapitalize="none"
							onChangeText={(val) => handlePasswordChange(val)}
						/>
						<TouchableOpacity onPress={updateSecureTextEntry}>
							{data.secureTextEntry ? (
								<Feather name="eye-off" color="grey" size={20} />
							) : (
									<Feather name="eye" color="grey" size={20} />
								)}
						</TouchableOpacity>
					</View>
					{data.isValidPassword ? null : (
						<Animatable.View animation="fadeInLeft" duration={500}>
							<Text style={styles.errorMess}>Password must be 8 characters long</Text>
						</Animatable.View>
					)}
				</View>
				<TouchableOpacity>
					<Text style={styles.forgot}>FORGOT PASSWORD</Text>
				</TouchableOpacity>
			</View>
			<View style={[styles.footer]}>
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => {
						loginHandle(data.username, data.password);
					}}>
					<Text style={styles.loginButtonText}>LOGIN</Text>
				</TouchableOpacity>
				<Text style={styles.twoWaysLogIn}>Lets test 2 ways to log in</Text>
				<View style={styles.ID}>
					<TouchableOpacity style={styles.buttonID}>
						<View style={styles.viewImage}>
							<Image source={require('../../../Assets/Images/icons8-touch-id-50.png')} style={styles.image} />
							<Text>Touch ID</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonID}>
						<View style={styles.viewImage}>
							<Image source={require('../../../Assets/Images/icons8-face-id-50.png')} style={styles.image} />
							<Text>Touch ID</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}

export default SignInScreen;
