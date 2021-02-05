import './App.css';
import Feed from './components/Body/Feed/Feed';
import Sidebar from './components/Body/Sidebar/Sidebar';
import Widgets from './components/Body/Widgets/Widgets';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
    </div>
  );
}

export default App;
