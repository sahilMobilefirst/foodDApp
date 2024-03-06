// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screens/introScreen';
import Home from '../screens/Home';
import DetailScreen from '../screens/details';
import Cart from '../screens/cart';
import OrderScreen from '../screens/orders';
import OrderTracking from '../screens/trackingOrder';
import SearchScreen from '../screens/searchScreen';

// Screens

export type RootStackParamList = {
  Intro: undefined;
  Home: undefined;
  Details: undefined;
  Cart: undefined;
  Order: undefined;
  Tracking: undefined;
  Search: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationStack = () => (
  <NavigationContainer
    theme={{
      dark: false,
      colors: {
        primary: 'your_primary_color',
        background: 'white',
        card: 'your_card_color',
        text: 'your_text_color',
        border: 'your_border_color',
        notification: 'your_notification_color',
      },
    }}>
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tracking"
        component={OrderTracking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
