import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Text, View } from 'react-native';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };
    render() {
      //  const styles = { fontSize: '15px', marginBottom: 5, fontWeight: '500' }
        return (



            <Card
            //a    titleStyle={{ fontSize: '35px' }}
                title='Contact Information'>


                <Text >121, Clear Water Bay Road</Text>
                <Text >Clear Water Bay, Kowloon</Text>
                <Text >HONG KONG</Text>
                <Text >Tel: +852 1234 5678</Text>
                <Text >Fax: +852 8765 4321</Text>
                <Text >Email:confusion@food.net/Text</Text>


            </Card>


        )
    }
}

export default Contact;