
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './pages/main';
import RecipePage from './pages/recipe';

const Stack = createStackNavigator();
const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainPage} />
            <Stack.Screen name="Recipe" component={RecipePage} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
