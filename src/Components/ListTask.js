const uuidv4 = require('uuid/v4')
let tasks = [{
  id:uuidv4(),
  name: "Đánh răng",
  level: 2, //0 Small 1: Medium, 2:High,
},
{
  id:uuidv4(),
  name: "Ăn sáng",
  level: 2, //0 Small 1: Medium, 2:High,
},
{
  id:uuidv4(),
  name: "Lau dọn nhà cửa",
  level: 1, //0 Small 1: Medium, 2:High,
},
{
  id:uuidv4(),
  name: "Chơi game",
  level: 0, //0 Small 1: Medium, 2:High,
}]
export default tasks