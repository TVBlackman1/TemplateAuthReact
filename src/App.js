import logo from './logo.svg';
import './App.css';
import {AuthProvider} from "./content/AuthContent";
import { LoginBlock } from "./component/LoginBlock/LoginBlock"
//

function App() {
  return (
      <AuthProvider>
          <div className="App">
              <LoginBlock />
          </div>
      </AuthProvider>
  );
}

export default App;
