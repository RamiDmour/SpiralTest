import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import styles from '../../Home/style/style';

function SplashScreen({ navigation }) {
	return (
		<View style={{ backgroundColor: '#C81A7C', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} style={{ flexDirection: 'column' }}>
				<Image
					source={require('../../../Assets/Images/heart.png')}
					style={{ tintColor: 'white', width: 120, height: 110 }}
				/>
				<Text style={{ fontSize: 30, color: 'white' }}>Spiral</Text>
			</TouchableOpacity>
		</View>
	);
}

export default SplashScreen;
