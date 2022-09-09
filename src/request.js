const api_key = 'd5d7e56f6cbfd8d573ca5beba69e573b'

const requests ={
fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-US`,
fetchNetflixOriginal:`/discover/tv?api_key=${api_key}&with_networks=123`,
fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
fetchActionMovie:`/discover/movie?api_key=${api_key}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
fetchDomentaries:`/discover/movie?api_key=${api_key}&with_genres=99`,
}
export default requests;