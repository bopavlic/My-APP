export const fetchPokemons = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_POKEMON_API_BASE_URL}/pokemon`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
};
