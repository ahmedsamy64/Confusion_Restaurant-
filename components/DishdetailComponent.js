import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES 
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
    
        const dishidz  = this.props.route.params.dishId ;
        return(
            
             <RenderDish dish={this.state.dishes[dishidz]} />
        );
    }
}
function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                    <Text >
                        {dish.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View><Text>ur card stays here ur card stays here ur card stays here</Text></View>);
        }
}


export default DishDetail;  