import React, { useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './SideBar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
// Componente : Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade : Informações que um componente PAI passa para o componente FILHO
// Estado : Informações mantidas pelo componente (lembrar: imutabilidade)

function App() {

  const [devs, setDevs] = useState([])

  const [latitude, setLatitude] = useState('')

  const [longitude, setLongitude] = useState('')

  const [github_username, setGithubUsername] = useState('')

  const [techs, setTechs] = useState('')

  
  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/dev');

      setDevs(response.data);
    }  

    loadDevs();
  }, [])

  async function handleAddDev(data){
    const response = await api.post('/dev',{
      github_username,
      techs,
      latitude,
      longitude
    });

    setDevs([...devs, response.data])
  }

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
             <DevItem key={dev.id} dev={dev}/>
          ))}
        </ul>
      </main>
  </div>
  )
}

export default App;
