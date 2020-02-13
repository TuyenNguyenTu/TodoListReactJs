import React from 'react'
import Search from './Search.Component'

class Todo extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Todo List <small>REACTJS</small></h1>
        </div>
        <div className="row">
          {/*Search START*/}
            <Search/>
          {/*Search END*/}
          {/*Sort  START*/}
          <div className="col-3">
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
          </div>
          {/*Sort END*/}
          {/*ADD  START*/}
          <div className="col-5">
            <button type="button" className="btn btn-info btn-block">Add Task</button>
          </div>
        </div>
        <div className="row">
          {/*FORM START*/}
          <div className="col-6 offset-7 pull-right">
            <form action method="POST" className="form-inline">
              <div className="form-group">
                <div className="sr-only" htmlFor="task_name">Label</div>
                <input type="text" id="task_name" className="form-control" placeholder="Task Name" ref="Task_name" />
              </div>
              <div className="form-group">
                <div className="sr-only" htmlFor="inputDs">Label</div>
                <select name="ds" id="inputDs" className="form-control" required ref="task_level">
                  <option value={0}>Small</option>
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                </select>
              </div>
              <button className="btn btn-primary" type="button">Submit</button>
              <button className="btn btn-danger" type="button">Cancel</button>
            </form>
          </div>
          {/*FORM  END*/}
          {/*CARD START*/}
          <div className="col-12 mt-5">
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
          </div>
        </div>
      </div>
    )
  }
}
export default Todo