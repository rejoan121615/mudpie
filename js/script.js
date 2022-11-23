document.addEventListener("alpine:init", () => {
    // collection data store
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
    // trending data store
    Alpine.data("trending", () => [
        {
            title: "one stop shop",
            des: "Easily find ready-to-gift options for everyone on your list this holiday season!",
            img: "https://platform.mudpie.com/media/wysiwyg/1122_newb2csite_cmsblog1.jpg?quality=80&auto=webp&format=pjpg",
            btn: "shop gifts",
        },
        {
            title: "Baby & Kids Christmas",
            des: "Stocking stuffers, interactive gifts, winter break fun? We've got it all for your little elves!",
            img: "https://platform.mudpie.com/media/wysiwyg/1122_newb2csite_cmsblog2.jpg?quality=80&auto=webp&format=pjpg",
            btn: "shop gifts for kids",
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
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2.3,
            navigation: false,
        },
        // when window width is >= 480px
        650: {
            slidesPerView: 3.3,
        },
        1200: {
            slidesPerView: 4.3,
        },
    },
});
