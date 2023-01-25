import React from 'react';

class MovieList extends React.Component {

    handleClick()//function keyword ü neden kullanmadık
    {
        console.log("delete button clicked");
    }
    render() {
        return (
            <div className='row'>

                {this.props.movies.map((movie) => (
                    <div className='col-lg-4' key={movie.id}>
                        <div className='card mb4 shadow-sm'>
                            <div className='card-body'>
                                <h5 className='card-title'>{movie.name}</h5>
                                <p className='card-text'>description</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button type="button" onClick={(event)=>this.props.deleteMovieProp(movie)} className='btn btn-md btn-outline-danger'>Delete</button>
                                    <h2><span className='badge bg-info'>{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default MovieList;