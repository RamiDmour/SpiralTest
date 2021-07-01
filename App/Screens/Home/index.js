import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import UserAvatar from './UserAvatar';
import moment from 'moment';
import { Text } from 'react-native-paper';

function HomeScreen({ navigation }) {
	const [currentDate, setCurrentDate] = useState('');
	useEffect(() => {
		var date = moment().format('MMM DD, YYYY');
		setCurrentDate(date);
	}, []);
	const navigateChecking = () => navigation.navigate('Checking');
	const navigateSavings = () => navigation.navigate('Savings');

	return (
		<ScrollView style={styles.screenView}>
			<View style={styles.container}>
				<Text style={styles.date}>Good morning Danny | {currentDate}</Text>
				<View style={styles.partsContainer}>
					<Text style={{ fontSize: 25, alignSelf: 'center' }}>Accounts Overview</Text>
					<Text style={{ fontSize: 25, alignSelf: 'center' }}>
						$7,000.<Text style={{ fontSize: 20, alignSelf: 'center' }}>80</Text>
					</Text>
					<Text style={{ alignSelf: 'center', color: 'grey', marginTop: 3, fontSize: 12 }}>Total Available Cash</Text>
					<View style={{ marginTop: 10 }}>
						<TouchableOpacity style={styles.button} onPress={navigateChecking}>
							<View style={{ flexDirection: 'column' }}>
								<Text>Checking</Text>
								<Text style={{ color: 'grey' }}>Main account (...0353)</Text>
							</View>
							<View style={{ flexDirection: 'row' }}>
								<Text style={{ fontSize: 25 }}>
									$1,500.<Text style={{ fontSize: 20 }}>20</Text>
								</Text>
								<Icon.Button
									name="arrow-forward"
									size={20}
									backgroundColor="#fff"
									color="#C81A7C"
									onPress={navigateChecking}
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={navigateSavings}>
							<View style={{ flexDirection: 'column' }}>
								<Text>Savings</Text>
								<Text style={{ color: 'grey' }}>Buy a house (...4044)</Text>
							</View>
							<View style={{ flexDirection: 'row' }}>
								<Text style={{ fontSize: 25 }}>
									$5000.<Text style={{ fontSize: 20 }}>20</Text>
								</Text>
								<Icon.Button
									name="arrow-forward"
									size={20}
									backgroundColor="#fff"
									color="#C81A7C"
									onPress={navigateSavings}
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button}>
							<View style={{ flexDirection: 'column' }}>
								<Text>Goodness</Text>
								<Text style={{ color: 'grey' }}>Main account (...0353)</Text>
							</View>
							<View style={{ flexDirection: 'row' }}>
								<Text style={{ fontSize: 25 }}>
									$500.<Text style={{ fontSize: 20 }}>40</Text>
								</Text>
								<Icon.Button name="arrow-forward" size={20} backgroundColor="#fff" color="#C81A7C" />
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.partsContainer}>
					<Text>YOUR GIVING IMPACT{'\n'} and something</Text>
				</View>
			</View>
		</ScrollView>
	);
}

const HomeStack = createStackNavigator();

function HomeStackScreen({ navigation }) {
	return (
		<HomeStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#C81A7C',
				},
			}}>
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerLeft: () => (
						<View>
							<Icon.Button
								name="ios-menu"
								size={25}
								backgroundColor="#C81A7C"
								onPress={() => navigation.openDrawer()}
							/>
						</View>
					),
					headerTitle: () => (
						<View style={styles.topBar}>
							<Image source={require('../../Assets/Images/heart.png')} style={styles.topBarImage} />
							<Text style={styles.topBarText}>Spiral</Text>
						</View>
					),
					headerRight: () => (
						<View style={{ marginRight: 10 }}>
							<UserAvatar />
						</View>
					),
				}}
			/>
		</HomeStack.Navigator>
	);
}

export default HomeStackScreen;

// const Tab = createBottomTabNavigator();

