import Button from '@material-ui/core/Button'
import './App.css'

import Navbar from './components/Navbar'


function App() {

    return (
          <>
            <Navbar/>
            <Button variant="contained" color="primary">
                botón
            </Button>
            <Button variant="contained" color="secondary">
                botón
            </Button>
          </>
    );
}

export default App
