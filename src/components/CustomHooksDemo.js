import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useMediaQuery from '../hooks/useMediaQuery';
import useOnlineStatus from '../hooks/useOnlineStatus';

function CustomHooksDemo() {
  const [name, setName] = useLocalStorage('name', '');
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isOnline = useOnlineStatus();

  return (
    <div className="card">
      <h3>Hooks personnalisés</h3>

      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Votre nom"
      />

      <p>{name ? `Bonjour ${name}` : 'Entrez votre nom'}</p>
      <p>Écran : {isSmallScreen ? 'Petit écran' : 'Grand écran'}</p>
      <p>Connexion : {isOnline ? 'En ligne' : 'Hors ligne'}</p>
    </div>
  );
}

export default CustomHooksDemo;