
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../utils';

import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}
