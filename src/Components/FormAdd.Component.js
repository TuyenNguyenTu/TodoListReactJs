import React from 'react'

class FormComponent extends React.Component {
  render() {
    return (
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
    )
  }
}
export default FormComponent