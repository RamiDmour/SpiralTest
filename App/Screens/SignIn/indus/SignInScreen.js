import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { Text, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

function SignInScreen({}) {
	return (
		<View style={styles.container}>
			<View style={styles.topPart}>
				<View style={styles.login}>
					<Text style={styles.loginText}>Login</Text>
				</View>
				<View>
					<Text style={styles.emailPasswordText}>Email</Text>
					<TextInput placeholder="Your email adress" style={styles.textInput} />
				</View>
				<View>
					<Text style={styles.emailPasswordText}>Password</Text>
					<TextInput placeholder="Password" style={styles.textInput} />
				</View>
				<TouchableOpacity>
					<Text style={styles.forgot}>FORGOT PASSWORD</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.footer}>
				<TouchableOpacity style={styles.loginButton}>
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
		</View>
	);
}

export default SignInScreen;
