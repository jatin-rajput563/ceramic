const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates-2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



// section 2
const cardData = [
    {
        image: "./assets/images/png/sec-2-img-1.png",
        title: "Kitchen Backsplash",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: "./assets/images/svg/learn-svg.svg",
    },
    {
        image: "./assets/images/png/sec-2-img-2.png",
        title: "Custom Showers",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: "./assets/images/svg/learn-svg.svg",
    },
    {
        image: "./assets/images/png/sec-2-img-3.png",
        title: "Custom Flooring",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: "./assets/images/svg/learn-svg.svg",
    },
    {
        image: "./assets/images/png/sec-2-img-4.png",
        title: "Large Format Tiling",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: "./assets/images/svg/learn-svg.svg",
    },
    {
        image: "./assets/images/png/sec-2-img-5.png",
        title: "Wall Tiling",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: "./assets/images/svg/learn-svg.svg",
    },
    {
        image: "./assets/images/png/sec-2-img-6.png",
        title: "ADA Compliant Showers",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: "./assets/images/svg/learn-svg.svg",
    },
    {
        image: "./assets/images/png/sec-2-img-4.png",
        title: "Fireplace Tiling",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: "./assets/images/svg/learn-svg.svg",
    },
]

const cardContainer = document.getElementById("sec-2-cards");
cardContainer.innerHTML = cardData.map(card => `
    <div class="col-12 col-lg-4 col-sm-6 mb-4 d-flex justify-content-center">
                    <div class="sec-2-card w-100 ">
                        <img class="mb-4 w-100" src="${card.image}" alt="image">
                        <h3 class="fw-semibold fs-3xl lh-38 text-black mb-12">${card.title}</h3>
                        <p class="fw-normal fs-lg lh-25 text-black mb-4">${card.description}</p>
                        <div class="d-flex align-items-center gap-10">
                            <p class="fw-semibold fs-lg lh-25 text-red mb-0">${card.text}</p>
                            <img src="${card.svg}" alt="svg">
                        </div>
                    </div>
                </div>
    `)
    .join('');
// section 3
const cardData2 = [
    {
        image: "./assets/images/png/sec-2-img-1.png",
        title: "Kitchen Backsplash",
        description: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
        text: "Learn more",
        svg: "./assets/images/svg/learn-svg.svg",
    },
]
