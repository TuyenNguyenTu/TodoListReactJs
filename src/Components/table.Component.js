import React from 'react'
import ContentToDo from './ContentToDo.Component'

class TableComponent extends React.Component {
  constructor(params) {
    super(params);
    console.log(this.props.items)
  }
  checkLevel(input){
    if(input===1){
      return "Medium"
    }else if(input===0){
      return "Small"
    }else{
      return  "High"
    }
  }
  render() {
    const imtes = this.props.items;
    const elementItem = imtes.map((item, index) => {
      return <ContentToDo name={item.name} key={index} level={this.checkLevel(item.level)}/>
    })
    return (
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
                {elementItem}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default TableComponent