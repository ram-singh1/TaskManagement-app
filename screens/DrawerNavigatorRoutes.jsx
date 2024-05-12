// Import React
import React, {useState} from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreens';
import CustomSidebarMenu from './components/CustomSidebarManu';
import NavigationDrawerHeader from './components/NavigationDrawerHeader';
import {StyleSheet} from 'react-native';
import LocationScreen from './LocationScreen';
import Icon from 'react-native-vector-icons/Feather';
import TaskIcons from 'react-native-vector-icons/MaterialIcons';
import CardIcons from 'react-native-vector-icons/Ionicons';
import SearchModal from '../components/Searchbar';
import TaskScreen from './TaskScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator(); // Added Bottom Tab Navigator

const HomeScreenStack = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleSearch = searchText => {
    // Implement your search logic here
    console.log('Searching for:', searchText);
  };
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Item listing', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: '#43436A', //Set Header text color
          headerTitleAlign: 'center',
          cardStyle: {backgroundColor: '#F6F9FF'},
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          elevation: 10,
          shadowColor: 'gray',
        },
        tabBarActiveTintColor: '#4577EF',
        tabBarInactiveTintColor: '#8A8F9B',
        cardStyle: {backgroundColor: '#F6F9FF'},
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Equiment card', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          // headerRight: () => (
          //   <View style={styles.headerIcon}>
          //     <TouchableOpacity
          //       style={{marginRight: 16}}
          //       onPress={() => {
          //         // Handle first icon action
          //       }}>
          //       <Icon
          //         name="search"
          //         size={24}
          //         color="#43436A"
          //         onPress={() => {
          //           // navigation.navigate('SearchScreen'); // Navigate to the SearchScreen
          //         }}
          //       />
          //     </TouchableOpacity>
          //     <TouchableOpacity
          //       onPress={() => {
          //         // Handle second icon action
          //       }}>
          //       <Icon
          //         name="filter"
          //         size={24}
          //         color="#43436A"
          //         onPress={() => {
          //           // Handle search action
          //         }}
          //       />
          //     </TouchableOpacity>
          //   </View>
          // ),
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: '#43436A', //Set Header text color
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const LocationScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="LocationScreen">
      <Stack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          title: 'Locations', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          // headerRight: () => (
          //   <View style={styles.headerIcon}>
          //     <TouchableOpacity style={{marginRight: 16}} onPress={{}}>
          //       <Icon
          //         name="search"
          //         size={24}
          //         color="#43436A"
          //         onPress={() => {}}
          //       />
          //     </TouchableOpacity>
          //     <TouchableOpacity
          //       onPress={() => {
          //         // Handle second icon action
          //       }}>
          //       <Icon
          //         name="filter"
          //         size={24}
          //         color="#43436A"
          //         onPress={() => {
          //           // Handle search action
          //         }}
          //       />
          //     </TouchableOpacity>
          //   </View>
          // ),
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: '#43436A', //Set Header text color
          headerTitleAlign: 'center',
          cardStyle: {backgroundColor: '#F6F9FF'},
        }}
      />
    </Stack.Navigator>
  );
};

const TaskScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="LocationScreen">
      <Stack.Screen
        name="TaskScreen"
        component={TaskScreen}
        options={{
          title: 'Tasks', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: '#43436A', //Set Header text color
          headerTitleAlign: 'center',
          cardStyle: {backgroundColor: '#F6F9FF'},
        }}
      />
    </Stack.Navigator>
  );
};
// Added Bottom Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.screenBgColor}
      screenOptions={{
        headerStyle: {
          elevation: 10,
          shadowColor: 'gray',
        },
        headerTitleAlign: 'center',
        tabBarStyle: {
          elevation: 4,
          height: 70,
          shadowColor: 'gray',
        },
        tabBarActiveTintColor: '#4577EF',
        tabBarInactiveTintColor: '#AAAAAA',
        tabBarLabelStyle: {marginBottom: 8},
        headerShown: false, // Hide the header
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Equipment"
        component={SettingScreenStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <CardIcons name="card-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreenStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <CardIcons name="location-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreenStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <TaskIcons name="add-task" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigatorRoutes = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Item creation'}}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="SettingScreenStack"
        options={{drawerLabel: 'Equipment Card'}}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="Organizations"
        options={{drawerLabel: 'Organizations'}}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="Business Partners"
        options={{drawerLabel: 'Business Partners'}}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="LocationScreenStack"
        options={{drawerLabel: 'Locations'}}
        component={TabNavigator}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  screenBgColor: {backgroundColor: '#F6F9FF'},
  headerIcon: {
    flexDirection: 'row',
    marginRight: 16,
  },
});

export default DrawerNavigatorRoutes;
