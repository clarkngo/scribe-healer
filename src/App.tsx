import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import PokemonsPage from './pokemons/PokemonsPage';
import ProjectsPage from './projects/ProjectsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokemonsPage />} />
        <Route path="/project" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}
