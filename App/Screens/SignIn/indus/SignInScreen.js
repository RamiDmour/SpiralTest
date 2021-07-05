import React, { useState } from 'react';
import { TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Text, View } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import styles from './style';

import { AuthContext } from '../components/context';

function SignInScreen({ navigation }) {
	const [data, setData] = useState({
		email: '',
		password: '',
		check_textInputChange: false,
		secureTextEntry: true,
	});

	const { signIn } = React.useContext(AuthContext);

	const textInputChange = (val) => {
		if (val.length !== 0) {
			setData({
				...data,
				email: val,
				check_textInputChange: true,
			});
		} else {
			setData({
				...data,
				email: val,
				check_textInputChange: false,
			});
		}
	};

	const handlePasswordChange = (val) => {
		setData({
			...data,
			password: val,
		});
	};

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	const loginHandle = (username, password) => {
		signIn(username, password);
	};

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
						/>
						{data.check_textInputChange ? (
							<Animatable.View animation="bounceIn">
								<Feather name="check-circle" color="green" size={20} />
							</Animatable.View>
						) : null}
					</View>
				</View>
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
				</View>
				<TouchableOpacity>
					<Text style={styles.forgot}>FORGOT PASSWORD</Text>
				</TouchableOpacity>
			</View>
			<View style={[styles.footer]}>
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => {
						loginHandle(data.email, data.password);
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
