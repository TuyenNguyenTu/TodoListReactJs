import React from 'react'
class SearchComponent extends React.Component {
  render() {
    return (
      <div className="col-4">
        <div className="input-group">
          <input type="text" className="form-controll" ref="search" placeholder="Search for..." />
          <span className="input-group-addon">
            <button className="btn btn-success" type="button">Tìm kiếm </button>
          </span>
        </div>
      </div>
    )
  }
}
export default SearchComponent