import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../../style/style';
import HomeStackScreen from '../..';
import AccountsStackScreen from '../../../Accounts';
import GivingStackScreen from '../../../Giving';
import PaymentsStackScreen from '../../../Payments';
import CardsStackScreen from '../../../Cards';

export default function TabNavigator() {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					height: 90,
					backgroundColor: '#DA67B6',
				},
			}}>
			<Tab.Screen
				name="Home"
				component={HomeStackScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.tapBarElements}>
							<Image
								source={require('../../../../Assets/Images/home.png')}
								resizeMode="contain"
								style={{ tintColor: focused ? '#C81A7C' : 'black' }}
							/>
							<Text style={{ color: focused ? '#C81A7C' : 'black', fontSize: 12 }}>Home</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Accounts"
				component={AccountsStackScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.tapBarElements}>
							<Image
								source={require('../../../../Assets/Images/accounts.png')}
								resizeMode="contain"
								style={{ tintColor: focused ? '#C81A7C' : 'black' }}
							/>
							<Text style={{ color: focused ? '#C81A7C' : 'black', fontSize: 12 }}>Accounts</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Giving"
				component={GivingStackScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.tapBarElements}>
							<Image
								source={require('../../../../Assets/Images/giving.png')}
								resizeMode="contain"
								style={{ tintColor: focused ? '#C81A7C' : 'black' }}
							/>
							<Text style={{ color: focused ? '#C81A7C' : 'black', fontSize: 12 }}>Giving</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Payments"
				component={PaymentsStackScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.tapBarElements}>
							<Image
								source={require('../../../../Assets/Images/payment.png')}
								resizeMode="contain"
								style={{ tintColor: focused ? '#C81A7C' : 'black' }}
							/>
							<Text style={{ color: focused ? '#C81A7C' : 'black', fontSize: 12 }}>Payments</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Cards"
				component={CardsStackScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={styles.tapBarElements}>
							<Image
								source={require('../../../../Assets/Images/cards.png')}
								resizeMode="contain"
								style={{ tintColor: focused ? '#C81A7C' : 'black' }}
							/>
							<Text style={{ color: focused ? '#C81A7C' : 'black', fontSize: 12 }}>Cards</Text>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
