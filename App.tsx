// In App.js in a new project

import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AvoidSoftInput} from 'react-native-avoid-softinput';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useAnimatedKeyboard} from 'react-native-reanimated';

function HomeScreen() {
  const keyboard = useAnimatedKeyboard();

  // React.useEffect(() => {
  //   AvoidSoftInput.setShouldMimicIOSBehavior(true);
  // }, []);

  console.warn('This warn is outside safe area view');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
      }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        barStyle="dark-content"
        animated
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'fade',
            contentStyle: {backgroundColor: 'white'},
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
