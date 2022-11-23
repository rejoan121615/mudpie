document.addEventListener("alpine:init", () => {
    Alpine.data("shopByCollection", () => [
        {
            name: "Home",
            img: "https://platform.mudpie.com/media/wysiwyg/HomePage/1122_newb2csite_category_home.jpg",
        },
        {
            name: "baby & kids",
            img: "https://platform.mudpie.com/media/wysiwyg/HomePage/1122_newb2csite_category_kids.jpg",
        },
        {
            name: "women",
            img: "https://platform.mudpie.com/media/wysiwyg/HomePage/1122_newb2csite_category_women.jpg",
        },
        {
            name: "Seasonal",
            img: "https://platform.mudpie.com/media/wysiwyg/HomePage/1022_newb2csite_category_seaonal_christmas.jpg",
        },
        {
            name: "Gift Sets",
            img: "https://platform.mudpie.com/media/wysiwyg/HomePage/Shop_by_Category_Sale.jpg",
        },
    ]);
});

var swiper = new Swiper("#collection-slider", {
    slidesPerView: 3.2,
    createElements: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// var swiper = new Swiper(".mySwiper", {
//     cssMode: true,
//     autoHeight: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     mousewheel: true,
//     keyboard: true,
// });
