// @flow
'use strict';

import React from 'react';
import {
  View,
  ART
} from 'react-native';

const {
  Surface,
  Group
} = ART;

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import AnimShape from '../art/AnimShape';
import Theme from '../theme';

const d3 = {
  scale,
  shape,
};

type Props = {
  height: number,
  width: number,
  pieWidth: number,
  pieHeight: number,
  colors: any,
  onItemSelected: any
};

type State = {
  highlightedIndex: number,
};

class Pie extends React.Component {

  state: State;

  constructor(props: Props) {
    super(props);
    this.state = { highlightedIndex: 0 };
    this._createPieChart = this._createPieChart.bind(this);
    this._value = this._value.bind(this);
    this._label = this._label.bind(this);
    this._color = this._color.bind(this);
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
  }

  // methods used to tranform data into piechart:
  // TODO: Expose them as part of the interface
  _value(item) { return item.number; }

  _label(item) { return item.name; }

  _color(index) { return Theme.colors[index]; }

  _createPieChart(index) {

    var arcs = d3.shape.pie()
        .value(this._value)
        (this.props.data);

    var arc = d3.shape.arc()
      .outerRadius(this.props.pieWidth/2)
      .padAngle(.05)
      .innerRadius(60);

    var arcData = arcs[index];
    var path = arc(arcData);

     return {
       path,
       color: this._color(index),
     };
  }

  _onPieItemSelected(index) {
    this.setState({...this.state, highlightedIndex: index});
    this.props.onItemSelected(index);
  }

  render() {
    const margin = styles.container.margin;
    const x = this.props.pieWidth / 2 + margin;
    const y = this.props.pieHeight / 2 + margin;

    return (
      <View style={this.props.style} width={this.props.width} height={this.props.height}>
        <Surface width={this.props.width} height={this.props.height}>
           <Group x={x} y={y}>
           {
              this.props.data.map( (item, index) =>
              (<AnimShape
                 key={'pie_shape_' + index}
                 color={this._color(index)}
                 d={ () => this._createPieChart(index)}
              />)
              )
            }
           </Group>
        </Surface>
      </View>
    );
  }
}

/**
 * <View style={{position: 'absolute', top:margin, left: 2*margin + this.props.pieWidth}}>
          {
            this.props.data.map( (item, index) =>
            {
              var fontWeight = this.state.highlightedIndex == index ? 'bold' : 'normal';
              return (
                <TouchableWithoutFeedback key={index} onPress={() => this._onPieItemSelected(index)}>
                  <View>
                    <Text style={[styles.label, {color: this._color(index), fontWeight: fontWeight}]}>{this._label(item)}: {this._value(item)}%</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })
          }
        </View>
 */

const styles = {
  container: {
    margin: 20,
  },
  label: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'normal',
  }
};

export default Pie;