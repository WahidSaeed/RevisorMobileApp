import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Container, Content, Card, CardItem, Body, List, ListItem, Text, Thumbnail } from 'native-base';

class SearchItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Content>
              <Card transparent>
                <CardItem header>
                    <View style={{ flex: 3, flexDirection: 'column' }}><Text style={{fontSize:20, fontWeight:'bold'}}>Spoiler Free Review of Badla</Text></View>
                    <View style={{ alignItems: 'flex-end',flex: 1,flexDirection: 'column' }}>
                        <Thumbnail style={{width:40, resizeMode: 'contain'}} source={require('../../../res/img/Rotten_dislike.png')} />
                    </View>
                </CardItem>
                <CardItem>
                    <Text style={{fontSize:10}}>JigarPatel1112 | March 2019</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={{fontSize:10}}>#BadlaReview Sujoy Ghosh continuously failed to meet the expectations that he had created with Kahaani! But the expectations of his comeback were always high. Trailer made Badla look like that comeback movie. And yes, indeed it is that movie.

                            The whole cast's performances were very realistic and top class.

                            In this revenge Drama, not even a single character is set till the end. Every now and then you keep wondering who is protagonist and who is antagonist.

                            Oh, forgot to mention. There are some references to Mahabharata as well. Also, if you pay attention, below lines become very powerful.
                            Me 6 dekhu jo tum mjhe dikha rhi ho ya isme chhipa hua 9 dekhu.
                            Answers lies in the details.


                            So we all know that it's a revenge story (Title gives that away). But who is taking revenge? Is this revenge of only one person?

                            What I liked: Direction, acting of the entire cast especially Amitabh, Tapsee and Amrita, production value, screenplay, suspense.

                            What I didn't like: All the characters are shown very intelligent. I can accept that. But sometimes they do silly mistakes, which is not acceptable on seeing their intelligence.

                            Overall: There is not even a single frame that will bore you. Its one of the rare Bollywood movie which keep you engaged from the word GO. Badla is not one of its kind movie but its one of the best of its kind. Have you watched Kahaani, Drishyam or Andhdhun? Then you must watch #Badla.</Text>
                    </Body>
                </CardItem>
                <CardItem footer button>
                    <Text style={{ fontSize:10 }}>Full Review Link</Text>
                </CardItem>
             </Card>
            </Content>
        );
    }
}

export default class RottenTomatoesReviewList extends Component {
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