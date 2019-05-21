import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout'
import Todos from '../components/Todos'
import AddNewTaskButton from '../components/AddNewTaskButton'
import AddNewTaskInput from '../components/AddNewTaskInput'
import css from '../style.css'

const Tasks = () => (
  <div className="content">
    <div className='todo-content'>
      <Layout />
      <Todos />

    </div>
  </div>
)

export default Tasks
