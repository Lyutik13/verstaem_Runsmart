// $(document).ready(function () {
//     $(".carousel__inner").slick({
//         speed: 1200,
//         prevArrow:
//             '<button type="button" class="slick-prev"><img src="img/slaid/left.svg"></button>',
//         nextArrow:
//             '<button type="button" class="slick-next"><img src="img/slaid/right.svg"></button>',
//     });
// });

// Tiny Slider 2
const slider = tns({
    container: ".carousel__inner",
    items: 1,
    slideBy: "page",
    autoplay: false,
    controls: false,
    nav: false,
});

document.querySelector(".prev").addEventListener("click", function () {
    slider.goTo("prev");
});

document.querySelector(".next").addEventListener("click", function () {
    slider.goTo("next");
});
