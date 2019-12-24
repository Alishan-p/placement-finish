$(".center").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1
      }
    }
  ]
});

// // function name to be called after the page loads
// var loaderPage = function() {
//   // calls the function after the given timeout in end
//   setTimeout(function() {
//     $(".show").addClass("fadeInUp");
//   }, 500);
// };

// // calls all the function defined inside afer the dom loaded sucessfully
// $(function() {
//   loaderPage();
// });
