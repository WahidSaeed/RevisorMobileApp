import React, { Component } from 'react';
import { View, Image , StyleSheet, TouchableHighlight, Modal } from 'react-native'
import { H1, Text, Container, Footer, FooterTab, Button, Icon, Badge, Content } from 'native-base';
import Gallery from 'react-native-image-gallery';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Theme from '../../res/theme'
import Pie from '../../res/charts/Pie'

const spendingsLastMonth = [
  {"number":  8, "name": 'Fun activities'},
  {"number": 7, "name": 'Dog'},
];

export default class MovieDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imageuri: '',
          ModalVisibleStatus: false,
          activeIndex: 0
        };
        this.state = { items: [], modalVisible: false };
      }

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
      
      componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(1)).map((v, i) => {
          return {
            source: {
              uri: 'https://m.media-amazon.com/images/M/MV5BNGU2MTQ0ZDEtZjU2ZC00MGI3LWFlYTAtMGExMmUxMTJjYzc1XkEyXkFqcGdeQXVyNTYyMDE3Nzg@.jpg',
            },
          };
        });
        that.setState({ items });
      }

    static navigationOptions = {
        header: null
    };
    
    render() {
      return (
        <Container>
          <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible} 
          >
            <View style={{ flex: 1, backgroundColor: '#000'}}>
                <Gallery style={{ flex: 1, backgroundColor: 'black' }} images={[{source: {
              uri: 'https://m.media-amazon.com/images/M/MV5BNGU2MTQ0ZDEtZjU2ZC00MGI3LWFlYTAtMGExMmUxMTJjYzc1XkEyXkFqcGdeQXVyNTYyMDE3Nzg@.jpg',
            }}]} />
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={{color: '#fff'}}>X</Text>
                </TouchableHighlight>
            </View>
          </Modal>
          <ParallaxScrollView
            contentBackgroundColor="#000"
            parallaxHeaderHeight={300}
            contentBackgroundColor="#fff" 
            renderForeground={() => (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onTouchEnd={() => {
                this.setModalVisible(false);
              }}>
                  <Image resizeMode="cover" source={{uri: 'https://m.media-amazon.com/images/M/MV5BNGU2MTQ0ZDEtZjU2ZC00MGI3LWFlYTAtMGExMmUxMTJjYzc1XkEyXkFqcGdeQXVyNTYyMDE3Nzg@.jpg', width: window.width, height: 300}} style={styles.backgroundImage} />
                  <View style={{ padding: 20, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height: 300, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <H1 style={{ backgroundColor: '#000', padding: 10, color:'#fff' }}>300</H1>
                    <H1 style={{ backgroundColor: '#000', padding: 10, color:'#fff' }}>adfsrg sdfsdf</H1>
                  </View>
              </View>
            )}
            >
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Pie
                style={{ top: -100 }}
                pieWidth={150}
                pieHeight={150}
                colors={Theme.colors}
                width={200}
                height={200}
                data={spendingsLastMonth} />
            </View>
          </ParallaxScrollView>
        </Container>
      );
    }
  }


  var styles = StyleSheet.create({
      backgroundImage: {
        width: '100%'
      }
  });