import { useEffect, useState } from 'react';
import './app.css';
import Footer from './components/Footer/Footer';
import GetApp from './components/GetApp/GetApp';
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import LoadingPage from './components/LoadingPage';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => setLoading(false), 700);
  }, [])
  if (loading) return (<LoadingPage/>)
  else return (
    <div className="App">
      <LogIn/>
      <SignUp/>
      <GetApp/>
      <Footer/>
    </div>
  );
}

export default App;
