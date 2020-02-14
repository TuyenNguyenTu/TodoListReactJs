import React from 'react'
class theadComponent extends React.Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">List Task</h3>
          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col" className="text-center" style={{ width: '10%' }}>#</th>
                <th scope="col" className="text-center" style={{ width: '50%' }}>Task</th>
                <th scope="col" className="text-center" style={{ width: '20%' }}>Level</th>
                <th scope="col" className="text-center" style={{ width: '20%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique commodi
                  libero perferendis temporibus enim delectus eos tempore autem odit repellat ab
                            optio blanditiis amet.</td>
                <td className="badge badge-danger">High</td>
                <td>
                  <a href="/" role="button" className="btn btn-warning">Edit</a>
                  <a href="/" role="button" className="btn btn-danger">Delete</a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique commodi
                  libero perferendis temporibus enim delectus eos tempore autem odit repellat ab
                            optio blanditiis amet.</td>
                <td className="badge badge-info">Medium</td>
                <td>
                  <a href="/" role="button" className="btn btn-warning">Edit</a>
                  <a href="/" role="button" className="btn btn-danger">Delete</a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique commodi
                  libero perferendis temporibus enim delectus eos tempore autem odit repellat ab
                            optio blanditiis amet.</td>
                <td className="badge badge-success">Small</td>
                <td>
                  <a href="/" role="button" className="btn btn-warning">Edit</a>
                  <a href="/" role="button" className="btn btn-danger">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default theadComponent