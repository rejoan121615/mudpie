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
    // see whats new
    Alpine.data("seeWhatsNew", () => [
        {
            title: "the christmas shop",
            des: "Fa la la in love with everything you need to make the season magical.",
            btn: "shop christmas",
            img: "https://platform.mudpie.com/media/wysiwyg/HomePage/1122_newb2csite_seewhatsnew_3up1.jpg",
        },
        {
            title: "Ready for Santa",
            des: "And to all a good night... find the perfect holiday pajamas for the whole family.",
            btn: "shop now",
            img: "https://platform.mudpie.com/media/wysiwyg/HomePage/1122_newb2csite_seewhatsnew_3up2.jpg",
        },
        {
            title: "gifts for her",
            des: "You can't go wrong with a one size sweater, a cozy chenille blanket or our best selling jute tote.",
            btn: "shop now",
            img: "https://platform.mudpie.com/media/wysiwyg/HomePage/1122_newb2csite_seewhatsnew_3up3.jpg",
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

var swiper = new Swiper("#whats_new_slider", {
    slidesPerView: 1,
    createElements: true,
    navigation: {
        nextEl: ".large-next",
        prevEl: ".large-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            navigation: false,
            navigation: {
                nextEl: ".sm-prev",
                prevEl: ".sm-next",
            },
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
            navigation: {
                nextEl: ".large-next",
                prevEl: ".large-prev",
            },
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 15
        },
    },
});
