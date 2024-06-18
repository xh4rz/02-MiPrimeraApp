import { SafeAreaView } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
import { FlexDirectionScreen } from './src/screens/FlexDirectionScreen';

export const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* <HolaMundoScreen />  */}
			{/* <ContadorScreen />   */}
			{/* <BoxObjectModelScreen /> */}
			{/* <DimensionesScreen /> */}
			{/* <PositionScreen /> */}
			{/* <FlexScreen /> */}
			<FlexDirectionScreen />
		</SafeAreaView>
	);
};
