import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import styles from '../../Home/style/style';

function SplashScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Spiral screen</Text>
			<TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
				<Text> navigate </Text>
			</TouchableOpacity>
		</View>
	);
}

export default SplashScreen;
