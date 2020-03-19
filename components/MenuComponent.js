import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native';

function Menu(props) {

    return (

                            
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
            extraData={props}         //el moshkla hena....3awzen nbasy el props kolha t7t 3nd el onpress 3shan t3rfha 
        />
    )

}


const renderMenuItem = ({ item, index, separators }) => {
    return (

        <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        hideChevron={true}
        onPress={() => props.onPress(item.id)}
        leftAvatar={{ source: require('./images/uthappizza.png')}}
      />
    )
}


export default Menu;