import './App.css'
import '../vendors/bootstrap.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';

function App() {
  return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
  )
}

export default App;