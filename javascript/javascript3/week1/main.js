/* document.getElementById("step2").addEventListener("click",getInfo)

 function getInfo() {
                fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response => response.json())
.then (movies => {
    console.log(movies);
    const longMovieTitle =  movies.filter( movies => movies.title.split("").length > 5).map( x => x.title)
    console.log(longMovieTitle);
  }) 
 } */
 var movieList = document.getElementById("movies");

 function  movieTitle() {
  fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response => response.json())
.then (movies => {
  const fasf = movies.map(movies => movies.title);
  //console.log(fasf);
  const allMovies = document.createElement('li');
  movieList.appendChild(allMovies);
  allMovies.innerHTML = fasf;
}) 
}
movieTitle();
 // Give each movie a tag: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) based on the ratings.
 //const movieList = document.getElementById("getRatings");
 const btn = document.getElementById("ratings");
 
 btn.addEventListener("click", getRating)
 function getRating() {
                fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response => response.json())
.then (movies => {
    //const goodMoives =  movies.filter( movies => movies.rating >=  7).map( x => x.rating)

    const goodMoives =  movies.filter( movies => movies.rating >=  7)
    console.log(goodMoives);
    //btn.innerHTML = goodMoives;
    const badMovies = movies.filter(badMovie => badMovie.rating < 4)
    console.log(badMovies);

    const averageMovies= movies.filter(average =>average.rating > 4 && average.rating <= 7)
    console.log(averageMovies);
  
}) 
  }

 //Calculate the average rating of all the movies
 const allaverage = document.getElementById("getAverageRating");
 const btn_averageAll = document.getElementById("average rating");
 
 btn_averageAll.addEventListener("click", averageAllMovies)
 function averageAllMovies() {
  fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
  .then(response => response.json())
  .then (movies => {

     const averageAll = movies.map(x => x.rating).reduce( ( a, b ) => a + b, 0 ) / movies.length;
    console.log(averageAll);
  })
 }

//film 1980 ---1989

const yearsInfo = document.getElementById("getyears");
 const yearsbtn = document.getElementById("years");
 
 yearsbtn.addEventListener("click", years)
 function years() {
  fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
  .then(response => response.json())
  .then (movies => { 
    const yearsBetween = movies.filter(x => x.year >1980 && x.year < 1989);
    console.log(yearsBetween);
   }) }

// search 

