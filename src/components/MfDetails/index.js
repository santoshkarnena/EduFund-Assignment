import {Component} from 'react'
import './index.css'
import MfGraph from '../../MfGraph.'

class MfDetails extends Component {
  state = {mfDetails: {}, xValues: [], yValues: []}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://api.mfapi.in/mf/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const mfDetails = await response.json()
    const graphDetails = mfDetails.data
    const xValues = graphDetails.map(eachValue => eachValue.date)
    const yValues = graphDetails.map(eachValue => eachValue.nav)
    const modifiedMfDetails = {
      fundHouse: mfDetails.meta.fund_house,
      schemeCategory: mfDetails.meta.scheme_category,
      schemeName: mfDetails.meta.scheme_name,
      schemeType: mfDetails.meta.scheme_type,
    }
    this.setState({mfDetails: modifiedMfDetails, xValues, yValues})
  }

  render() {
    const {mfDetails, xValues, yValues} = this.state
    const {fundHouse, schemeCategory, schemeName, schemeType} = mfDetails

    return (
      <div className="mf-details-container">
        <div className="graph">
          <MfGraph
            xValues={xValues}
            yValues={yValues}
            schemeName={schemeName}
          />
        </div>
        <div className="details">
          <h1 className="type">
            Fund House : <span className="value"> {fundHouse}</span>
          </h1>
          <h1 className="type">
            Scheme Category : <span className="value"> {schemeCategory}</span>
          </h1>
          <h1 className="type">
            Scheme Name : <span className="value"> {schemeName}</span>
          </h1>
          <h1 className="type">
            Scheme Type : <span className="value"> {schemeType}</span>
          </h1>
        </div>
      </div>
    )
  }
}

export default MfDetails
