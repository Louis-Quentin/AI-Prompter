import logo from './logo.svg';
import './App.css';
import {ReportTemplate} from "./Templates/ReportTemplate"
import {Title} from "./MainPage";

function App() {
  return (
    <div className="App">
        <Title/>
      <ReportTemplate/>
    </div>
  );
}

export default App;
