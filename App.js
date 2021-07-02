import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './App/Screens/Home/Drawer';

import RootStackScreen from './App/Screens/SignIn/indus/RootStackScreen';

export default function App() {
	return (
		<NavigationContainer>
			{/* <RootStackScreen /> */}
			<DrawerNavigator />
		</NavigationContainer>
	);
}
