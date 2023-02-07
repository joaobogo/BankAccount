
import './App.css';
import Entradasaida from './Components/Entradasaida';
import Adicionardados from './Components/Adicionardados';
import Listadedados from './Components/Listadedados';

import Provider from './Context/Provider';

function App() {
  
  return (
    <Provider>
      <div className='wrapper'>
      <Entradasaida />
      <Adicionardados />
      <Listadedados />
      </div>
    </Provider>
  );
}

export default App;
