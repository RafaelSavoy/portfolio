import {BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import GlobalStyles from './GlobalStyles'

function App() {

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Main />
    </Router>
  )
}

export default App
