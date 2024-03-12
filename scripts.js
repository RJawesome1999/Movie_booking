let movies = [];

function addMovie() {
  const movieName = document.getElementById('movie-name').value;
  const userName = document.getElementById('user-name').value;
  const seatNumber = parseInt(document.getElementById('seat-number').value);
  
  if (movieName.trim() === '' || userName.trim() === '' || isNaN(seatNumber)) {
    alert('Please enter all fields');
    return;
  }
  
  // Check if the seat is already booked for the specified movie
  if (movies.some(movie => movie.name === movieName && movie.seat === seatNumber)) {
    alert('Seat already booked for this movie');
    return;
  }
  
  const movie = {
    id: Date.now(),
    name: movieName,
    user: userName,
    seat: seatNumber
  };
  
  movies.push(movie);
  renderMovies();
  document.getElementById('movie-name').value = '';
  document.getElementById('user-name').value = '';
  document.getElementById('seat-number').value = '';
}

function deleteMovie(id) {
  movies = movies.filter(movie => movie.id !== id);
  renderMovies();
}

function renderMovies() {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';
  
  movies.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');
    movieDiv.innerHTML = `
      <span>${movie.name} - ${movie.user} - Seat ${movie.seat}</span>
      <button onclick="deleteMovie(${movie.id})">Cancel</button>
    `;
    movieList.appendChild(movieDiv);
  });
}
