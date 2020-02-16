import React from 'react'
import Search from './Search.Component'
import Sort from './Sort.Component'
import Form from './FormAdd.Component'
import TableComponent from './table.Component'
import TitleComponent from './Title.Component'
class Todo extends React.Component {
  constructor(params) {
    super(params)
    this.state = {
      isShowAddTask: false,
      nameButtonAdd: 'Show Form Add Task',
      items: [{
        name: "Đánh răng",
        level: 2, //0 Small 1: Medium, 2:High,
      },
      {
        name: "Ăn sáng",
        level: 2, //0 Small 1: Medium, 2:High,
      },
      {
        name: "Lau dọn nhà cửa",
        level: 1, //0 Small 1: Medium, 2:High,
      },
      {
        name: "Chơi game",
        level: 0, //0 Small 1: Medium, 2:High,
      }]
    }
    this.ShowForm = this.ShowForm.bind(this)
  }
  ShowForm() {
    this.setState({
      isShowAddTask: !this.state.isShowAddTask
    })
    if (this.state.isShowAddTask === true) {
      this.setState({
        nameButtonAdd: 'Show Form Add Task'
      })
    } else {
      this.setState({
        nameButtonAdd: "Hide Form Add Task"
      })
    }
  }
  render() {
    let element = null;
    if (this.state.isShowAddTask) {
      element = <Form />
    };
    let items = this.state.items;
    //console.log('this.state.items', this.state.items)
    return (
      <div>
        {/* Title: START */}
        <TitleComponent />
        {/* Title: END */}
        <div className="row">
          {/*Search START*/}
          <Search />
          {/*Search END*/}
          {/*Sort  START*/}
          <div className="col-3">
            <Sort />
          </div>
          {/*Sort END*/}
          {/*ADD  START*/}
          <div className="col-5">
            <button type="button" className="btn btn-info btn-block" onClick={this.ShowForm}>{this.state.nameButtonAdd}</button>
          </div>
        </div>
        <div className="row">
          {/*FORM START*/}
          {element}
          {/*FORM  END*/}
          {/*CARD START*/}
          <TableComponent items={items} />
          {/*CARD END*/}
        </div>
      </div>
    )
  }
}
export default Todo