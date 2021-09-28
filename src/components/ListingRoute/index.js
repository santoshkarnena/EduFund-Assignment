import {Component} from 'react'
import './index.css'
import MfName from '../MfName'

export default class ListingRoute extends Component {
  state = {searchInput: '', mfData: []}

  componentDidMount() {
    this.getMfsData()
  }

  getMfsData = async () => {
    const apiUrl = 'https://api.mfapi.in/mf'
    const {searchInput} = this.state
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const mfsData = await response.json()
    const filteredData = mfsData.filter(eachMf =>
      eachMf.schemeName.toUpperCase().includes(searchInput.toUpperCase()),
    )
    const fiveMfs = filteredData.slice(0, 5)
    this.setState({mfData: fiveMfs}, this.getMfsData)
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  onLogout = () => {
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {searchInput, mfData} = this.state

    return (
      <div className="mf-list-section">
        <div className="responsive-list-section">
          <label className="search-label" htmlFor="mfSearch">
            Mutual Fund Name:
          </label>
          <input
            className="input-box search-input"
            type="search"
            id="mfSearch"
            placeholder="Enter the mutual fund name"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <ul className="mfs-list">
            {mfData.map(eachMf => (
              <MfName mfData={eachMf} key={eachMf.schemeName} />
            ))}
          </ul>
          <button
            className="logout-button"
            type="button"
            onClick={this.onLogout}
          >
            Sign Out
          </button>
        </div>
      </div>
    )
  }
}
