import { Page2 } from './componets/Page2'
import { Page1 } from './componets/Page1'
import { Footer } from './componets/Footer'
import { Header } from './componets/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Page1/>
      <Page2/>
      <Footer />
    </div>
  )
}

export default App
