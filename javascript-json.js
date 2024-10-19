//JSON.stringify Method

const book = {
    title : "the hook and shy",
    author: {
        firstName : "sajad",
        lastName : "Afkhami"
    },
    age : "28",
    year : 2023,
    other : undefined,
    showTitle (){
        alert(this.title)
    },
}

console.log(JSON.stringify(book));

//----------------------------------------

//JSON.parse() Method

const article = {
    "title" : "the hook and shy",
    "author": {
        "firstName" : "sajad",
        "lastName" : "Afkhami"
    },
    "age" : "28",
    "year" : 2023,
    "releaseDate" : "2020-02-25",
    
} 

console.log(JSON.parse(article));