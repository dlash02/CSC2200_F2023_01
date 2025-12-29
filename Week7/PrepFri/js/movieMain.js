document.addEventListener("DOMContentLoaded", () => {
    // ✅ Separate arrays instead of array of objects
    const titles = [];
    const genres = [];
    const seenList = [];
    const descriptions = [];

    const form = document.getElementById("movieForm");
    const movieList = document.getElementById("movieList");
    const desc = document.getElementById("description");
    const counter = document.getElementById("charCount");
    const MAX_CHARS = 150;

    // Character counter
    desc.addEventListener("input", () => {
        const remaining = MAX_CHARS - desc.value.length;
        counter.textContent = `${remaining} characters left`;
        counter.style.color = remaining < 0 ? "red" : "#666";
    });

    // Add movie
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value.trim();
        const genre = document.getElementById("genre").value;
        const seen = document.getElementById("seen").checked ? "✅ Seen" : "❌ Not Seen";
        const description = desc.value.trim();

        if (title === "") {
            alert("Please enter a movie title!");
            return;
        }
        if (description.length > MAX_CHARS) {
            alert("Description must be under 150 characters!");
            return;
        }

        // ✅ Push into separate arrays
        titles.push(title);
        genres.push(genre);
        seenList.push(seen);
        descriptions.push(description);

        form.reset();
        counter.textContent = `${MAX_CHARS} characters left`;
        displayMovies();
    });

    function displayMovies() {
        movieList.innerHTML = "";

        for (let i = 0; i < titles.length; i++) {
            const div = document.createElement("div");
            div.className = "movie-item";
            div.innerHTML = `
            <button data-index="${i}">Delete</button>
            <strong>${titles[i]}</strong><br>
            <em>${genres[i]}</em><br>
            ${seenList[i]}<br>
            <p>${descriptions[i]}</p>
          `;
            movieList.appendChild(div);
        }
    }

    // Delete using index
    movieList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const index = e.target.getAttribute("data-index");

            // Remove from all arrays at same index
            titles.splice(index, 1);
            genres.splice(index, 1);
            seenList.splice(index, 1);
            descriptions.splice(index, 1);

            displayMovies();
        }
    });
});