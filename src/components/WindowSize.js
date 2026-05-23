import React, { useEffect, useState } from 'react';

function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="card">
      <h3>useEffect - Taille fenêtre</h3>
      <p>Largeur : {size.width}px</p>
      <p>Hauteur : {size.height}px</p>
    </div>
  );
}

export default WindowSize;