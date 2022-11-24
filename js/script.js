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
    // shop best sellers
    Alpine.data("shopBestSeller", () => [
        {
            img: "https://platform.mudpie.com/media/catalog/product/4/4/44400097t.jpg?optimize=high&fit=bounds&height=&width=",
            title: "Farmhouse Christmas Tree Soap Dish Set",
            price: "$18.50",
        },
        {
            img: "https://platform.mudpie.com/media/catalog/product/4/4/44400084.jpg?optimize=high&fit=bounds&height=&width=",
            title: "Deer Soap Stand Set",
            price: "$35.00",
        },
        {
            img: "https://platform.mudpie.com/media/catalog/product/4/3/43900106.jpg?optimize=high&fit=bounds&height=&width=",
            title: "Merry and Bright Reindeer Table Runner",
            price: "$39.00",
        },
        {
            img: "https://platform.mudpie.com/media/catalog/product/4/3/43500148h.jpg?optimize=high&fit=bounds&height=&width=",
            title: "Hot Cocoa Recipe Mug",
            price: "$23.00",
        },
        {
            img: "https://platform.mudpie.com/media/catalog/product/4/2/42600718r.jpg?optimize=high&fit=bounds&height=&width=",
            title: "Red Place Card Tree",
            price: "$9.00",
        },
    ]);
    // the gram data 
    Alpine.data("gram", () => [
        {
            img: "https://scontent.cdninstagram.com/v/t51.29350-15/316786993_206033308463727_5371169783382967445_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=-U3kogQhCVMAX8Usk43&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDZ-FE4_QOoyrlmZfz-uFQ0b87YnFJbpmj6-eQbqHenSg&oe=63841FEF",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.29350-15/316355374_670973851307278_293082458469647808_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=CWZgq7ccQR0AX9GSZ2r&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCEN_mmhBR7PKJUNFmawgSVDFuNUY56ANjmNqcYseqfHw&oe=6384E52E",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/316869594_691790392273621_8901337147660982140_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=TUggOqLCNz8AX8ZVi44&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfD5XDy9BFl6EwHK4vIzKiPLTHxvpLPCYs3i5o1IjLTZDQ&oe=6383F2A9",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.29350-15/316476580_876612877027671_3316601181094681778_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=mwaq9DS3dYYAX-ak8UU&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDGR6VkKQnxw-VOpDfmFKDUOKX7RvTFFVyckxz4ePaVWg&oe=6382F2B2",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/316502022_844199610216952_4181122891421739814_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=wSL58vE55L8AX-pDpB1&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfCozkSiNCzn1jrVzVysGwLXmYIICB1rjN4Rq3-aP9eQKQ&oe=6382F7AE",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/316527514_6221888787825853_2113059018372646665_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=F_0TbEYdCxsAX-kfcCT&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfC3DkOrKpqIrb1uf8zoqFMeOnCGtrSIT4zdIlatq3cWrw&oe=6384CA87",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315973098_152033657556587_1868104755745956469_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iRmmxpQJ2TgAX_G4vP3&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCPwpCCt-LyBE-TeOuxMOppmS9BRXk_KmjyujvJN20R_w&oe=6384BF74",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315657760_475308581137745_3824808828159544651_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=1QYdt7WWNXwAX9VH3Ih&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAZhBbLU-pFR0L23pyTtEZkVeyMsabPfBimH6J1xAuVwA&oe=638346A7",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315544070_689934409100846_3231771958956319258_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=u1I6VuOrFmUAX-FM9aB&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDe5eFSaChZNsMY1E25HAaXETgx79Ow9af37h6Xt2A07Q&oe=638479BF",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/316054246_427166596295028_965212903024969087_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=LRTWZYaPC3UAX8bHasN&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDvq4kTPxp289BD6nFCq5xS4l_nTmVvhcLuy0icdjacpQ&oe=63833A9D",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/316054246_427166596295028_965212903024969087_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=LRTWZYaPC3UAX8bHasN&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDvq4kTPxp289BD6nFCq5xS4l_nTmVvhcLuy0icdjacpQ&oe=63833A9D",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315558565_130468039609283_3430198335191319169_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=HxAfiloGa_sAX-D7v7M&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDKdXwf2fS8BZRgqPb1En-PQW8cy5zUAY8AEwVDvY2GjA&oe=6383EA15",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315426885_911194039845756_6129513144835152796_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=lrRUrZ0VOXsAX9ExC96&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCNpPUk4HI556iVuIFIpv08CykleozM2yqeIURT-XEraQ&oe=6382F6C2",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315435383_666171691609479_2235559393119750942_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=TTojIL7Sh2UAX8TPTNb&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDCHz_PfCKvRDsGffOU9J5XyMmuGGul4Hd0xkRW-9WEUQ&oe=6383B77D",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315421202_654061279653666_6123494685750310474_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=LA1ElD6siasAX_cIj4i&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfCBcviAW_22GrlyOSfVqyQO-0duUfR6Dhj_VHD4r0X-tg&oe=6382F9CA",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315293297_1070085483683253_7645392259852647139_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=WqLhXkXkwr4AX-42RQh&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfCbsgd-0XEflr8H0u0yx8j2s7D-Qfwz4Z_dHiKXRjoL7w&oe=63833AC1",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315354220_166274792685330_8307284779318022398_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=2nBp8LZVrVoAX94PizD&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfBC4c5mf7aKf_tDEFxWijfwyO4MgLYOxVcF22zEyFW6ew&oe=6384E126",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315546262_1139470733357071_7693433777628940185_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=UEsqfdU5jLsAX8HqV-W&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfDRR9f3td2yCU8vmAI0jZPu0Y6KNVmOR8kBR9Nd0PJPxw&oe=638360CC",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/314923228_1066558921410192_7913731142582721157_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=lFLvubbCEMEAX86BmYN&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfBTkNsVwza6X6IxksdORbVU5cEm6RMQcPNjj6jZjMzI0g&oe=63843C92",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/315015596_456724816557390_6093439762069472966_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=jCnuNa5l8AwAX-Dd-fX&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfCAUqRii00S6-5FQ_6Y4iVCNInSn6Hz_Ip2v6C2Afl-fg&oe=63833793",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/314946137_455756143138945_3269230059935359732_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=qdjw7mON8pwAX-T1gTi&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfDpqfLSWgmdprLAJe5Fx3Ie5ggC15SKMFZkf_q-lMbz6Q&oe=6382F73D",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/313933242_1293764538106863_531421218166900798_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=t1tVWuFm6V8AX9XWUX9&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfBdLlfHzluS207KUXghFyCc31UNbG6QOiAhvnMj3qTIjw&oe=63831A03",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/313275646_803549010914613_3601675705293119673_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=GPmOxLjbl8QAX8ACB24&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfASCU-W4aW5KDkJgRaOdmMYpXxCaISVkJccCvpxJSmslw&oe=6383A534",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/313527866_5759427420769509_114581667094942014_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=T8NtrMiKdkEAX9CGaej&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfAKwukr58ygw1AsMAFvGm74ma9NT4q4KexWsLy0h-gyxQ&oe=63845270",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.29350-15/313937667_1279361479491529_4426890864444285380_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=-UgQo03Qzn8AX9FSCT7&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBWTK4fWCXtfknvP8IhhlbByReUCpj8thw8J727r9DLVA&oe=63837026",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/313291665_173267632020957_7335051930048942832_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ME0-KtPTklAAX_qAMP8&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfAsUW5aR8JNKGMMnNsqsGsr-E4IcbKdNwgWnU7Md_x6dA&oe=6384A931",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/313192554_105041132364706_7806419102376587564_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=MHYDX9nl0P4AX_iF3F4&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AfBQgfdoVTwWT5ewR0HuenZutDAktZlvIkOMZNSJig8pZA&oe=63845D43",
        },
        {
            img: "https://scontent.cdninstagram.com/v/t51.2885-15/313230380_652752449549041_1627979860311362026_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=dH40k5_-v9IAX88774p&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDVx3NqFxd-vnPBETuJmvJn-kCvW3tEj6V4QSX335RiOQ&oe=6384585E",
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
            spaceBetween: 15,
        },
    },
});

var swiper = new Swiper("#best_seller_slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

