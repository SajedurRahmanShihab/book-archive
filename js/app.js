// Display How many results are found
const displayResult = searchItem => {
    const message = document.getElementById('message');
    message.innerText = '';
    message.innerHTML = `<h2 class="text-success">${searchItem.numFound} results are found</h2>`

}
const searchBook = () => {
    const searchItem = document.getElementById('search-field');
    const searchItemText = searchItem.value;
    // clear search area
    searchItem.value = '';
    const messageArea = document.getElementById('message');
    messageArea.textContent = '';
    // if user doesn't give any input then it will show a message
    if (searchItemText === '') {
        const h2 = document.createElement('h2');
        const searchResult = document.getElementById('search-result');
        searchResult.textContent = '';
        h2.innerHTML = `<h2 class="text-danger">Search can't be empty</h2>`;
        messageArea.appendChild(h2);
        return;
    }



    // load data
    const url = `https://openlibrary.org/search.json?q=${searchItemText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))
        // .then(data => console.log(data))
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data))
}

const displayBook = (books) => {
    const searchResult = document.getElementById('search-result');
    // clear previous search result
    searchResult.textContent = '';
    books.slice(0, 30).forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title"><b>Book Name:</b> ${book.title}</p>
                    <b>Publisher:</b> ${book.publisher} <br>
                   <b>First Publish Year:</b> ${book.first_publish_year}
                    </p>
                </div>
        </div>
        `;
        searchResult.appendChild(div);

    });


}