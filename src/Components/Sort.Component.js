import React from 'react'

class SortComponent extends React.Component{
    render() {
        return (
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by <span className="carvet" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" role="button">NAME ACS</a></li>
                <li><a className="dropdown-item" role="button">NAME DESC</a></li>
                <li className="divider" role="separator" />
                <li><a className="dropdown-item" role="button">LEVEL ACS</a></li>
                <li><a className="dropdown-item" role="button">LEVEL DESC</a></li>
              </ul>
              <span className="badge  badge-success">NAME - DECS</span>
            </div>
        )
    }
}
export default SortComponent