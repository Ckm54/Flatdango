document.addEventListener("DOMContentLoaded", () => {
    const movieTitlesListContainer = document.querySelector("div.list-container");
    const movieTitlesList = document.getElementById("films");
    const movieCard = document.querySelector("div.card")

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

        const movieInfo = `
            <div id="title" class="title">${movie.title}</div>
            <div id="runtime" class="meta">${movie.runtime} minutes</div>
            <div class="content">
            <div class="description">
                <div id="film-info">${movie.description}</div>
                <span id="showtime" class="ui label">${movie.showtime}</span>
                <span id="ticket-num">${movie.capacity - movie.tickets_sold}</span> remaining tickets
            </div>
            </div>
            <div class="extra content">
            <button id="buy-ticket" class="ui orange button">
                Buy Ticket
            </button>
            </div>
        `
        movieCard.innerHTML = movieInfo
    }
})
