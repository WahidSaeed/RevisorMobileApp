import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Container, Header, Item, Input, Body, Tab, Tabs, ScrollableTab, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import MovieSearchItemList from './movielists/SearchItem'

export default class SearchListScreen extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        header: null
    };

    render() {
        const { navigation } = this.props;
        const query = navigation.getParam('query');

        return (
        <Container>
            <Header hasTabs searchBar rounded>
            <Item>
                <Icon name="ios-people" />
                <Input placeholder="Search" value={{query}} />
                <Icon name="ios-search" />
            </Item>
            </Header>
            <Body>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    <Tab heading="Movies">
                        <MovieSearchItemList {...this.props}/>
                    </Tab>
                    <Tab heading="Books">
                        <Text>Tab1</Text>
                    </Tab>
                    <Tab heading="Cell Phones">
                        <Text>Tab1</Text>
                    </Tab>
                    <Tab heading="Games">
                        <Text>Tab1</Text>
                    </Tab>
                    <Tab heading="Others">
                        <Text>Tab1</Text>
                    </Tab>
                </Tabs>
            </Body>
            <Footer>
                <FooterTab>
                    <Button badge vertical>
                        <Badge><Text>2</Text></Badge>
                        <Icon name="apps" />
                        <Text>Apps</Text>
                    </Button>
                        <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button active badge vertical>
                        <Badge ><Text>51</Text></Badge>
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
        );
    }
}