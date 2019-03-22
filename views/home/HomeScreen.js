import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import FadeInView from '../../res/animation_view/AnimationView';

class BackgroundImage extends Component {

    render() {
        return (
            <FadeInView style={styles.backgroundImage}>
                <ImageBackground source={require('../../res/img/background-1.jpg')} style={styles.backgroundImage}>
                    {this.props.children}
                </ImageBackground>
            </FadeInView>
        )
    }
}

export default class HomeScreen extends Component {
    constructor(props){
      super(props);
      this.state = {
          'query': ''
      };
    }
  
    static navigationOptions = {
      header: null
    };
  
    onSubmitHandler(event){
      this.props.navigation.navigate('SearchList', {
          'query': this.state.query
      });
    }
  
    render() {
      return (
          <BackgroundImage>
            <View style={styles.content}>
              <Text style={styles.logoTitle}>REVISOR</Text>
              <TextInput
              returnKeyType="Go"
              onChangeText={(text) => this.setState({'query': text})} 
              onSubmitEditing={(event) => this.onSubmitHandler(event)} 
              style={styles.searchText} 
              placeholder="Search here for movie"
              />
            </View>
          </BackgroundImage>
      );
    }
  }

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    logoTitle: {
        fontSize: 70,
        color: '#FFFFFF',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#000', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 1
    },
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
    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});