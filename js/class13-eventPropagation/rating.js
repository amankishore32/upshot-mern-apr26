let ratingText = document.getElementById("ratingText");
let stars = document.querySelectorAll(".star");
// let rating = 0;

// for (let i = 0; i < stars.length; i++) {
//   stars[i].addEventListener("click", function (event) {
//     rating = event.target.getAttribute("data-value");

//     console.log("selected star : " + rating);

//     ratingText.textContent = `Rating : ${rating} / 5`;

//     //Add color upto selected stars
//     for (let j = 0; j < rating; j++) {
//       stars[j].classList.add("starHighlight");
//     }

//     //Remove color for remaining stars
//     for (j = rating; j < stars.length; j++) {
//       stars[j].classList.remove("starHighlight");
//     }
//   });
// }

// ratingText.textContent = `Rating : ${rating} / 5`;

stars.forEach(function (star) {
  star.addEventListener("click hover", () => {
    rating = event.target.getAttribute("data-value");
    updateRating(rating);
  });
});

function updateRating(rating) {
  stars.forEach((star) => {
    const starVal = star.getAttribute("data-value");
    star.classList.toggle("filled", starVal <= rating);
  });
}
