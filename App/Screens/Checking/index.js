import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Home/style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import UserAvatar from '../Home/UserAvatar';
import CustomHeader from './CustomHeader';

function CheckingScreen({}) {
	return (
		<View style={styles.tapBar}>
			<Text>Checking screen</Text>
		</View>
	);
}

const CheckingStack = createStackNavigator();

function CheckingStackScreen({ navigation, route }) {
	const { title, subtitle } = route.params;
	return (
		<CheckingStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#C81A7C',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					alignSelf: 'center',
				},
			}}>
			<CheckingStack.Screen
				name="Checking"
				component={CheckingScreen}
				options={{
					title: (
						<CustomHeader
							title={title}
							subtitle={subtitle}
							stylesTitle={styles.title}
							stylesSubtitle={styles.subtitle}
						/>
					),
					headerLeft: () => (
						<Icon.Button
							name="arrow-back-outline"
							size={25}
							backgroundColor="#C81A7C"
							onPress={() => navigation.navigate('Home')}
						/>
					),
					headerRight: () => (
						<View style={{ marginRight: 10 }}>
							<UserAvatar />
						</View>
					),
				}}
			/>
		</CheckingStack.Navigator>
	);
}

export default CheckingStackScreen;
