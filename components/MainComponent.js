import React, { Component } from 'react';
import { View } from 'react-native'
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes';
import Dishdetail from './dishDetailComponent.js';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId})
    } //set the state by call this method 

    render() {

        return (
            <View style={{flex:1}}>
           <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />  
            <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </View>
        )
    }
}

export default Main;