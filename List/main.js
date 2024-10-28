import List from "./List.js";
import fs from 'fs'

const txt = './List/films.txt'

const movies = createArr(txt)

class Customer {
  constructor(name, movie) {
    this.name = name;
    this.movie = movie;
  }
}

const movieList = new List();
const customers = new List();

for (let i = 0; i < movies.length; i++) {
  movieList.append(movies[i])
}

print("Available movies: \n"); 
displayList(movieList);
checkOut("Jane Doe", "The Godfather", movieList, customers);
print("\nCustomer Rentals: \n");
displayList(customers)
print("Available movies: \n"); 
displayList(movieList)

function displayList(list) {
  for (list.end(); list.prev() !== null;) {
    if (list.getElement() instanceof Customer) {
      print(list.getElement()['name'] + ", " + list.getElement()['movie'])
    } else {
      print(list.getElement())
    }
  }
}

function checkOut(name, movie, filmList, customerList) {
  if (movieList.contains(movie)) {
    let c = new Customer(name, movie)
    customerList.append(c);
    filmList.remove(movie)
  } else {
    print(movie + ' is not available.')
  }
}

function createArr(file) {
  const arr = read(file).split('\n')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
  }
  return arr
}

function read(filename) {
  return fs.readFileSync(filename, 'utf-8');
}

function print(msg) {
  console.log(msg)
}