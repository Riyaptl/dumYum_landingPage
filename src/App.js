import './App.css';
import Contact from './components/Contact/Contact';
import Section from './components/Section/Section';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Section/>
      <Contact/>
    </div>
  );
}

export default App;
