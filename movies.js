const movies = [
  {
    Title: "Transformers",
    Year: "2007",
    Released: "03 Jul 2007",
    Genre: ["Action", "Adventure", "Sci-Fi"],
    Director: "Michael Bay",
    Actors: {
      "Shia LaBeouf": "ShiaLaBeouf.jpg",
      "Megan Fox": "MeganFox.jpg",
      "Josh Duhamel": "JoshDuhamel.jpg",
    },
    Plot: "An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.",
    Country: "United States",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWI1NjkxM2MtOTU4My00YzQ5LTliNGMtNmFlM2U5NWM3MDY1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
  },
  {
    Title: "Home Alone",
    Year: "1990",
    Released: "16 Nov 1990",
    Genre: ["Comedy", "Family"],
    Director: "Chris Columbus",
    Actors: {
      "Macaulay Culkin": "MacaulayCulkin.jpg",
      "Joe Pesci": "JoePesci.jpg",
      "Daniel Stern": "DanielStern.jpg",
    },
    Plot: "An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas Eve.",
    Country: "United States",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "The Shawshank Redemption",
    Year: "1994",
    Released: "14 Oct 1994",
    Genre: ["Drama"],
    Director: "Frank Darabont",
    Actors: {
      "Tim Robbins": "TimRobbins.jpg",
      "Morgan Freeman": "MorganFreeman.jpg",
      "Bob Gunton": "BobGunton.jpg",
    },
    Plot: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    Country: "United States",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    Released: "17 Dec 2003",
    Genre: ["Action", "Adventure", "Drama"],
    Director: "Peter Jackson",
    Actors: {
      "Elijah Wood": "ElijahWood.jpg",
      "Viggo Mortensen": "ViggoMortensen.jpg",
      "Ian McKellen": "IanMcKellen.jpg",
    },
    Plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    Country: "New Zealand, United States",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Pulp Fiction",
    Year: "1994",
    Released: "14 Oct 1994",
    Genre: ["Crime", "Drama"],
    Director: "Quentin Tarantino",
    Actors: {
      "John Travolta": "JohnTravolta.jpg",
      "Uma Thurman": "UmaThurman.jpg",
      "Samuel L. Jackson": "SamuelLJackson.jpg",
    },
    Plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    Country: "United States",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
];

function printMovies(movie) {
  const divMovie = document.createElement(`div`);
  divMovie.classList.add(`movie`);

  let info = `
  <h2>${movie.Title}</h2>
  
  <div class="image"><img src="${movie.Poster}" alt="${movie.Title} Poster"></div>
  
  <p><b>Year: </b>${movie.Year}</p>
  <p><b>Released: </b>${movie.Released}</p>
  <p><b>Director: </b>${movie.Director}</p>
  <p><b>Plot: </b>${movie.Plot}</p>
  <p><b>Country: </b>${movie.Country}</p>
  `;

  info += `<p><b>Actors:</b></p>`;
  info += `<ul class="actors">`;
  for (let actor in movie.Actors) {
    info += `
      <li>
      <div class="actorIMG">
        <img src="images/${movie.Actors[actor]}" alt="${actor}">
      </div>
      <p>${actor}</p>
      </li>
    `;
  }
  info += `</ul>`;

  info += `<p><b>Genres:</b></p>`;
  info += `<ul>`;
  for (let i = 0; i < movie.Genre.length; i++) {
    info += `<li>${movie.Genre[i]}</li>`;
  }
  info += `</ul>`;

  divMovie.innerHTML = info;
  document.getElementById(`movies`).appendChild(divMovie);
}

for (let i = 0; i < movies.length; i++) {
  printMovies(movies[i]);
}
