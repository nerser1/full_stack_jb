import './App.css'
import {Menu} from '../components/Menu/Menu'
import {Routing} from '../components/Routing/Routing'

function App() {

  return (
    <div>
      <aside>
        <Menu />
      </aside>
      <main>    
        <Routing />
      </main>
    </div>
  )
}

export default App
