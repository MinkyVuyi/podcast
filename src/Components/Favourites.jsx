import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const { data } = await supabase.from('favorites').select('*').eq('user_id', supabase.auth.user().id);

      setFavorites(data);
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <a href={favorite.url}>{favorite.show.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;


