import React, { Component } from 'react';
import Menu from './MenuComponent.js';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Reservation from './ReservationComponent';
import Favorites from './FavoriteComponent';
import { View, Text, ScrollView, Image, StyleSheet , Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Menustack () {
   return (

     <Stack.Navigator initialRouteName = 'Menu' screenOptions = {{headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            color: '#fff'}}}>
<Stack.Screen
        name="Menu"
        component={Menu}
        options= {({ navigation }) => ({ headerLeft : () => ( <Icon name='menu' size={24} color='white'  onPress= {() => navigation.toggleDrawer()}   />) })}
      />
 <Stack.Screen 
        name = "Dishdetail" 
        component = {Dishdetail}
      /> 
</Stack.Navigator>

 ) 
}

function Homestack () { 
   return(
  
<Stack.Navigator>
  <Stack.Screen 
         name="Home"
         component={Home}
         options={({ navigation }) => ({
          headerStyle: {backgroundColor: '#512DA8'},
          headerTintColor:'#fff',
          headerTitleStyle: {color: '#fff'},
          headerLeft: () => (<Icon name='menu' size={24} color='white' onPress= {() => navigation.toggleDrawer()} />) } )} />
         
</Stack.Navigator>

)
}

function Contactstack () {
  return (

      <Stack.Navigator>
        <Stack.Screen 
             name="Contact"
             component={Contact}
             options={({ navigation }) => ({
              headerStyle: {backgroundColor: '#512DA8'},
              headerTintColor:'#fff',
              headerTitleStyle: {color: '#fff'},
              headerLeft: () => (<Icon name='menu' size={24} color='white' onPress= {() => navigation.toggleDrawer()} />) } )} />

      </Stack.Navigator>

  )
}

function Favoritesstack () {
  return (

      <Stack.Navigator>
        <Stack.Screen 
             name="My Favorites"
             component={Favorites}
             options={({ navigation }) => ({
              headerStyle: {backgroundColor: '#512DA8'},
              headerTintColor:'#fff',
              headerTitleStyle: {color: '#fff'},
              headerLeft: () => (<Icon name='menu' size={24} color='white' onPress= {() => navigation.toggleDrawer()} />) } )} />

      </Stack.Navigator>

  )
}

function Reservationstack () {
  return (

      <Stack.Navigator>
        <Stack.Screen 
             name="Reservation"
             component={Reservation}
             options={({ navigation }) => ({
              headerStyle: {backgroundColor: '#512DA8'},
              headerTintColor:'#fff',
              headerTitleStyle: {color: '#fff'},
              headerLeft: () => (<Icon name='menu' size={24} color='white' onPress= {() => navigation.toggleDrawer()} />) } )} />

      </Stack.Navigator>

  )
}

function Aboutstack () {
  return (

      <Stack.Navigator>
        <Stack.Screen 
             name="About"
             component={About}
             options={({ navigation }) => ({
              headerStyle: {backgroundColor: '#512DA8'},
              headerTintColor:'#fff',
              headerTitleStyle: {color: '#fff'},
              headerLeft: () => (<Icon name='menu' size={24} color='white' onPress= {() => navigation.toggleDrawer()} />) } )} />

      </Stack.Navigator>
  )
}



function Mainstack () {
  return(
    <NavigationContainer>
      <Drawer.Navigator   drawerStyle =  {{backgroundColor : '#D1C4E9'}} drawerContent = {CustomDrawerContentComponent} >
        <Drawer.Screen name="Home" component={Homestack} options={{drawerLabel: 'Home', drawerIcon: ({tintColor}) => (<Icon name='home' type='font-awesome' size={24} color={tintColor}/>) }} />
        <Drawer.Screen name="Menu" component={Menustack} options= {{drawerLabel: 'Menu', drawerIcon: ({tintColor}) => (<Icon name='list' type='font-awesome' size={24} color={tintColor} />)} }/>
        <Drawer.Screen name="About" component={Aboutstack} options= {{drawerLabel: 'About', drawerIcon: ({tintColor}) => (<Icon name='info-circle' type='font-awesome' size={24} color={tintColor} />)}}/>
        <Drawer.Screen name="Contact" component={Contactstack} options = {{drawerLabel: 'Contact', drawerIcon: ({tintColor}) => (<Icon name='address-card' type='font-awesome' size={22} color={tintColor} />)}}/>
        <Drawer.Screen name="My Favorites" component={Favoritesstack} options = {{drawerLabel: 'My Favorites', drawerIcon: ({tintColor}) => (<Icon name='heart' type='font-awesome' size={22} color={tintColor} />)}}/>
        <Drawer.Screen name="Reservation" component={Reservationstack} options = {{drawerLabel: 'Reservation', drawerIcon: ({tintColor}) => (<Icon name='cutlery' type='font-awesome' size={22} color={tintColor} />)}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const CustomDrawerContentComponent = (props) => (
  <DrawerContentScrollView>
    <SafeAreaView>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('./images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  </DrawerContentScrollView>
); 




class Main extends  Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
    render() {
       return(

        <View style={{flex:1}}>     
        <Mainstack />
        
    </View>
       ); 
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    marginTop : -10,
    marginBottom : 10,
    backgroundColor: '#512DA8',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);

/* const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu , navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name='menu' size={24} color='white' onPress= {() => navigation.toggleDrawer()} />
    })},
    Dishdetail: { screen: Dishdetail }
},{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
})

const HomeNavigator = createStackNavigator({
    Home : { screen: Home },

},{
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            color: '#fff'
        },
        headerLeft: <Icon name='menu' size={24} color='white' onPress= {() => navigation.toggleDrawer()} />
    })
})  

const ContactNavigator = createStackNavigator({
  Contact : { screen: Contact }

},{
  navigationOptions: ({navigation}) => ({
      headerStyle: {
          backgroundColor: '#512DA8'
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
          color: '#fff'
      },
      headerLeft: <Icon name='menu' size={24} color='white' onPress= {() => navigation.toggleDrawer()} />
  })
}) 

const AboutNavigator = createStackNavigator({
  About : { screen: About },

},{
  navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: '#512DA8'
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
          color: '#fff'
      },
      headerLeft: <Icon name='menu' size={24} color='white' onPress= {() => navigation.toggleDrawer()} />
  })
}) 

const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavigator, navigationOptions: { drawerLabel: 'Home', drawerIcon: ({tintColor}) => (<Icon name='home' type='font-awesome' size={24} color={tintColor} />)}},
    Menu: 
      { screen: MenuNavigator, navigationOptions: {drawerLabel: 'Menu', drawerIcon: ({tintColor}) => (<Icon name='list' type='font-awesome' size={24} color={tintColor} />)}},
    About: 
      { screen: AboutNavigator, navigationOptions: {drawerLabel: 'About', drawerIcon: ({tintColor}) => (<Icon name='info-circle' type='font-awesome' size={24} color={tintColor} />)}},
    Contact: 
      { screen: ContactNavigator, navigationOptions: {drawerLabel: 'Contact', drawerIcon: ({tintColor}) => (<Icon name='address-card' type='font-awesome' size={22} color={tintColor} />)}}
}, {
  drawerBackgroundColor: '#D1C4E9',
  contentComponent: CustomDrawerContentComponent
});
*/
