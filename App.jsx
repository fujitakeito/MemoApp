import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from 'firebase/compat/app';
import { firebaseConfig } from './env';

const Stack = createNativeStackNavigator();


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SignUp'
        screenOptions={{
          headerStyle: { backgroundColor: "#467fd3" },
          headerTitleStyle: { color: "white" },
          headerTitle: "MemoApp",
          headerTintColor: "white",
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name='MemoList' component={MemoListScreen} />
        <Stack.Screen name='MemoDetail' component={MemoDetailScreen} />
        <Stack.Screen name='MemoEdit' component={MemoEditScreen} />
        <Stack.Screen name='MemoCreate' component={MemoCreateScreen} />
        <Stack.Screen options={{ animation: 'fade_from_bottom' }} name='LogIn' component={LogInScreen} />
        <Stack.Screen options={{ animation: 'fade_from_bottom' }} name='SignUp' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

