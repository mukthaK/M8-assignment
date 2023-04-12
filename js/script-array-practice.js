//STEP 1
// let movies = ['Frozen', 'Shrek', 'Toy Story', 'Home Alone', 'Lion King'];
// console.log(movies[1]);

// STEP 2
// let movies =new Array(5);
// movies[0] = 'Frozen';
// movies[1] = 'Shrek';
// movies[2] = 'Toy Story';
// movies[3] = 'Home Alone';
// movies[4] = 'Lion King';
// console.log(movies[0]);

//STEP 3
// let movies = ['Frozen', 'Shrek', 'Toy Story', 'Home Alone', 'Lion King'];
// movies[movies.length] = 'Mulan';
// console.log(movies.length);

//STEP 4
// let movies = [];
// movies[0] = 'Frozen';
// movies[1] = 'Shrek';
// movies[2] = 'Toy Story';
// movies[3] = 'Home Alone';
// movies[4] = 'Lion King';
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = [];
// movies[0] = 'Frozen';
// movies[1] = 'Shrek';
// movies[2] = 'Toy Story';
// movies[3] = 'Home Alone';
// movies[4] = 'Lion King';
// movies[5] = 'Minions';
// movies[6] = 'Finding Nemo';

// for (let movie in movies){
//     if (movies.hasOwnProperty(movie)) {
//         console.log(movies[movie]);
//     }   
// }

//STEP 6
// let movies = [];
// movies[0] = 'Frozen';
// movies[1] = 'Shrek';
// movies[2] = 'Toy Story';
// movies[3] = 'Home Alone';
// movies[4] = 'Lion King';
// movies[5] = 'Minions';
// movies[6] = 'Finding Nemo';

// for (let movie of movies){
//     console.log(movie);
// }

//STEP 7
// let movies = [];
// movies[0] = 'Frozen';
// movies[1] = 'Shrek';
// movies[2] = 'Toy Story';
// movies[3] = 'Home Alone';
// movies[4] = 'Lion King';
// movies[5] = 'Minions';
// movies[6] = 'Finding Nemo';
// movies.sort();
// for (let movie of movies){
//     console.log(movie);
// }

//STEP 8
// let movies = [];
// movies[0] = 'Frozen';
// movies[1] = 'Shrek';
// movies[2] = 'Toy Story';
// movies[3] = 'Home Alone';
// movies[4] = 'Lion King';
// movies[5] = 'Minions';
// movies[6] = 'Finding Nemo';
// let leastFavMovies = [];
// leastFavMovies[0] = 'Pathaan';
// leastFavMovies[1] = 'Smile';
// leastFavMovies[2] = 'Atrangi Re';
// console.log('Movies I like:\n\n');
// for (let movie of movies){
//         console.log(movie);
//     }
// console.log('\n\nMovies I regret watching:\n\n');
// for (let movie of leastFavMovies){
//         console.log(movie);
//     }

//STEP 9
// let movies = [];
// movies[0] = 'Frozen';
// movies[1] = 'Shrek';
// movies[2] = 'Toy Story';
// movies[3] = 'Home Alone';
// movies[4] = 'Lion King';
// movies[5] = 'Minions';
// movies[6] = 'Finding Nemo';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Pathaan';
// leastFavMovies[1] = 'Smile';
// leastFavMovies[2] = 'Atrangi Re';

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();

// for (let movie of movies){
//         console.log(movie);
//     }

//STEP 10
// let movies = [];
// movies[0] = 'Frozen';
// movies[1] = 'Shrek';
// movies[2] = 'Toy Story';
// movies[3] = 'Home Alone';
// movies[4] = 'Lion King';
// movies[5] = 'Minions';
// movies[6] = 'Finding Nemo';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Pathaan';
// leastFavMovies[1] = 'Smile';
// leastFavMovies[2] = 'Atrangi Re';

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();

// console.log(movies.pop());

//STEP 11
// let movies = [];
// movies[0] = 'Frozen';
// movies[1] = 'Shrek';
// movies[2] = 'Toy Story';
// movies[3] = 'Home Alone';
// movies[4] = 'Lion King';
// movies[5] = 'Minions';
// movies[6] = 'Finding Nemo';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Pathaan';
// leastFavMovies[1] = 'Smile';
// leastFavMovies[2] = 'Atrangi Re';

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();

// console.log(movies.shift());

//STEP 12
// let movies = [];
// movies[0] = 'Frozen';
// movies[1] = 'Shrek';
// movies[2] = 'Toy Story';
// movies[3] = 'Home Alone';
// movies[4] = 'Lion King';
// movies[5] = 'Minions';
// movies[6] = 'Finding Nemo';

// let leastFavMovies = [];
// leastFavMovies[0] = 'Pathaan';
// leastFavMovies[1] = 'Smile';
// leastFavMovies[2] = 'Atrangi Re';

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();

// movies.splice(1, 3, 'Up', 'Mulan','Lego')
// console.group(movies);

//STEP 13
// let movies = [['Frozen', 1], ['Lion King', 2], ['Shrek', 3], ['Minions', 4], ['Lego', 5]];
// let names = [];
// for (let movie of movies) {
//     names += '\n' +movie.filter((item) => {
//         return typeof item === 'string';
//     });
// }
// console.log(names);

//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];

// let showEmployee = (employees) => {
//     console.log('Employees: \n\n');
//     for (let emp of employees){
//         console.log(emp);
//     }
// }
// showEmployee(employees);

//STEP 15
// let filterValues = (arr) => {
//     return arr.filter(Boolean);
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
// function getRandom(arr) {
//     let i = Math.floor(Math.random() * arr.length);
//     return arr[i];
// }
// console.log(getRandom([12, 6, 3, 0, 5, 20, 67, 89, 10, 35]));

//STEP 17
// function largestItem(arr) {
//     return arr.reduce((a, b) => Math.max(a, b), -Infinity);
// }
// console.log(largestItem([12, 6, 3, 30, 5, 0, 67, 89, 10, 35]));