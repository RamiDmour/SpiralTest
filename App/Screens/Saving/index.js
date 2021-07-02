import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Home/style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import UserAvatar from '../Home/UserAvatar';
import CustomHeader from '../Checking/CustomHeader';
function SavingsScreen({}) {
	return (
		<View style={styles.tapBar}>
			<Text>Savings screen</Text>
		</View>
	);
}

const SavingsStack = createStackNavigator();

function SavingsStackScreen({ navigation }) {
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
					title: (
						<CustomHeader
							title="Savings"
							subtitle="Buy a house (...4044)"
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
		</SavingsStack.Navigator>
	);
}

export default SavingsStackScreen;