/* let homeIcon: require('../../Assets/Images/home.png');
let accountsIcon: require('../../Assets/Images/accounts.png');
let givingIcon: require('../../Assets/Images/giving.png');
let paymentsIcon: require('../../Assets/Images/payment.png');
const state = {
	index: 0,
	routes: [
		{ key: 'first', title: 'Home', icon: <Image source={homeIcon} /> },
		{ key: 'second', title: 'Accounts', icon: <Image source={accountsIcon} /> },
		{ key: 'third', title: 'Giving', icon: <Image source={givingIcon} /> },
		{ key: 'third', title: 'Payments', icon: <Image source={paymentsIcon} /> },
		{ key: 'third', title: 'Cards', icon: <Image source={cardsIcon} /> },
	],
}; */

// export default function App() {
// 	return (
// 		<SafeAreaProvider>
// 			<NavigationContainer>
// 				<Tab.Navigator
// 					/* screenOptions={({ route }) => ({
// 					tabBarIcon: ({ focused, color, size }) => {
// 						let iconName;

// 						if (route.name === 'Home') {
// 							iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
// 						} else if (route.name === 'Settings') {
// 							iconName = focused ? 'ios-list-box' : 'ios-list';
// 						}

// 						// You can return any component that you like here!
// 						return <Ionicons name={iconName} size={size} color={color} />;
// 					},
// 				})} */
// 					tabBarOptions={{
// 						showLabel: false,
// 						style: {
// 							height: 90,
// 							backgroundColor: '#DA67B6',
// 						},
// 					}}>
// 					<Tab.Screen
// 						name="Home"
// 						component={HomeStackScreen}
// 						options={{
// 							tabBarIcon: ({ focused }) => (
// 								<View style={styles.tapBarElements}>
// 									<Image
// 										source={require('../../Assets/Images/home.png')}
// 										resizeMode="contain"
// 										style={{ tintColor: focused ? '#C81A7C' : 'black' }}
// 									/>
// 									<Text style={{ color: focused ? '#C81A7C' : 'black', fontSize: 12 }}>Home</Text>
// 								</View>
// 							),
// 						}}
// 					/>
// 					<Tab.Screen
// 						name="Accounts"
// 						component={AccountsStackScreen}
// 						options={{
// 							tabBarIcon: ({ focused }) => (
// 								<View style={styles.tapBarElements}>
// 									<Image
// 										source={require('../../Assets/Images/accounts.png')}
// 										resizeMode="contain"
// 										style={{ tintColor: focused ? '#C81A7C' : 'black' }}
// 									/>
// 									<Text style={{ color: focused ? '#C81A7C' : 'black', fontSize: 12 }}>Accounts</Text>
// 								</View>
// 							),
// 						}}
// 					/>
// 					<Tab.Screen
// 						name="Giving"
// 						component={GivingStackScreen}
// 						options={{
// 							tabBarIcon: ({ focused }) => (
// 								<View style={styles.tapBarElements}>
// 									<Image
// 										source={require('../../Assets/Images/giving.png')}
// 										resizeMode="contain"
// 										style={{ tintColor: focused ? '#C81A7C' : 'black' }}
// 									/>
// 									<Text style={{ color: focused ? '#C81A7C' : 'black', fontSize: 12 }}>Giving</Text>
// 								</View>
// 							),
// 						}}
// 					/>
// 					<Tab.Screen
// 						name="Payments"
// 						component={PaymentsStackScreen}
// 						options={{
// 							tabBarIcon: ({ focused }) => (
// 								<View style={styles.tapBarElements}>
// 									<Image
// 										source={require('../../Assets/Images/payment.png')}
// 										resizeMode="contain"
// 										style={{ tintColor: focused ? '#C81A7C' : 'black' }}
// 									/>
// 									<Text style={{ color: focused ? '#C81A7C' : 'black', fontSize: 12 }}>Payments</Text>
// 								</View>
// 							),
// 						}}
// 					/>
// 					<Tab.Screen
// 						name="Cards"
// 						component={CardsStackScreen}
// 						options={{
// 							tabBarIcon: ({ focused }) => (
// 								<View style={styles.tapBarElements}>
// 									<Image
// 										source={require('../../Assets/Images/cards.png')}
// 										resizeMode="contain"
// 										style={{ tintColor: focused ? '#C81A7C' : 'black' }}
// 									/>
// 									<Text style={{ color: focused ? '#C81A7C' : 'black', fontSize: 12 }}>Cards</Text>
// 								</View>
// 							),
// 						}}
// 					/>
// 				</Tab.Navigator>
// 			</NavigationContainer>
// 		</SafeAreaProvider>
// 	);
// }
