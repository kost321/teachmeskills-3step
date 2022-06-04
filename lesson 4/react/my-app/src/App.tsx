
import {Title} from './components/Hello/Hello';
import {Tabs} from './components/Hello/Hello';
import {TabsDefault,TabsHover,TabsDisabled} from './components/Hello/Hello';
import './App.css';

function App() {
  const text = "Sign In";
  return (
    <div className="App">
      <header className="App-header">
        <Title propsText = {text} />
      </header>
      <main className="tabs">
        <Tabs/>
        <div className='tabs__block'>
            <TabsDefault/>
            <TabsHover/>
            <TabsDisabled/>
        </div>
      </main>
    </div>
  );
}

export default App;
