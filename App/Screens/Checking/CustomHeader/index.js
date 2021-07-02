import React from 'react';
import styles from '../../Home/style/style';
import { Text, View } from 'react-native';

const CustomHeader = ({ title, subtitle, stylesTitle, stylesSubtitle }) => (
	<View /* style={{ flexDirection: 'column' }} */ style={{ flexDirection: 'column' }}>
		<Text /* style={styles.title} */ style={stylesTitle}>{title}</Text>
		<Text /* style={styles.subtitle} */ style={stylesSubtitle}>{subtitle}</Text>
	</View>
);

export default CustomHeader;
