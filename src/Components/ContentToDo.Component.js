import React from 'react'

class ContentTodo extends React.Component {
  render() {
    return (
      <tr>
        <th scope="row">1</th>
        <td>{this.props.name}
        </td>
        <td className="badge badge-danger">{this.props.level}</td>
        <td>
          <a href="/" role="button" className="btn btn-warning">Edit</a>
          <a href="/" role="button" className="btn btn-danger">Delete</a>
        </td>
      </tr>
    )
  }
}
export default ContentTodo;