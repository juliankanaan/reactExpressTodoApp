import 'bootstrap/dist/css/bootstrap.css';
import Welcome from '../components/Welcome'
import Nameform from '../components/Nameform'
import css from '../style.css'

const Index = () => (
  <div className="content">
    <div className='todo-content'>
      <Welcome />
      <Nameform />
    </div>
  </div>
)

export default Index
