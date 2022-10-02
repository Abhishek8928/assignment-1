
// console.log("App.js is connected");

// // adding click event on every star

// pageRenderCompleted = () => {

//     let ratingStar = document.getElementsByClassName('grab');
//     console.log(ratingStar);
//     for (let i = 0; i < ratingStar.length; i++)
//     {
//         ratingStar[i].addEventListener('click',() => {
//             ratingStar[i].classList.add('star-checked');
//         })
//     }
// }



// let reviewArray = [];




// addReviewHandler = () => {
//     let rating = 0;

//     let review = document.getElementById('review-card').value;
//     let ratingStar = document.getElementsByClassName('grab');
//     for (let m = 0; m<ratingStar.length; m++)
//     {
        
//         if (ratingStar[m].classList.contains('star-checked') == true)
//         {
//             rating = rating + 1;
//         }
//     }
//     console.log(rating);
//     user = {
//         userReview: review,
//         userRating: rating
//     }
//     reviewArray.push(user);
//     for (let k = 0; k<ratingStar.length; k++)
//     {
//         ratingStar[k].classList.remove('star-checked');
//     }
//     console.table(reviewArray);
//     document.getElementById('review-card').value = '';
// }

// // let reviewContainer = document.getElementById('review-container');

// ratingOne = () => {
//     var container = document.getElementById('review-container');
    
//     let ratedOne = reviewArray.filter((x) => {
//         return x.userRating == 1;
//     })
//     ratedOne.map((x) => {
//         let firstDiv = document.createElement('div');
//         let h3Element = document.createElement('h3');
//         let pElement = document.createElement('p');
        
//         container.appendChild(firstDiv);
//         firstDiv.appendChild(h3Element);
//         firstDiv.appendChild(pElement);
//         h3Element.innerHTML = x.userReview;
//         pElement.innerHTML = x.userRating;
//         firstDiv.classList.add('w-50');

//     })
//     console.log(ratedOne);
// }
// ratingTwo = () => {
//     let container = document.getElementById('review-container');
//     container.innerHTML = '';
//     let ratedOne = reviewArray.filter((x) => {
//         return x.userRating == 2;
//     })
//     ratedOne.map((x) => {
//         let firstDiv = document.createElement('div');
//         let h3Element = document.createElement('h3');
//         let pElement = document.createElement('p');
        
//         container.appendChild(firstDiv);
//         firstDiv.appendChild(h3Element);
//         firstDiv.appendChild(pElement);
//         h3Element.innerHTML = x.userReview;
//         pElement.innerHTML = x.userRating;
//         firstDiv.classList.add('w-50');

//     })
//     console.log(ratedOne);
// }
// ratingThree = () => {
//     let container = document.getElementById('review-container');
//     container.innerHTML = '';
//     let ratedOne = reviewArray.filter((x) => {
//         return x.userRating == 3;
//     })
//     ratedOne.map((x) => {
//         let firstDiv = document.createElement('div');
//         let h3Element = document.createElement('h3');
//         let pElement = document.createElement('p');
        
//         container.appendChild(firstDiv);
//         firstDiv.appendChild(h3Element);
//         firstDiv.appendChild(pElement);
//         h3Element.innerHTML = x.userReview;
//         pElement.innerHTML = x.userRating;
//         firstDiv.classList.add('w-50');

//     })
//     console.log(ratedOne);
// }
// ratingFour = () => {
//     let container = document.getElementById('review-container');
//     container.innerHTML = '';
//     let ratedOne = reviewArray.filter((x) => {
//         return x.userRating == 4;
//     })
//     ratedOne.map((x) => {
//         let firstDiv = document.createElement('div');
//         let h3Element = document.createElement('h3');
//         let pElement = document.createElement('p');
        
//         container.appendChild(firstDiv);
//         firstDiv.appendChild(h3Element);
//         firstDiv.appendChild(pElement);
//         h3Element.innerHTML = x.userReview;
//         pElement.innerHTML = x.userRating;
//         firstDiv.classList.add('w-50');

//     })
//     console.log(ratedOne);
// }
// ratingFive = () => {
//     let container = document.getElementById('review-container');
//     container.innerHTML = '';
//     let ratedOne = reviewArray.filter((x) => {
//         return x.userRating == 5;
//     })
//     ratedOne.map((x) => {
//         let firstDiv = document.createElement('div');
//         let h3Element = document.createElement('h3');
//         let pElement = document.createElement('p');
        
//         container.appendChild(firstDiv);
//         firstDiv.appendChild(h3Element);
//         firstDiv.appendChild(pElement);
//         h3Element.innerHTML = x.userReview;
//         pElement.innerHTML = x.userRating;
//         firstDiv.classList.add('w-50');

//     })
//     console.log(ratedOne);
// }