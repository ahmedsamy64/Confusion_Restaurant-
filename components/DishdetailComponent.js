import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function Dishdetail(props) {
    return(<RenderDish dish={props.dish} />);
}
function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View><Text>ur card stays here ur card stays here ur card stays here</Text></View>);
        }
}


export default Dishdetail;  