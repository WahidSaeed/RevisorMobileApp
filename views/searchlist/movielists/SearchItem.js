import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, List, ListItem, Thumbnail, Text, Left, Right, Button } from 'native-base';

class SearchItem extends Component {
    constructor(props){
        super(props);
    }

    getDetailsScreen(){
        this.props.navigation.navigate('MovieDetailScreen', {
            'MovieID': ''
        });
    }

    render(){
        return(
            <Content>
              <Card transparent onTouchEnd={()=> this.getDetailsScreen()}>
                <CardItem button>
                    <Thumbnail large square style={{resizeMode: 'cover'}} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNTNjNjQwMTEtOTJiZC00NDJhLWEzNjAtNTY0YzAzZmY1MGJjXkEyXkFqcGdeQXVyOTc4NTg3MDM@.jpg'}}/>
                    <Body>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Gully Boy <Text style={{fontWeight:'normal', fontSize:15}}>(2019)</Text></Text>
                        <Text style={{fontSize:10}}>118 min | Crime, Drama, Mystery</Text>
                        <Text style={{fontSize:10}}>A dynamic young entrepreneur finds herself locked in a hotel room with the corpse of her dead lover.</Text>
                    </Body>
                </CardItem>
             </Card>
            </Content>
        );
    }
}

export default class MovieSearchItemList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Container>
            <Content>
              <List>
                <ListItem>
                    <SearchItem {...this.props}/>  
                </ListItem>
                <ListItem>
                    <SearchItem {...this.props}/>  
                </ListItem>
                <ListItem>
                    <SearchItem {...this.props}/>  
                </ListItem>
                <ListItem>
                    <SearchItem {...this.props}/>
                </ListItem>
              </List>
            </Content>
        </Container>
        );
    }
}

var styles = StyleSheet.create({
    searchText: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginLeft: '5%', 
        marginRight: '5%',
        borderBottomWidth: 1,
        borderColor: '#000',
        borderRadius: 30,
        paddingLeft: 20
    },
    cardItemTitle: {
        borderColor: '#000'
    }
});