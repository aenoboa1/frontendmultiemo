import { useState } from 'react'
import Button from '@material-ui/core/Button'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'

import Navbar from './components/Navbar'

import MenuAppBar from './components/MenuAppBar'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Button variant="contained" color="primary">
        botón
      </Button>
      <Button variant="contained" color="secondary">
        botón
      </Button>
    </ThemeProvider>
  );
}

export default App
