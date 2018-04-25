var books = [
  {
    title: 'A Brief History of Time',
    date_published: ' March 1, 1988',
    author: 'Stephen Hawking',
    reviews: 146,
    rate: 4.4,
    Price: 10.69,
    img: 'https://images-na.ssl-images-amazon.com/images/I/617m43n-HWL._SX331_BO1,204,203,200_.jpg',
    url: 'https://www.amazon.com/gp/product/0553380168/ref=s9_acsd_ri_bw_c_x_6_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-10&pf_rd_r=YYG5MNDW97D3HRZHCS58&pf_rd_r=YYG5MNDW97D3HRZHCS58&pf_rd_t=101&pf_rd_p=4d6f1c2c-8443-4c8c-bc55-77b7e4a2cf4a&pf_rd_p=4d6f1c2c-8443-4c8c-bc55-77b7e4a2cf4a&pf_rd_i=283155'
  }
]

var search = document.getElementById('search');
function doClick() {
  var xhttp = new XMLHttpRequest();
  // When the request is successful, finished, and response is ready, execute these function
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resObj = JSON.parse(xhttp.responseText);
      console.log(resObj)
      for (var i = 0; i < resObj.items.length; i++) {
        createBookItem(resObj.items[i].volumeInfo) 
      }      
    }    
  }
  // Send an asynchronous HTTP GET request to the given end point (url)
  xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes?q=" + search.value, true);
  xhttp.send();
}

function createBookItem(bookObj) {
  var liElem = document.createElement('li')

  console.log(bookObj)
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
    return b.reviews - a.reviews;
  })
}
function sortByPriceLow() {
  books.sort(function (a, b) {
    return a.Price - b.Price;
  })
}
function sortByPriceHigh() {
  books.sort(function (a, b) {
    return b.Price - a.Price;

  })
}
function sortByRating() {
  books.sort(function (a, b) {
    return b.rate - a.rate;

  })
}
function sortByNewest() {
  books.sort(function (a, b) {
    var dataAString = Date.parse(a.date_published);
    var dataBString = Date.parse(b.date_published);
    return dataBString - dataAString;
  })
} function sortByOldest() {
  books.sort(function (a, b) {
    var dataAString = Date.parse(a.date_published);
    var dataBString = Date.parse(b.date_published);
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
  else if (select.value === 'PriceLow') {
    sortByPriceLow()
    upDateDOM()
  }
  else if (select.value === 'PriceHigh') {
    sortByPriceHigh()
    upDateDOM()
  }
  else if (select.value === 'Rating') {
    sortByRating()
    upDateDOM()
  }
  else if (select.value === 'New') {
    console.log("test")
    sortByNewest()
    upDateDOM()
  }
  else if (select.value === 'Old') {
    sortByOldest()
    upDateDOM()
  }
}
