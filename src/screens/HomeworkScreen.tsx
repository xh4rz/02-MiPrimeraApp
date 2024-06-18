import { StyleSheet, View } from 'react-native';

export const HomeworkScreen = () => {
	return (
		<View style={styles.container}>
			<View style={[styles.box, styles.purpleBox]} />
			<View style={[styles.box, styles.orangeBox]} />
			<View style={[styles.box, styles.blueBox]} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#28425B'
	},
	box: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white'
	},
	purpleBox: {
		backgroundColor: '#5856D6'
	},
	orangeBox: {
		backgroundColor: '#F0A23B',
		flex: 1
	},
	blueBox: {
		backgroundColor: '#28C4D9'
	}
});

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#28425B',
// 		justifyContent: 'center'
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white'
// 	},
// 	purpleBox: {
// 		backgroundColor: '#5856D6'
// 	},
// 	orangeBox: {
// 		backgroundColor: '#F0A23B'
// 	},
// 	blueBox: {
// 		backgroundColor: '#28C4D9',
// 		width: '100%'
// 	}
// });

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#28425B',
// 		justifyContent: 'center'
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white'
// 	},
// 	purpleBox: {
// 		backgroundColor: '#5856D6',
// 		alignSelf: 'flex-end'
// 	},
// 	orangeBox: {
// 		backgroundColor: '#F0A23B'
// 	},
// 	blueBox: {
// 		backgroundColor: '#28C4D9',
// 		alignSelf: 'center'
// 	}
// });

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#28425B',
// 		justifyContent: 'space-between',
// 		alignItems: 'center'
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white'
// 	},
// 	purpleBox: {
// 		backgroundColor: '#5856D6',
// 		alignSelf: 'flex-end'
// 	},
// 	orangeBox: {
// 		backgroundColor: '#F0A23B'
// 	},
// 	blueBox: {
// 		backgroundColor: '#28C4D9',
// 		alignSelf: 'flex-start'
// 	}
// });

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#28425B',
// 		justifyContent: 'space-between',
// 		flexDirection: 'row'
// 	},
// 	box: {
// 		width: 100,
// 		borderWidth: 10,
// 		borderColor: 'white'
// 	},
// 	purpleBox: {
// 		backgroundColor: '#5856D6'
// 	},
// 	orangeBox: {
// 		backgroundColor: '#F0A23B'
// 	},
// 	blueBox: {
// 		backgroundColor: '#28C4D9'
// 	}
// });

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#28425B'
// 	},
// 	box: {
// 		borderWidth: 10,
// 		borderColor: 'white'
// 	},
// 	purpleBox: {
// 		backgroundColor: '#5856D6',
// 		flex: 2
// 	},
// 	orangeBox: {
// 		backgroundColor: '#F0A23B',
// 		flex: 2
// 	},
// 	blueBox: {
// 		backgroundColor: '#28C4D9',
// 		flex: 4
// 	}
// });

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#28425B',
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white'
// 	},
// 	purpleBox: {
// 		backgroundColor: '#5856D6'
// 	},
// 	orangeBox: {
// 		backgroundColor: '#F0A23B'
// 	},
// 	blueBox: {
// 		backgroundColor: '#28C4D9'
// 	}
// });

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#28425B',
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white'
// 	},
// 	purpleBox: {
// 		backgroundColor: '#5856D6'
// 	},
// 	orangeBox: {
// 		backgroundColor: '#F0A23B',
// 		right: -100
// 	},
// 	blueBox: {
// 		backgroundColor: '#28C4D9'
// 	}
// });

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#28425B',
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white'
// 	},
// 	purpleBox: {
// 		backgroundColor: '#5856D6',
// 		top: 100
// 	},
// 	orangeBox: {
// 		backgroundColor: '#F0A23B',
// 		right: -100
// 	},
// 	blueBox: {
// 		backgroundColor: '#28C4D9'
// 	}
// });

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#28425B',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		flexDirection: 'row'
// 	},
// 	box: {
// 		width: 100,
// 		height: 100,
// 		borderWidth: 10,
// 		borderColor: 'white'
// 	},
// 	purpleBox: {
// 		backgroundColor: '#5856D6'
// 	},
// 	orangeBox: {
// 		backgroundColor: '#F0A23B',
// 		top: 50
// 	},
// 	blueBox: {
// 		backgroundColor: '#28C4D9'
// 	}
// });
