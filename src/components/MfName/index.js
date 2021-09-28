import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class MfName extends Component {
  render() {
    const {mfData} = this.props
    const {schemeName, schemeCode} = mfData

    return (
      <li className="mf-item">
        <Link className="mf-link" to={`/mf/${schemeCode}`}>
          <p className="mf-name">{schemeName}</p>
        </Link>
      </li>
    )
  }
}

export default MfName
