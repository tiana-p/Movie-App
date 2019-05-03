$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText){
  axios.get('https://api.themoviedb.org/3/movie/550?api_key=36782873dd47f77635ad6ac1cfbce068&query='+searchText)
  .then((response) =>{

  })
  .catch((err) =>{
    console.log(err);
  });
}
