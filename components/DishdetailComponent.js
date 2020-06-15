import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, StyleSheet, Button } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment, addComment } from '../redux/ActionCreators';
import Modal from 'modal-react-native-web';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites,

    }
}
const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)) ,
    addComment: (dishId, rating, comment, author) => dispatch(addComment(dishId, rating, comment, author)),
    postComment: (dishId, rating, comment, author) => dispatch(postComment(dishId, rating, comment, author))
});


class DishDetail extends Component {


    constructor(props) {

        super(props);
        this.state = {

            showModal: false,
            author: '',
            comment: '',
            rate: 0
            
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    markFavorite = (dishId) => {
        //this.setState({favorites: this.state.favorites.concat(dishId)});
        this.props.postFavorite(dishId);
    }

    handleComments(dishId) {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
        this.props.postComment(dishId, this.state.rating, this.state.author, this.state.comment);
        this.resetModal();
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    resetModal () {
        this.setState({ showModal: false,
                        rate: 0,
                        author:'',
                        comment:'' 
         });
    }

    ratingCompleted = (rating) => {

        this.setState({ rate : rating  });
      }

    render() {

        const dishidz = this.props.route.params.dishId;

        return (
            <ScrollView>

                <RenderDish dish={this.props.dishes.dishes[dishidz]} favorite={this.props.favorites.some(el => el === dishidz)}
                    onPress={() => this.markFavorite(dishidz)} onPress1={() => this.toggleModal()} />

                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishidz)} />

                <Modal animationType={"slide"}
                    transparent={false}
                    visible={this.state.showModal}
                // onRequestClose = {() => {this.toggleModal(); this.resetForm() }} >
                >
                    <View style={styles.modal}>
                        <Rating
                            showRating
                            onFinishRating={this.ratingCompleted}
                         // onFinishRating={this.setState({rate : rating}}
                            style={{ paddingVertical: 10 }}
                        />

                        <Input  leftIcon={{ type: 'font-awesome', name: 'user'}} placeholder='   Author' onChangeText={value => this.setState({ author: value })}/>  
                        <Input  leftIcon={{ type: 'font-awesome', name: 'comment'}} placeholder='  Comment' onChangeText={value => this.setState({ comment: value })} />  

                        <Button
                             onPress={() => { this.handleComments(dishidz) }}
                            color="#512DA8"
                            title="Submit" 
                         />
                        <View style={{height:20}}></View>
                        <Button
                            
                            onPress={() => { this.toggleModal(); }}
                            color="#777"
                            title="Cancel" />
                    </View>

                </Modal>
            </ScrollView>
        );
    }
}

function RenderComments(props) {
    const comments = props.comments;
    const renderCommentItem = ({ item, index }) => {
        return (
            <View key={index} style={{ margin: 20 }}>
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Rating style={{ flexDirection : 'row' , justifyContent : 'flex-start' }} imageSize={15} readonly startingValue={item.rating}/>
                {/* <Text style={{ fontSize: 12 }}>{item.rating} stars</Text> */}
                <Text style={{ fontSize: 12 }}>{'--' + item.author + ', ' + item.date}</Text>
            </View>
        );
    }
    return (
        <Card title="Comments">
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()} />
        </Card>
    )
}

function RenderDish(props) {

    const dish = props.dish;

    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={{ uri: baseUrl + dish.image }}>
                <Text >
                    {dish.description}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Icon
                        raised
                        reverse
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                    />
                    <Icon
                        raised
                        name={'pencil'}
                        type='font-awesome'
                        color='#015597'
                        //onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                        onPress={() => { props.onPress1(); }}
                    />
                </View>
            </Card>
        );
    }
    else {
        return (<View><Text>ur card stays here ur card stays here ur card stays here</Text></View>);
    }
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);
