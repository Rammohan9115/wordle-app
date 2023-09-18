import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import {createContext,useState} from 'react';
import { boardDefault } from './Words';


export const AppContext = createContext();

function App() {
  const [board,setBoard] = useState(boardDefault);
  const [currAttempt,setCurrAttempt] = useState({attempt:0,letterPos:0});
  const onSelectLetter =() => {

  }
  const onDelete =() => {

  }
  const onEnter =() => {

  }
  
  return (
    <div className="App">
     <nav className=
     "!bg-gray-50 !hover:scale-150">
      <h1 className=' text-gray-900 text-2xl pt-2 pb-2 flex items-center justify-center hover:scale-150 hover:p-5 transition'>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt}}>
        <div className='game'>
      <Board />
      <Keyboard />
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
