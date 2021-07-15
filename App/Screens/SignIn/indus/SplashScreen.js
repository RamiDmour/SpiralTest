import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

function SplashScreen({ navigation }) {
	const auth = useSelector(({ auth }) => auth)

	useEffect(() => {
		// console.log(auth.token)
		setTimeout(() => navigation.navigate('SignInScreen'), 1500)

	}, [])

	return (
		<View style={{ backgroundColor: '#C81A7C', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View style={{ flexDirection: 'column' }}>
				<Image
					source={require('../../../Assets/Images/heart.png')}
					style={{ tintColor: 'white', width: 120, height: 110 }}
				/>
				<Text style={{ fontSize: 30, color: 'white' }}>Spiral</Text>
			</View>
		</View>
	);
}

export default SplashScreen;
