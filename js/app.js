const searchBook = () => {
    const searchItem = document.getElementById('search-field');
    const searchItemText = searchItem.value;
    // clear search area
    searchItem.value = '';





    // load data
    const url = `http://openlibrary.org/search.json?q=${searchItemText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))
}

const displayBook = (books) => {
    books.forEach(book => {
        console.log(book);
        const searchResult = document.getElementById('search-result');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
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