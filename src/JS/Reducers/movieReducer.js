import { ADD, EDIT, SEARCH } from "../Constantes/ActionsTypes";

const initialstate = {
  movies: [
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      name: "Star Wars: The Rise Of Skywalker",
      rating: 5,
      description:
        "The surviving members of the resistance face the First Order once again",
      video: "https://www.youtube.com/embed/8Qn_spdM5Zg",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      name: "Avengers: Infinity War",
      rating: 1,
      description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos.",
      video: "https://www.youtube.com/embed/6ZfuNTqbHE8",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      name: "Frozen II",
      rating: 4,
      description:
        "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land.",
      video: "https://www.youtube.com/embed/Zi4LMpSDccc",
    },
    {
      id: Math.random(),
      image:
        "https://i1.wp.com/www.moviespala.com/wp-content/uploads/2021/11/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_1.jpg?resize=1068%2C1582&ssl=1",
      name: "Red Notice",
      rating: 5,
      description: "Action/Comedy",
      video: "https://www.youtube.com/embed/Pj0wz7zu3Ms",
    },
    {
      id: Math.random(),
      image:
        "https://th.bing.com/th/id/R.5465323d535429ad4d16de0214b827d0?rik=TQ9W78nRYyyCsQ&riu=http%3a%2f%2fthesource.com%2fwp-content%2fuploads%2f2015%2f04%2fThe-fast.jpg&ehk=MONb9HUmKwne0806Rro1lNzYSpKOzSU0iccB70AlI5g%3d&risl=&pid=ImgRaw&r=0",
      name: "Fast and Furious",
      rating: 2,
      description: "Action/Drama",
      video: "https://www.youtube.com/embed/2TAOizOnNPo",
    },
    {
      id: Math.random(),
      image:
        "https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg",
      name: "The dark night rises",
      rating: 3,
      description: "Action/Fiction",
      video: "https://www.youtube.com/embed/GokKUqLcvD8",
    },
  ],
};

const movieReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        movies: state.movies.filter((el) =>
          el.name.toLowerCase().includes(action.payload.name.toLowerCase())
        ),
      };
    case ADD:
      return { ...state, movies: [...state.movies, action.payload] };
    case EDIT:
      return {
        ...state,
        movies: state.movies.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                name: action.payload.name,
                image: action.payload.image,
                video: action.payload.video,
                rating: action.payload.rate,
              }
            : el
        ),
      };
    default:
      return state;
  }
};
export default movieReducer;
