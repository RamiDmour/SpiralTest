import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStackScreen from './App/Screens/SignIn/indus/RootStackScreen';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {

	return (
		<Provider store={store}>
			<NavigationContainer>
				<RootStackScreen />
			</NavigationContainer>
		</Provider>
	);
}
