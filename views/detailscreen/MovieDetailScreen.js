import React, { Component } from 'react';
import { View, Image , StyleSheet, TouchableHighlight, Modal } from 'react-native'
import { H1, H3, Text, Container, Tab, Tabs, ScrollableTab, Col, Row, Grid, TabHeading, Thumbnail } from 'native-base';
import IMDBReviewList from "./moviereviewlist/IMDBReviewList";
import RottenTomatoesReviewList from './moviereviewlist/RottenTomatoesReviewList';
import MetacriticsReviewList from './moviereviewlist/MetacriticsReviewList';
import Gallery from 'react-native-image-gallery';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Theme from '../../res/theme'
import Pie from '../../res/charts/Pie'

const spendingsLastMonth = [
  {"number":  18, "name": 'Fun activities'},
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
                this.setModalVisible(true);
              }}>
                  <Image resizeMode="cover" source={{uri: 'https://m.media-amazon.com/images/M/MV5BNGU2MTQ0ZDEtZjU2ZC00MGI3LWFlYTAtMGExMmUxMTJjYzc1XkEyXkFqcGdeQXVyNTYyMDE3Nzg@.jpg', width: window.width, height: 300}} style={styles.backgroundImage} />
                  <View style={{ padding: 20, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height: 300, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <H1 style={{ backgroundColor: '#000', padding: 10, color:'#fff' }}>300</H1>
                    <H3 style={{ backgroundColor: '#000', padding: 10, color:'#fff' }}>2014 - 2015</H3>
                  </View>
                  <View style={{  flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Pie
                      pieWidth={150}
                      pieHeight={150}
                      colors={Theme.colors}
                      width={200}
                      height={200}
                      data={spendingsLastMonth} />
                  </View>
              </View>
            )}
            >
              <Tabs renderTabBar={()=> <ScrollableTab />}>
                  <Tab heading={<TabHeading><Text>Movie Details</Text></TabHeading>}>
                      <Grid>
                        <Row>
                          <Col style={{width: 100}}><Text>Starring:</Text></Col>
                          <Col><Text>François Bégaudeau</Text></Col>
                        </Row>
                        <Row>
                          <Col style={{width: 100}}><Text>Summary:</Text></Col>
                          <Col><Text>François and his fellow teachers prepare for a new year at a high school in a tough neighborhood. Armed with the best intentions, they brace themselves to not let discouragement stop them from trying to give the best education to their students. Cultures and attitudes often clash in the classroom, a microcosm of contemporary France. As amusing and inspiring as the teenaged students can be, their difficult behavior can still jeopardize any teacher's enthusiasm for the low-paying job. François insists on an atmosphere of respect and diligence. Neither stuffy nor severe, his extravagant frankness often takes the students by surprise. But his classroom ethics are put to the test when his students begin to challenge his methods. (Sony Classics)</Text></Col>
                        </Row>
                        <Row>
                          <Col style={{width: 100}}><Text>Director:</Text></Col>
                          <Col><Text>Laurent Cantet</Text></Col>
                        </Row>
                        <Row>
                          <Col style={{width: 100}}><Text>Genre(s):</Text></Col>
                          <Col><Text>Drama</Text></Col>
                        </Row>
                        <Row>
                          <Col style={{width: 100}}><Text>Rating:</Text></Col>
                          <Col><Text>PG-13</Text></Col>
                        </Row>
                        <Row>
                          <Col style={{width: 100}}><Text>Runtime:</Text></Col>
                          <Col><Text>128 min</Text></Col>
                        </Row>
                      </Grid>
                  </Tab>
                  <Tab heading={<TabHeading><Thumbnail style={{resizeMode: 'contain'}} small square source={require('../../res/img/IMDB_Logo.png')}/><Text>Reviews</Text></TabHeading>}>
                      <IMDBReviewList {...this.props} />
                  </Tab>
                  <Tab heading={<TabHeading><Thumbnail style={{resizeMode: 'contain'}} small square source={require('../../res/img/Rotten_Tomatoes_logo.png')}/><Text>Reviews</Text></TabHeading>}>
                      <RottenTomatoesReviewList {...this.props} />
                  </Tab>
                  <Tab heading={<TabHeading><Thumbnail style={{resizeMode: 'contain'}} small square source={require('../../res/img/Metacritic_logo.png')}/><Text>Reviews</Text></TabHeading>}>
                      <MetacriticsReviewList {...this.props} />
                  </Tab>
              </Tabs>
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