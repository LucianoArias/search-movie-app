import { useState, useEffect, useRef } from 'react';

export function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search === '') {
      setError('No se puede buscar una película vacia.');
      return;
    }

    if (search.match(/^\d+$/)) {
      setError('Los números no son validos.');
      return;
    }

    if (search.length < 3) {
      setError('La búsquedad debe contener al menos 3 caracteres.');
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
