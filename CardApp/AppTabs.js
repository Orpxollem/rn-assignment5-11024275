import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native-elements';
import Home from './Home';
import Settings from './Settings';
import Cards from './CardsScreen';
import Statistics from './StatisticsScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0164fa',
        inactiveTintColor: '#8d8d96',
      }}
    >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', marginTop: 25},
        headerShown: false,
        tabBarIcon: () => (
          <Image source={require('./assets/home.png')} style={{height: 30, width: 30, marginTop: 30}}/>
        ),
      }}
      />
      <Tab.Screen 
      name="My Cards" 
      component={Cards} 
      options={{
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', marginTop: 25},
        headerShown: false,
        tabBarIcon: () => (
          <Image source={require('./assets/myCards.png')} style={{height: 30, width: 30, marginTop: 30, tintColor: '#0164fa'}}/>
        ),
      }}
      />
      <Tab.Screen 
      name="Statistics" 
      component={Statistics} 
      options={{
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', marginTop: 25},
        headerShown: false,
        tabBarIcon: () => (
          <Image source={require('./assets/statictics.png')} style={{height: 30, width: 30, marginTop: 30, tintColor: '#0164fa'}}/>
        ),
      }}
      />
      <Tab.Screen 
      name="Settings" 
      component={Settings} 
      options={{
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', marginTop: 25},
        headerShown: false,
        tabBarIcon: () => (
          <Image source={require('./assets/settings.png')} style={{height: 30, width: 30, marginTop: 30, tintColor: '#0164fa'}}/>
        ),
      }}
      />
    </Tab.Navigator>
  );
}