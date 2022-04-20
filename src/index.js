document.addEventListener("DOMContentLoaded", () => {
    const movieTitlesListContainer = document.querySelector("div.list-container");
    const movieTitlesList = document.getElementById("films")

    fetch("http://localhost:3000/films")
    .then(response => response.json())
    .then(movies => {
        movies.forEach(movie => {
            console.log(movie)
            displayMovieTitle(movie)
            if (parseInt(movie.id) === 1) {
                displayMovieInfo(movie)
            }
        })
    })

    function displayMovieTitle(movie) {
        let item = document.createElement("li")
        item.setAttribute("class", "film item")
        item.innerText = movie.title
        movieTitlesList.append(item)

        item.addEventListener("click", function(){
            displayMovieInfo(movie)
        })
    }

    function displayMovieInfo(movie) {
        const imageTag = document.getElementById("poster")
        imageTag.setAttribute("src", movie.poster)
        imageTag.setAttribute("alt", movie.title)
    }
})
