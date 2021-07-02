import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style/style';
import Icon from 'react-native-vector-icons/Ionicons';
import UserAvatar from './UserAvatar';
import moment from 'moment';
import { Text } from 'react-native-paper';
import CustomHeader from '../Checking/CustomHeader';

function HomeScreen({ navigation }) {
	const [currentDate, setCurrentDate] = useState('');
	useEffect(() => {
		var date = moment().format('MMM DD, YYYY');
		setCurrentDate(date);
	}, []);
	const navigateChecking = () => navigation.navigate('Checking');
	const navigateSavings = () => navigation.navigate('Savings');
	const [subtitleChecking, setSubtitleChecking] = useState('Main account (...0353)');
	const [subtitleSavings, setSubtitleSaving] = useState('Buy a house (...4044)');
	const [subtitleGoodness, setSubtitleGoodness] = useState('Cash Rewards');

	return (
		<ScrollView style={styles.screenView}>
			<StatusBar backgroundColor="#C81A7C" />
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
							<CustomHeader title="Checking" subtitle={subtitleChecking} stylesSubtitle={styles.littleGreyText} />
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
							<CustomHeader title="Savings" subtitle={subtitleSavings} stylesSubtitle={styles.littleGreyText} />
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
							<CustomHeader title="Goodness" subtitle={subtitleGoodness} stylesSubtitle={styles.littleGreyText} />
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
