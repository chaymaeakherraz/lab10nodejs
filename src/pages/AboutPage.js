import React from 'react';
import { Link, useParams } from 'react-router-dom';

function AboutPage() {
  const { section } = useParams();

  return (
    <div>
      <h2>À propos</h2>

      <Link to="/" className="btn-link">
        Retour à l’accueil
      </Link>

      <div className="card">
        {section === 'hooks' ? (
          <>
            <h3>À propos des Hooks</h3>
            <p>
              Les hooks permettent d’utiliser l’état et les fonctionnalités de
              React dans les composants fonctionnels.
            </p>
          </>
        ) : section === 'context' ? (
          <>
            <h3>À propos du Context</h3>
            <p>
              Le Context permet de partager des données globales comme le thème
              sans passer les props manuellement.
            </p>
          </>
        ) : (
          <>
            <h3>Application React avancée</h3>
            <p>
              Cette application montre useState, useEffect, useContext,
              useReducer, useMemo, useCallback, useRef et React Router.
            </p>

            <Link to="/about/hooks" className="btn-link">
              Hooks
            </Link>

            <Link to="/about/context" className="btn-link">
              Context
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default AboutPage;