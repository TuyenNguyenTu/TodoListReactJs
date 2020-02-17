import React from 'react'
import ListTask from './ListTask'
import uuidv4 from 'uuid/v4'
class FormComponent extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      name: ''
    }
    this.RefClick = this.RefClick.bind(this);
    this.handleCancle = this.handleCancle.bind(this);
  }

  RefClick() {
    let name = this.refs.Task_name.value;
    let level = parseInt( this.refs.task_level.value);
    let id = uuidv4();
    let item ={
      id: id,
      name: name,
      level: level
    }
    this.props.onClickSubmit(item);
  }
  handleCancle() {
    this.props.onClickCancle();
  }
  render() {
    return (
      <div className="col-6 offset-7 pull-right">
        <form method="POST" className="form-inline" onSubmit={this.RefClick}>
          <div className="form-group">
            <div className="sr-only" htmlFor="task_name">Label</div>
            {/* <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control"  placeholder="Task Name" ref="Task_name" /> */}
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
          <button className="btn btn-primary" type="button" onClick={this.RefClick}>Submit</button>
          <button className="btn btn-danger" type="button" onClick={this.handleCancle}>Cancel</button>
        </form>
      </div>
    )
  }
}
export default FormComponent