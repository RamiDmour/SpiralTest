import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Home/style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import UserAvatar from '../Home/UserAvatar';

function AccountsScreen({}) {
	return (
		<View style={styles.tapBar}>
			<Text>Accounts screen</Text>
		</View>
	);
}

const AccountsStack = createStackNavigator();

function AccountsStackScreen({ navigation }) {
	return (
		<AccountsStack.Navigator
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
			<AccountsStack.Screen
				name="Accounts"
				component={AccountsScreen}
				options={{
					title: 'Accounts',
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
		</AccountsStack.Navigator>
	);
}

export default AccountsStackScreen;
