import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Home/style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import UserAvatar from '../Home/UserAvatar';

function SavingsScreen({}) {
	return (
		<View style={styles.tapBar}>
			<Text>Savings screen</Text>
		</View>
	);
}

const SavingsStack = createStackNavigator();

function SavingsStackScreen(props) {
	return (
		<SavingsStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#C81A7C',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
					alignSelf: 'center',
				},
			}}>
			<SavingsStack.Screen
				name="Savings"
				component={SavingsScreen}
				options={{
					title: 'Savings',
					headerLeft: () => (
						<Icon.Button
							name="arrow-back-outline"
							size={25}
							backgroundColor="#C81A7C"
							onPress={() => props.navigation.navigate('Home')}
						/>
					),
					headerRight: () => (
						<View style={{ marginRight: 10 }}>
							<UserAvatar />
						</View>
					),
				}}
			/>
		</SavingsStack.Navigator>
	);
}

export default SavingsStackScreen;
