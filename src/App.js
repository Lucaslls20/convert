import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Telas/Home';
import Medida1 from './Telas/Medida1';
import Medida2 from './Telas/Medida2';
import Medida3 from './Telas/Medida3';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000080', // Muda a cor de fundo do cabeçalho
          },
          headerTintColor: 'green', // Muda a cor do texto e dos ícones no cabeçalho
          headerTitleStyle: {
            fontWeight: 'bold', // Opcional: Muda o estilo do título
          },
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Medida Linear" component={Medida1} />
        <Stack.Screen name="Medida de Área" component={Medida2} />
        <Stack.Screen name="Medida de Volume" component={Medida3} />
        
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}
