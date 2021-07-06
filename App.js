import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './App/Screens/Home/Drawer';

import RootStackScreen from './App/Screens/SignIn/indus/RootStackScreen';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';

import { AuthContext } from './App/Screens/SignIn/components/context';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Users from './App/Screens/SignIn/indus/users';

export default function App() {
	// const [isLoading, setIsLoading] = useState(true);
	// const [userToken, setUserToken] = useState(null);

	const initialLoginState = {
		isLoading: true,
		userName: null,
		userToken: null,
	};

	const loginReducer = (prevState, action) => {
		switch (action.type) {
			case 'RETRIEVE_TOKEN':
				return {
					...prevState,
					userToken: action.token,
					isLoading: false,
				};
			case 'LOGIN':
				return {
					...prevState,
					userName: action.id,
					userToken: action.token,
					isLoading: false,
				};
			case 'LOGOUT':
				return {
					...prevState,
					userName: null,
					userToken: null,
					isLoading: false,
				};
			case 'REGISTER':
				return {
					...prevState,
					userName: action.id,
					userToken: action.token,
					isLoading: false,
				};
		}
	};

	const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

	const authContext = useMemo(
		() => ({
			signIn: async (foundUser) => {
				const userToken = String(foundUser[0].userToken);
				const userName = foundUser[0].username;
				try {
					await AsyncStorage.setItem('userToken', userToken);
				} catch (e) {
					console.log(e);
				}
				// console.log('user token', userToken);
				dispatch({ type: 'LOGIN', id: userName, token: userToken });
			},
			signOut: async () => {
				try {
					await AsyncStorage.removeItem('userToken');
				} catch (e) {
					console.log(e);
				}
				dispatch({ type: 'LOGOUT' });
			},
		}),
		[],
	);

	useEffect(() => {
		setTimeout(async () => {
			let userToken;
			userToken = null;
			try {
				userToken = await AsyncStorage.getItem('userToken');
			} catch (e) {
				console.log(e);
			}
			// console.log('user token', userToken);
			dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
		}, 1000);
	}, []);

	if (loginState.isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" color="#C81A7C" />
			</View>
		);
	}

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				{loginState.userToken !== null ? <DrawerNavigator /> : <RootStackScreen />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
