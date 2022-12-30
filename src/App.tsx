import React from 'react';
import ProjectsPage from './projects/ProjectsPage';
import PokemonsPage from './pokemons/PokemonsPage';

const App: React.FC = () => {
 
  return (
    <div className='container'>
      <PokemonsPage />
      {/* <ProjectsPage /> */}
    </div>
  );
};

export default App;