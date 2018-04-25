var books = []

function doClick() {

    var search = document.getElementById('search');
    var xhttp = new XMLHttpRequest();
    // When the request is successful, finished, and response is ready, execute these function
    books = [ ];
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resObj = JSON.parse(xhttp.responseText);
            for (var i = 0; i < resObj.items.length; i++) {
                books.push(resObj.items[i].volumeInfo)
            }
            upDateDOM();
        }
    }
    // Send an asynchronous HTTP GET request to the given end point (url)
    xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes?q=" + search.value, true);
    xhttp.send();
}

function createBookItem(bookObj) {
    var liElem = document.createElement('li')

    var img = document.createElement('img');
    img.src = bookObj.imageLinks.thumbnail;
    img.width = 100;
    img.height = 150;
    liElem.appendChild(img);


    var titleLi = document.createElement("div")
    var titles = document.createTextNode('Title: ');
    var a = document.createElement('a')
    var aText = document.createTextNode(bookObj.title)
    a.appendChild(aText)
    a.href = bookObj.url

    titleLi.appendChild(titles);
    titleLi.appendChild(a);

    liElem.appendChild(titleLi)

    var authorLi = document.createElement('div')
    authorLi.appendChild(document.createTextNode("Author: " + bookObj.authors[0]))
    liElem.appendChild(authorLi)

    var dateLi = document.createElement('div');
    dateLi.appendChild(document.createTextNode("Published Date: " + bookObj.publishedDate))
    liElem.appendChild(dateLi);

    var reviewsLi = document.createElement('div');
    reviewsLi.appendChild(document.createTextNode("Reviews: " + bookObj.ratingsCount))
    liElem.appendChild(reviewsLi);

    var rateLi = document.createElement('div');
    rateLi.appendChild(document.createTextNode("Rating: " + bookObj.averageRating + "/5"))
    liElem.appendChild(rateLi);

    // create the remaining elements
    return liElem;
}

function sortByReviews() {
    books.sort(function (a, b) {
        return b.ratingsCount - a.ratingsCount;
    })
}
function sortByRating() {
    books.sort(function (a, b) {
        return b.averageRating - a.averageRating;

    })
}
function sortByNewest() {
    books.sort(function (a, b) {
        var dataAString = Date.parse(a.publishedDate);
        var dataBString = Date.parse(b.publishedDate);
        return dataBString - dataAString;
    })
} function sortByOldest() {
    books.sort(function (a, b) {
        var dataAString = Date.parse(a.publishedDate);
        var dataBString = Date.parse(b.publishedDate);
        return dataAString - dataBString;
    })
}

function upDateDOM() {
    var ulBooks = document.getElementById('books-list')
    ulBooks.innerHTML = ''
    for (item of books) {
        ulBooks.appendChild(createBookItem(item))
    }
}

// Sort by, select event
var select = document.getElementById("sort-books")
select.onchange = function () {
    if (select.value === 'Default') {
        sortByReviews()
        upDateDOM()
    }    
    else if (select.value === 'Rating') {
        sortByRating()
        upDateDOM()
    }
    else if (select.value === 'New') {
        sortByNewest()
        upDateDOM()
    }
    else if (select.value === 'Old') {
        sortByOldest()
        upDateDOM()
    }
}
