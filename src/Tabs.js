import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "./Telas/Home";
import Medida1 from "./Telas/Medida1";
import Medida2 from "./Telas/Medida2";
import Medida3 from "./Telas/Medida3";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Pagina inicial') {
            iconName = 'home'; // Nome válido no FontAwesome
          } else if (route.name === 'Medida Linear') {
            iconName= 'line-chart'; // Nome válido no FontAwesome
          } else if (route.name === 'Medida de Área') {
            iconName = 'area-chart'; // Nome válido no FontAwesome
          } else if (route.name === 'Medida de Volume') {
            iconName = 'cube'; // Nome válido no FontAwesome
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'green',
        tabBarStyle:{backgroundColor:'#46DB79'}
        
      })}
    >
      <Tab.Screen name="Pagina inicial" component={Home} />
      <Tab.Screen name="Medida Linear" component={Medida1} />
      <Tab.Screen name="Medida de Área" component={Medida2} />
      <Tab.Screen name="Medida de Volume" component={Medida3} />
    </Tab.Navigator>
  );
};

export default Tabs;
