import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../components/Greeting';
import TodoList from '../components/TodoList';

function HomePage() {
  return (
    <div>
      <Greeting name="Utilisateur" />

      <p>
        Bienvenue dans cette application React pour apprendre les hooks modernes.
      </p>

      <div className="links">
        <Link to="/hooks" className="btn-link">
          Explorer les hooks
        </Link>

        <Link to="/about" className="btn-link">
          À propos
        </Link>
      </div>

      <TodoList />
    </div>
  );
}

export default HomePage;