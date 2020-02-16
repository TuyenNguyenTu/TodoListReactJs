import React from 'react'

class ContentTodo extends React.Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.index}</th>
        <td>{this.props.name}
        </td>
        {this.props.rowLevel}
        <td>
          <a href="/" role="button" className="btn btn-warning">Edit</a>
          <a href="/" role="button" className="btn btn-danger">Delete</a>
        </td>
      </tr>
    )
  }
}
export default ContentTodo;