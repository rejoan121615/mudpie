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
        {
            img: "https://scontent.cdninstagram.com/v/t51.29350-15/316786993_206033308463727_5371169783382967445_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=-U3kogQhCVMAX8Usk43&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDZ-FE4_QOoyrlmZfz-uFQ0b87YnFJbpmj6-eQbqHenSg&oe=63841FEF",
        },
    ]);
    // const new country
    // country list for phone number
    Alpine.data("country", () => [
        { name: "Afghanistan", dial_code: "+93", code: "fi fi-af" },
        { name: "Aland Islands", dial_code: "+358", code: "fi fi-ax" },
        { name: "Albania", dial_code: "+355", code: "fi fi-al" },
        { name: "Algeria", dial_code: "+213", code: "fi fi-dz" },
        { name: "AmericanSamoa", dial_code: "+1684", code: "fi fi-as" },
        { name: "Andorra", dial_code: "+376", code: "fi fi-ad" },
        { name: "Angola", dial_code: "+244", code: "fi fi-ao" },
        { name: "Anguilla", dial_code: "+1264", code: "fi fi-ai" },
        { name: "Antarctica", dial_code: "+672", code: "fi fi-aq" },
        {
            name: "Antigua and Barbuda",
            dial_code: "+1268",
            code: "fi fi-ag",
        },
        { name: "Argentina", dial_code: "+54", code: "fi fi-ar" },
        { name: "Armenia", dial_code: "+374", code: "fi fi-am" },
        { name: "Aruba", dial_code: "+297", code: "fi fi-aw" },
        { name: "Australia", dial_code: "+61", code: "fi fi-au" },
        { name: "Austria", dial_code: "+43", code: "fi fi-at" },
        { name: "Azerbaijan", dial_code: "+994", code: "fi fi-az" },
        { name: "Bahamas", dial_code: "+1242", code: "fi fi-bs" },
        { name: "Bahrain", dial_code: "+973", code: "fi fi-bh" },
        { name: "Bangladesh", dial_code: "+880", code: "fi fi-bd" },
        { name: "Barbados", dial_code: "+1246", code: "fi fi-bb" },
        { name: "Belarus", dial_code: "+375", code: "fi fi-by" },
        { name: "Belgium", dial_code: "+32", code: "fi fi-be" },
        { name: "Belize", dial_code: "+501", code: "fi fi-bz" },
        { name: "Benin", dial_code: "+229", code: "fi fi-bj" },
        { name: "Bermuda", dial_code: "+1441", code: "fi fi-bm" },
        { name: "Bhutan", dial_code: "+975", code: "fi fi-bt" },
        {
            name: "Bolivia, Plurinational State of",
            dial_code: "+591",
            code: "fi fi-bo",
        },
        {
            name: "Bosnia and Herzegovina",
            dial_code: "+387",
            code: "fi fi-ba",
        },
        { name: "Botswana", dial_code: "+267", code: "fi fi-bw" },
        { name: "Brazil", dial_code: "+55", code: "fi fi-br" },
        {
            name: "British Indian Ocean Territory",
            dial_code: "+246",
            code: "fi fi-io",
        },
        { name: "Brunei Darussalam", dial_code: "+673", code: "fi fi-bn" },
        { name: "Bulgaria", dial_code: "+359", code: "fi fi-bg" },
        { name: "Burkina Faso", dial_code: "+226", code: "fi fi-bf" },
        { name: "Burundi", dial_code: "+257", code: "fi fi-bi" },
        { name: "Cambodia", dial_code: "+855", code: "fi fi-kh" },
        { name: "Cameroon", dial_code: "+237", code: "fi fi-cm" },
        { name: "Canada", dial_code: "+1", code: "fi fi-ca" },
        { name: "Cape Verde", dial_code: "+238", code: "fi fi-cv" },
        { name: "Cayman Islands", dial_code: "+ 345", code: "fi fi-ky" },
        {
            name: "Central African Republic",
            dial_code: "+236",
            code: "fi fi-cf",
        },
        { name: "Chad", dial_code: "+235", code: "fi fi-td" },
        { name: "Chile", dial_code: "+56", code: "fi fi-cl" },
        { name: "China", dial_code: "+86", code: "fi fi-cn" },
        { name: "Christmas Island", dial_code: "+61", code: "fi fi-cx" },
        {
            name: "Cocos (Keeling) Islands",
            dial_code: "+61",
            code: "fi fi-cc",
        },
        { name: "Colombia", dial_code: "+57", code: "fi fi-co" },
        { name: "Comoros", dial_code: "+269", code: "fi fi-km" },
        { name: "Congo", dial_code: "+242", code: "fi fi-cg" },
        {
            name: "Congo, The Democratic Republic of the Congo",
            dial_code: "+243",
            code: "fi fi-cd",
        },
        { name: "Cook Islands", dial_code: "+682", code: "fi fi-ck" },
        { name: "Costa Rica", dial_code: "+506", code: "fi fi-cr" },
        { name: "Cote d'Ivoire", dial_code: "+225", code: "fi fi-ci" },
        { name: "Croatia", dial_code: "+385", code: "fi fi-hr" },
        { name: "Cuba", dial_code: "+53", code: "fi fi-cu" },
        { name: "Cyprus", dial_code: "+357", code: "fi fi-cy" },
        { name: "Czech Republic", dial_code: "+420", code: "fi fi-cz" },
        { name: "Denmark", dial_code: "+45", code: "fi fi-dk" },
        { name: "Djibouti", dial_code: "+253", code: "fi fi-dj" },
        { name: "Dominica", dial_code: "+1767", code: "fi fi-dm" },
        {
            name: "Dominican Republic",
            dial_code: "+1849",
            code: "fi fi-do",
        },
        { name: "Ecuador", dial_code: "+593", code: "fi fi-ec" },
        { name: "Egypt", dial_code: "+20", code: "fi fi-eg" },
        { name: "El Salvador", dial_code: "+503", code: "fi fi-sv" },
        { name: "Equatorial Guinea", dial_code: "+240", code: "fi fi-gq" },
        { name: "Eritrea", dial_code: "+291", code: "fi fi-er" },
        { name: "Estonia", dial_code: "+372", code: "fi fi-ee" },
        { name: "Ethiopia", dial_code: "+251", code: "fi fi-et" },
        {
            name: "Falkland Islands (Malvinas)",
            dial_code: "+500",
            code: "fi fi-fk",
        },
        { name: "Faroe Islands", dial_code: "+298", code: "fi fi-fo" },
        { name: "Fiji", dial_code: "+679", code: "fi fi-fj" },
        { name: "Finland", dial_code: "+358", code: "fi fi-fi" },
        { name: "France", dial_code: "+33", code: "fi fi-fr" },
        { name: "French Guiana", dial_code: "+594", code: "fi fi-gf" },
        { name: "French Polynesia", dial_code: "+689", code: "fi fi-pf" },
        { name: "Gabon", dial_code: "+241", code: "fi fi-ga" },
        { name: "Gambia", dial_code: "+220", code: "fi fi-gm" },
        { name: "Georgia", dial_code: "+995", code: "fi fi-ge" },
        { name: "Germany", dial_code: "+49", code: "fi fi-de" },
        { name: "Ghana", dial_code: "+233", code: "fi fi-gh" },
        { name: "Gibraltar", dial_code: "+350", code: "fi fi-gi" },
        { name: "Greece", dial_code: "+30", code: "fi fi-gr" },
        { name: "Greenland", dial_code: "+299", code: "fi fi-gl" },
        { name: "Grenada", dial_code: "+1473", code: "fi fi-gd" },
        { name: "Guadeloupe", dial_code: "+590", code: "fi fi-gp" },
        { name: "Guam", dial_code: "+1671", code: "fi fi-gu" },
        { name: "Guatemala", dial_code: "+502", code: "fi fi-gt" },
        { name: "Guernsey", dial_code: "+44", code: "fi fi-gg" },
        { name: "Guinea", dial_code: "+224", code: "fi fi-gn" },
        { name: "Guinea-Bissau", dial_code: "+245", code: "fi fi-gw" },
        { name: "Guyana", dial_code: "+595", code: "fi fi-gy" },
        { name: "Haiti", dial_code: "+509", code: "fi fi-ht" },
        {
            name: "Holy See (Vatican City State)",
            dial_code: "+379",
            code: "fi fi-va",
        },
        { name: "Honduras", dial_code: "+504", code: "fi fi-hn" },
        { name: "Hong Kong", dial_code: "+852", code: "fi fi-hk" },
        { name: "Hungary", dial_code: "+36", code: "fi fi-hu" },
        { name: "Iceland", dial_code: "+354", code: "fi fi-is" },
        { name: "India", dial_code: "+91", code: "fi fi-in" },
        { name: "Indonesia", dial_code: "+62", code: "fi fi-id" },
        {
            name: "Iran, Islamic Republic of Persian Gulf",
            dial_code: "+98",
            code: "fi fi-ir",
        },
        { name: "Iraq", dial_code: "+964", code: "fi fi-iq" },
        { name: "Ireland", dial_code: "+353", code: "fi fi-ie" },
        { name: "Isle of Man", dial_code: "+44", code: "fi fi-im" },
        { name: "Israel", dial_code: "+972", code: "fi fi-il" },
        { name: "Italy", dial_code: "+39", code: "fi fi-it" },
        { name: "Jamaica", dial_code: "+1876", code: "fi fi-jm" },
        { name: "Japan", dial_code: "+81", code: "fi fi-jp" },
        { name: "Jersey", dial_code: "+44", code: "fi fi-je" },
        { name: "Jordan", dial_code: "+962", code: "fi fi-jo" },
        { name: "Kazakhstan", dial_code: "+77", code: "fi fi-kz" },
        { name: "Kenya", dial_code: "+254", code: "fi fi-ke" },
        { name: "Kiribati", dial_code: "+686", code: "fi fi-ki" },
        {
            name: "Korea, Democratic People's Republic of Korea",
            dial_code: "+850",
            code: "fi fi-kp",
        },
        {
            name: "Korea, Republic of South Korea",
            dial_code: "+82",
            code: "fi fi-kr",
        },
        { name: "Kuwait", dial_code: "+965", code: "fi fi-kw" },
        { name: "Kyrgyzstan", dial_code: "+996", code: "fi fi-kg" },
        { name: "Laos", dial_code: "+856", code: "fi fi-la" },
        { name: "Latvia", dial_code: "+371", code: "fi fi-lv" },
        { name: "Lebanon", dial_code: "+961", code: "fi fi-lb" },
        { name: "Lesotho", dial_code: "+266", code: "fi fi-ls" },
        { name: "Liberia", dial_code: "+231", code: "fi fi-lr" },
        {
            name: "Libyan Arab Jamahiriya",
            dial_code: "+218",
            code: "fi fi-ly",
        },
        { name: "Liechtenstein", dial_code: "+423", code: "fi fi-li" },
        { name: "Lithuania", dial_code: "+370", code: "fi fi-lt" },
        { name: "Luxembourg", dial_code: "+352", code: "fi fi-lu" },
        { name: "Macao", dial_code: "+853", code: "fi fi-mo" },
        { name: "Macedonia", dial_code: "+389", code: "fi fi-mk" },
        { name: "Madagascar", dial_code: "+261", code: "fi fi-mg" },
        { name: "Malawi", dial_code: "+265", code: "fi fi-mw" },
        { name: "Malaysia", dial_code: "+60", code: "fi fi-my" },
        { name: "Maldives", dial_code: "+960", code: "fi fi-mv" },
        { name: "Mali", dial_code: "+223", code: "fi fi-ml" },
        { name: "Malta", dial_code: "+356", code: "fi fi-mt" },
        { name: "Marshall Islands", dial_code: "+692", code: "fi fi-mh" },
        { name: "Martinique", dial_code: "+596", code: "fi fi-mq" },
        { name: "Mauritania", dial_code: "+222", code: "fi fi-mr" },
        { name: "Mauritius", dial_code: "+230", code: "fi fi-mu" },
        { name: "Mayotte", dial_code: "+262", code: "fi fi-yt" },
        { name: "Mexico", dial_code: "+52", code: "fi fi-mx" },
        {
            name: "Micronesia, Federated States of Micronesia",
            dial_code: "+691",
            code: "fi fi-fm",
        },
        { name: "Moldova", dial_code: "+373", code: "fi fi-md" },
        { name: "Monaco", dial_code: "+377", code: "fi fi-mc" },
        { name: "Mongolia", dial_code: "+976", code: "fi fi-mn" },
        { name: "Montenegro", dial_code: "+382", code: "fi fi-me" },
        { name: "Montserrat", dial_code: "+1664", code: "fi fi-ms" },
        { name: "Morocco", dial_code: "+212", code: "fi fi-ma" },
        { name: "Mozambique", dial_code: "+258", code: "fi fi-mz" },
        { name: "Myanmar", dial_code: "+95", code: "fi fi-mm" },
        { name: "Namibia", dial_code: "+264", code: "fi fi-na" },
        { name: "Nauru", dial_code: "+674", code: "fi fi-nr" },
        { name: "Nepal", dial_code: "+977", code: "fi fi-np" },
        { name: "Netherlands", dial_code: "+31", code: "fi fi-nl" },
        {
            name: "Netherlands Antilles",
            dial_code: "+599",
            code: "fi fi-an",
        },
        { name: "New Caledonia", dial_code: "+687", code: "fi fi-nc" },
        { name: "New Zealand", dial_code: "+64", code: "fi fi-nz" },
        { name: "Nicaragua", dial_code: "+505", code: "fi fi-ni" },
        { name: "Niger", dial_code: "+227", code: "fi fi-ne" },
        { name: "Nigeria", dial_code: "+234", code: "fi fi-ng" },
        { name: "Niue", dial_code: "+683", code: "fi fi-nu" },
        { name: "Norfolk Island", dial_code: "+672", code: "fi fi-nf" },
        {
            name: "Northern Mariana Islands",
            dial_code: "+1670",
            code: "fi fi-mp",
        },
        { name: "Norway", dial_code: "+47", code: "fi fi-no" },
        { name: "Oman", dial_code: "+968", code: "fi fi-om" },
        { name: "Pakistan", dial_code: "+92", code: "fi fi-pk" },
        { name: "Palau", dial_code: "+680", code: "fi fi-pw" },
        {
            name: "Palestinian Territory, Occupied",
            dial_code: "+970",
            code: "fi fi-ps",
        },
        { name: "Panama", dial_code: "+507", code: "fi fi-pa" },
        { name: "Papua New Guinea", dial_code: "+675", code: "fi fi-pg" },
        { name: "Paraguay", dial_code: "+595", code: "fi fi-py" },
        { name: "Peru", dial_code: "+51", code: "fi fi-pe" },
        { name: "Philippines", dial_code: "+63", code: "fi fi-ph" },
        { name: "Pitcairn", dial_code: "+872", code: "fi fi-pn" },
        { name: "Poland", dial_code: "+48", code: "fi fi-pl" },
        { name: "Portugal", dial_code: "+351", code: "fi fi-pt" },
        { name: "Puerto Rico", dial_code: "+1939", code: "fi fi-pr" },
        { name: "Qatar", dial_code: "+974", code: "fi fi-qa" },
        { name: "Romania", dial_code: "+40", code: "fi fi-ro" },
        { name: "Russia", dial_code: "+7", code: "fi fi-ru" },
        { name: "Rwanda", dial_code: "+250", code: "fi fi-rw" },
        { name: "Reunion", dial_code: "+262", code: "fi fi-re" },
        { name: "Saint Barthelemy", dial_code: "+590", code: "fi fi-bl" },
        {
            name: "Saint Helena, Ascension and Tristan Da Cunha",
            dial_code: "+290",
            code: "fi fi-sh",
        },
        {
            name: "Saint Kitts and Nevis",
            dial_code: "+1869",
            code: "fi fi-kn",
        },
        { name: "Saint Lucia", dial_code: "+1758", code: "fi fi-lc" },
        { name: "Saint Martin", dial_code: "+590", code: "fi fi-mf" },
        {
            name: "Saint Pierre and Miquelon",
            dial_code: "+508",
            code: "fi fi-pm",
        },
        {
            name: "Saint Vincent and the Grenadines",
            dial_code: "+1784",
            code: "fi fi-vc",
        },
        { name: "Samoa", dial_code: "+685", code: "fi fi-ws" },
        { name: "San Marino", dial_code: "+378", code: "fi fi-sm" },
        {
            name: "Sao Tome and Principe",
            dial_code: "+239",
            code: "fi fi-st",
        },
        { name: "Saudi Arabia", dial_code: "+966", code: "fi fi-sa" },
        { name: "Senegal", dial_code: "+221", code: "fi fi-sn" },
        { name: "Serbia", dial_code: "+381", code: "fi fi-rs" },
        { name: "Seychelles", dial_code: "+248", code: "fi fi-sc" },
        { name: "Sierra Leone", dial_code: "+232", code: "fi fi-sl" },
        { name: "Singapore", dial_code: "+65", code: "fi fi-sg" },
        { name: "Slovakia", dial_code: "+421", code: "fi fi-sk" },
        { name: "Slovenia", dial_code: "+386", code: "fi fi-si" },
        { name: "Solomon Islands", dial_code: "+677", code: "fi fi-sb" },
        { name: "Somalia", dial_code: "+252", code: "fi fi-so" },
        { name: "South Africa", dial_code: "+27", code: "fi fi-za" },
        { name: "South Sudan", dial_code: "+211", code: "fi fi-ss" },
        {
            name: "South Georgia and the South Sandwich Islands",
            dial_code: "+500",
            code: "fi fi-gs",
        },
        { name: "Spain", dial_code: "+34", code: "fi fi-es" },
        { name: "Sri Lanka", dial_code: "+94", code: "fi fi-lk" },
        { name: "Sudan", dial_code: "+249", code: "fi fi-sd" },
        { name: "Suriname", dial_code: "+597", code: "fi fi-sr" },
        {
            name: "Svalbard and Jan Mayen",
            dial_code: "+47",
            code: "fi fi-sj",
        },
        { name: "Swaziland", dial_code: "+268", code: "fi fi-sz" },
        { name: "Sweden", dial_code: "+46", code: "fi fi-se" },
        { name: "Switzerland", dial_code: "+41", code: "fi fi-ch" },
        {
            name: "Syrian Arab Republic",
            dial_code: "+963",
            code: "fi fi-sy",
        },
        { name: "Taiwan", dial_code: "+886", code: "fi fi-tw" },
        { name: "Tajikistan", dial_code: "+992", code: "fi fi-tj" },
        {
            name: "Tanzania, United Republic of Tanzania",
            dial_code: "+255",
            code: "fi fi-tz",
        },
        { name: "Thailand", dial_code: "+66", code: "fi fi-th" },
        { name: "Timor-Leste", dial_code: "+670", code: "fi fi-tl" },
        { name: "Togo", dial_code: "+228", code: "fi fi-tg" },
        { name: "Tokelau", dial_code: "+690", code: "fi fi-tk" },
        { name: "Tonga", dial_code: "+676", code: "fi fi-to" },
        {
            name: "Trinidad and Tobago",
            dial_code: "+1868",
            code: "fi fi-tt",
        },
        { name: "Tunisia", dial_code: "+216", code: "fi fi-tn" },
        { name: "Turkey", dial_code: "+90", code: "fi fi-tr" },
        { name: "Turkmenistan", dial_code: "+993", code: "fi fi-tm" },
        {
            name: "Turks and Caicos Islands",
            dial_code: "+1649",
            code: "fi fi-tc",
        },
        { name: "Tuvalu", dial_code: "+688", code: "fi fi-tv" },
        { name: "Uganda", dial_code: "+256", code: "fi fi-ug" },
        { name: "Ukraine", dial_code: "+380", code: "fi fi-ua" },
        {
            name: "United Arab Emirates",
            dial_code: "+971",
            code: "fi fi-ae",
        },
        { name: "United Kingdom", dial_code: "+44", code: "fi fi-gb" },
        { name: "United States", dial_code: "+1", code: "fi fi-us" },
        { name: "Uruguay", dial_code: "+598", code: "fi fi-uy" },
        { name: "Uzbekistan", dial_code: "+998", code: "fi fi-uz" },
        { name: "Vanuatu", dial_code: "+678", code: "fi fi-vu" },
        {
            name: "Venezuela, Bolivarian Republic of Venezuela",
            dial_code: "+58",
            code: "fi fi-ve",
        },
        { name: "Vietnam", dial_code: "+84", code: "fi fi-vn" },
        {
            name: "Virgin Islands, British",
            dial_code: "+1284",
            code: "fi fi-vg",
        },
        {
            name: "Virgin Islands, U.S.",
            dial_code: "+1340",
            code: "fi fi-vi",
        },
        { name: "Wallis and Futuna", dial_code: "+681", code: "fi fi-wf" },
        { name: "Yemen", dial_code: "+967", code: "fi fi-ye" },
        { name: "Zambia", dial_code: "+260", code: "fi fi-zm" },
        { name: "Zimbabwe", dial_code: "+263", code: "fi fi-zw" },
    ]);
    Alpine.store("selectedCountry", {
        active: "fi fi-af",
        showList: false,
        listToggle() {
            this.showList = !this.showList;
        },
        activeHandler(name) {
            this.active = name;
            this.showList = !this.showList;
        },
    });
    // top alert box
    Alpine.store("topBar", {
        show: true,
        showHandler() {
            this.show = false;
        },
    });
    // catagory data on catagory page
    Alpine.data("catagoryPageCollection", () => [
        {
            name: "Decor",
            img: "https://platform.mudpie.com/media/wysiwyg/Home/1122_newb2csite_home_category_home.jpg",
        },
        {
            name: "entertaining",
            img: "https://platform.mudpie.com/media/wysiwyg/Home/1122_newb2csite_home_category_entertaining.jpg",
        },
        {
            name: "kitchen",
            img: "https://platform.mudpie.com/media/wysiwyg/Home/1122_newb2csite_home_category_kitchen.jpg",
        },
        {
            name: "linens",
            img: "https://platform.mudpie.com/media/wysiwyg/Home/1122_newb2csite_home_category_linens.jpg",
        },
    ]);
    // product page 
    Alpine.store("product", {
        title: "REINDEER EVERYTHING TRAY",
        price: 16.5,
        sku: "48700017D",
        imgList: [
            "https://platform.mudpie.com/media/catalog/product/4/8/48700017d.jpg",
            "https://platform.mudpie.com/media/catalog/product/4/8/48700017s.jpg",
        ],
        selectedImg: 'https://platform.mudpie.com/media/catalog/product/4/8/48700017d.jpg',
        quantity: 1,
        info: "It's the happiest season of all - get ready with our Reindeer everything tray. The small ceramic tray features a detailed image of a reindeer in the center. The tray also features the words \"it's the happiest seasonal of all\". This tray can be used for serving butter or your favorite Christmas dishes!",
        details: {
            dimention: '4" x 9 1/4"',
            material: "dolomite",
            care: "dishwasher safe",
            instructions: "microwave safe",
            upc: "718540716045",
        },
    });
    // product list 
    Alpine.data('prodList', () => [{img : "https://platform.mudpie.com/media/catalog/product/4/7/47700319w.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "White Oyster Wood Vase", price : "$20.00"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/7/47700319n.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Natural Oyster Wood Vase", price : "$20.00"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400097w.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Farmhouse Christmas Wreath Soap Dish Set", price : "$18.50"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400097t.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Farmhouse Christmas Tree Soap Dish Set", price : "$18.50"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400097j.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Farmhouse Christmas Jingle Bell Soap Dish Set", price : "$18.50"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400087r.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Red Christmas Soap Basket Set", price : "$22.00"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400085w.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "White Tartan Sponge and Santa Soap Set", price : "$11.50"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400085r.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Red Tartan Sponge and Santa Soap Set", price : "$11.50"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400085g.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Gray Tartan Sponge and Santa Soap Set", price : "$11.50"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400084.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Deer Soap Stand Set", price : "$35.00"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400075p.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Peace Gold Soap and Guest Towel Basket Set", price : "$35.50"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400075m.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Merry Gold Soap and Guest Towel Basket Set", price : "$35.50"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400056.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Reindeer Soap Pump and Sponge Holder", price : "$33.00"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400042r.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Red Deer Soap Stand Set", price : "$31.50"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400042b.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Black Deer Soap Stand Set", price : "$31.50"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/7/47700316y.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Yellow Fall Small Vase", price : "$28.00"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/7/47700316g.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Green Fall Small Vase", price : "$28.00"},

    {img : "https://platform.mudpie.com/media/catalog/product/4/7/47700316b.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Brown Fall Small Vase", price : "$28.00"},
    
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400073y.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Yellow Gather Soap Dish Set", price : "$25.00"},
    {img : "https://platform.mudpie.com/media/catalog/product/4/4/44400073r.jpg?optimize=high&fit=bounds&height=&width=384&format=pjpg&quality=75&auto=webp", name : "Orange Gather Soap Dish Set", price : "$25.00"}
    ])
});

window.onload = function () {
   new Swiper("#collection-slider", {
        slidesPerView: 2.2,
        createElements: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2.3,
                navigation: false,
            },
            650: {
                slidesPerView: 3.3,
            },
            1200: {
                slidesPerView: 4.3,
            },
        },
    });

    new Swiper("#whats_new_slider", {
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
    new Swiper("#best_seller_slider", {
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
    new Swiper("#catagory__page__collection", {
        slidesPerView: 2.2,
        createElements: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2.3,
                navigation: false,
            },
            650: {
                slidesPerView: 3.3,
            },
            1200: {
                slidesPerView: 4.3,
            },
        },
    });
    new Swiper("#catagory__page__collection__list", {
        slidesPerView: 2.2,
        createElements: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2.3,
                navigation: false,
            },
            650: {
                slidesPerView: 3.5,
                loopAdditionalSlides: 100,
            },
            1200: {
                slidesPerView: 4.3,
            },
        },
    });
    new Swiper(".product__details--slider", {
        slidesPerView: 1,
        createElements: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};
