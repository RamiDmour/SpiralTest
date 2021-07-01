import React, { useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Modal, Platform, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

import avatarImage from '../../../Assets/Images/oval.png';

const styles = StyleSheet.create({
	userMenuContent: {
		position: 'absolute',
		top: Platform.OS === 'ios' ? 90 : 55,
		right: 10,
		width: 100,
	},
	userMenuOverlay: StyleSheet.absoluteFillObject,
});
export default function UserAvatar() {
	const [userMenuVisible, setUserMenuVisible] = useState(false);

	const hideUserMenu = () => {
		setUserMenuVisible(false);
	};
	const showUserMenu = () => {
		setUserMenuVisible(true);
	};

	return (
		<>
			<Avatar rounded source={avatarImage} onPress={showUserMenu} />
			<Modal visible={userMenuVisible} transparent>
				<TouchableWithoutFeedback onPress={hideUserMenu}>
					<View style={styles.userMenuOverlay} />
				</TouchableWithoutFeedback>
				<ListItem style={styles.userMenuContent}>
					<ListItem.Content>
						<ListItem.Title>Log out</ListItem.Title>
					</ListItem.Content>
				</ListItem>
			</Modal>
		</>
	);
}
