const bookArray = [{

    bookId: 1,
    title: 'A street cat',
    language: 'english',
    author: 'Jame Bowen',
    imagesrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8tRR4e7l77-DwaPtUBjUMUFlYsjCDG_0HparMg_gYTrzfGoQ'
    
},

{
    bookId: 2,
    title: 'Doreamon',
    language: 'Japanese',
    author: 'Fujio',
    imagesrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe6mWI_g6Eow3hyO55HuXrw7e9n0LzgWToN7hkIRJdbe94iaVhdw'
},

{
    bookId: 3,
    title: 'Revenue management',
    language: 'english',
    author: 'Robert.Cross',
    imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/510xgPDKqZL._SX323_BO1,204,203,200_.jpg'
},

{
    bookId: 4,
    title: 'Westwork',
    language: 'english',
    author: 'Michael Crichton',
    imagesrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aTaT3XKz0KWbDygEGOqisEI2aCe3_8LtDyHKntCsLyH5yJxq'
    
},

{
    bookId: 5,
    title: 'Creating irresistible inflcuence',
    language: 'english',
    author: 'Charles Faulkner',
    imagesrc: 'data:image/jpeg;base64,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'
},

{
    bookId: 6,
    title: 'Dragonball',
    language: 'japanese',
    author: 'Akira Toriyama',
    imagesrc: 'https://d1xfgk3mh635yx.cloudfront.net/sites/default/files/styles/original/public/image/featured/1026001-dragon-ball-super-snapped-toonami.jpg?itok=NIknwSTr'
},

{
    bookId: 7,
    title: 'Youcanwin',
    language: 'english',
    author: 'Shiv Khera',
    imagesrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5DMrCzEe5uhCle-4-3tOLBDQ9fxlWmMkJyOzvde6Oa7eaBdPrQ'
},

{
    bookId: 8,
    title: 'Studying leadership',
    language: 'english',
    author: 'Doris and Gareth',
    imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/51J5n8ZjRDL._SX399_BO1,204,203,200_.jpg'
},

{
    bookId: 9,
    title: 'Thebalanced Score card',
    language: 'english',
    author: 'Robert & David',
    imagesrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTam8BUwSPJRDGJPEM0S1-dQ_NYAd1otd7VDFj7NHc-7qutNXae'
},

{
    bookId: 10,
    title: 'Leading Across cultures',
    language: 'english',
    author: 'Richard D. Lewis',
    imagesrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2dMug3HavrNndLe5Q-7ii5uNB1NtwvZqZpiual9G8M50wuSg'
},
];

/*  -  Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.*/
//  -  display the book ID's in a list to take the actual information about the book from the object and display that. 

function showBookIDs(books) {
    let list = document.createElement('ul');

    for (let i = 0; i < books.length; i++) {
        //create li
        let item = document.createElement('li');
        let img = document.createElement('img');
     
        // Set its contents:
        item.appendChild(document.createTextNode(books[i].title));
        item.appendChild(document.createTextNode(books[i].language));
        item.appendChild(document.createTextNode(books[i].author));

        
        // Add it to the list:
        list.appendChild(item);
        list.appendChild(img);
        
        
        img.setAttribute('src', books[i].imagesrc);
        
    }

    // Finally, return the constructed list:
    return list;

}
document.getElementById("bookListId").appendChild(showBookIDs(bookArray));

