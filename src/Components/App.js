import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieLİst';

// bosstrapi index.htmle tanıtmadık
// functional component te settate çalışır mı 
class App extends React.Component {
       // const emre=15;
       //emre=15;
        state = { //yapıcı methodun içinde olunca this. ile yazıyoruz nedene aq
            movies: [
                {
                    id: 1,
                    name: "kutsal damacana",
                    rating: 8.3
                },
                {
                    id: 2,
                    "name": "çakallarla dans", 
                    "rating": 7.3
                },
                {
                    "id": 3,
                    "name": "kolpaçino",
                    "rating": 6.3
                },
                {
                    "id": 4,
                    "name": "behzat ç",
                    "rating": 8.3
                },
                {
                    "id": 5,
                    "name": "Celal ile ceren",
                    "rating": 7.3
                },
                {
                    "id": 6,
                    "name": "recep ivedik",
                    "rating": 6.3
                },
            ],
            SearchQuery: "",
        }
    
    
    async componentDidMount()
    {
         const response =await axios.get("http://localhost:5000/api/user/minage");
        console.log(response);
    }
    deleteMovie = (movie) => {
        
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        //this.setState({movies:newMovieList})//neden süslü paranteze aldık-- 
        //ilk state durumunu yukarıda tanımladık zaten onun bu fonksiiyonla değiştirdik
        this.setState(state => ({ movies: newMovieList }))//bunun syntaxını tam anlamadım.ve satır 57 ile farkı nedir

    }
    searchMovie=(event)=>{
        this.setState({SearchQuery:event.target.value});
        }

    render() {
        let filtredMovies=this.state.movies.filter(
            movie=>{
                return movie.name.toLowerCase().indexOf(this.state.SearchQuery.toLowerCase())!== -1
            }
        )
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                </div>
                <MovieList
                    movies={filtredMovies}//niye this kullanmadık local değişken diye mi
                    deleteMovieProp={this.deleteMovie} />
            </div>
        )
    }
}
export default App;