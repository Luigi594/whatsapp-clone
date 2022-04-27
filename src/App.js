import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">

      <div className="app_body">

        {/** Sidebar component */}
        <Sidebar />

        {/** Chat component */}
        <Chat />
      </div>
    
    </div>
  );
}

export default App;
