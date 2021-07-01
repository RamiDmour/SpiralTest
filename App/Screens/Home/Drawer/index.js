import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabBar';
import { DrawerContent } from './Shared';
import CheckingStackScreen from '../../Checking';
import SavingsStackScreen from '../../Saving';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
	return (
		<Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
			<Drawer.Screen name="HomeDrawer" component={TabNavigator} />
			<Drawer.Screen name="Checking" component={CheckingStackScreen} />
			<Drawer.Screen name="Savings" component={SavingsStackScreen} />
		</Drawer.Navigator>
	);
}
