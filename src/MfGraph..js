import {Component} from 'react'

import Plotly from 'plotly.js'

import createPlotlyComponent from 'react-plotly.js/factory'

const Plot = createPlotlyComponent(Plotly)

class MfGraph extends Component {
  render() {
    const {xValues, yValues, schemeName} = this.props
    return (
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: 'scatter',
            marker: {color: 'red'},
          },
        ]}
        layout={{
          width: 1200,
          height: 350,
          title: `${schemeName} Net Asset Value Plot`,
        }}
      />
    )
  }
}

export default MfGraph

// data={[{x: xValues, y: yValues, type: 'scatter'}]} layout={ {width:320, height:240, title: 'A Fancy Plot'} }
