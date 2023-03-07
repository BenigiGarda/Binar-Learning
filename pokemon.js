//Jawaban Personal
const baseFetchPokemon = async () => {
  await fetch("https://pokeapi.co/api/v2/")
    .then((res) => {
      return res.json();
    })
    .then((pokemon) => {
      console.log(pokemon);
    });
};
const baseFetchPokemonPromise = () => {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "https://pokeapi.co/api/v2/");
    ajax.onload = function () {
      if (ajax.status === 200) {
        resolve(JSON.parse(ajax.responseText));
      } else {
        reject(ajax.responseText);
      }
    };
    ajax.send();
  });
};
const pokemonPromise = () => {
  const response = Promise.all([baseFetchPokemonPromise()]);
  response.then((res) => {
    console.log(res);
  });
};
//

const fetchPokemonList = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => {
      return res.json();
    })
    .then((pokemon) => {
      console.log(pokemon.results);
    });
};

const fetchPokemonColor = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon-color/1/")
    .then((res) => {
      return res.json();
    })
    .then((pokemon) => {
      console.log(pokemon);
    });
};

// baseFetchPokemon();
// pokemonPromise();
// fetchPokemonList();
// fetchPokemonColor();

//Versi Trainee
const baseFetchApi = (url) =>
  new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/${url}`)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

const getPokemonList = async () => {
  try {
    const response = await baseFetchApi("pokemon");

    console.log(response);
  } catch (error) {
    return error;
  }
};

const getDynamicPokemon = async () => {
  try {
    const response = await baseFetchApi("pokemon");

    console.log(response);
  } catch (error) {
    return error;
  }
};
getPokemonList();
