console.log("App.js is connected")


console.log("App.js is connected");

// adding click event on every star

pageRenderCompleted = () => {

    let ratingStar = document.getElementsByClassName('grab');
    console.log(ratingStar);
    for (let i = 0; i < ratingStar.length; i++)
    {
        ratingStar[i].addEventListener('click',() => {
            ratingStar[i].classList.add('star-checked');
        })
    }
}



let reviewArray = [];




addReviewHandler = () => {
    let rating = 0;

    let review = document.getElementById('review-card').value;
    let ratingStar = document.getElementsByClassName('grab');
    for (let m = 0; m<ratingStar.length; m++)
    {
        
        if (ratingStar[m].classList.contains('star-checked') == true)
        {
            rating = rating + 1;
        }
    }
    console.log(rating);
    user = {
        userReview: review,
        userRating: rating
    }
    reviewArray.push(user);
    for (let k = 0; k<ratingStar.length; k++)
    {
        ratingStar[k].classList.remove('star-checked');
    }
    console.table(reviewArray);
    document.getElementById('review-card').value = '';
}


// display the data dynamically

searchByRating = () => {
    let searchValue = document.getElementById('search-value').value;
    var container = document.getElementById('review-container');
    container.innerHTML = '';
    let ratedOne = reviewArray.filter((x) => {
        return x.userRating == searchValue;
    })
    ratedOne.map((x) => {
        let tr = document.createElement('tr');
        let firsttd = document.createElement('td');
        let  secondtd = document.createElement('td');
        
        container.appendChild(tr);
        tr.appendChild(firsttd);
        tr.appendChild(secondtd);
        firsttd.innerHTML = x.userReview;
        secondtd.innerHTML = x.userRating;
        
    })
    document.getElementById('search-value').value = '';
    console.log(ratedOne);
}
