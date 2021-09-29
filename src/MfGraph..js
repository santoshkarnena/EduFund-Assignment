import {Component} from 'react'
import './MfGraph.css'

import Plotly from 'plotly.js'

import createPlotlyComponent from 'react-plotly.js/factory'

const Plot = createPlotlyComponent(Plotly)

class MfGraph extends Component {
  render() {
    const {xValues, yValues, schemeName} = this.props
    return (
      <>
        <div className="sm-graph">
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
              width: 330,
              height: 350,
              title: `Net Asset Value Plot`,
            }}
          />
        </div>
        <div className="lg-graph">
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
              width: 1400,
              height: 350,
              title: `${schemeName} Net Asset Value Plot`,
            }}
          />
        </div>
      </>
    )
  }
}

export default MfGraph

// data={[{x: xValues, y: yValues, type: 'scatter'}]} layout={ {width:320, height:240, title: 'A Fancy Plot'} }
