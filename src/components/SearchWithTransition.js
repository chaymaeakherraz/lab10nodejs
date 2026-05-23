import React, { useMemo, useState, useTransition } from 'react';

const items = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Item ${i + 1}`
}));

function SearchWithTransition() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition();

  const filteredItems = useMemo(() => {
    if (!search) return [];

    return items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleChange = e => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      setSearch(value);
    });
  };

  return (
    <div className="card">
      <h3>useTransition</h3>

      <input
        value={query}
        onChange={handleChange}
        placeholder="Rechercher..."
      />

      {isPending && <p>Chargement...</p>}

      <p>Résultats : {filteredItems.length}</p>

      <ul>
        {filteredItems.slice(0, 10).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchWithTransition;