import React, {Fragment} from 'react';
import axios from 'axios';

import './styles.css';
import InputData from './components/InputData';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-apy-key'] = 'c9496f17-e0da-4ba4-90df-153857f43cff';


function App() {
  
    return(
    <Fragment>
      <div className = "container">
      <InputData />
      </div>
    </Fragment>
  );
}

export default App;
