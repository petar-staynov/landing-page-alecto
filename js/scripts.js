/*-------------- NAVBAR SCRIPTS -----------------------*/
window.onscroll = () => {
    scrollFunction();
};

const scrollFunction = () => {
    const bodyScrollTop = document.body.scrollTop;
    const documentScrollTop = document.documentElement.scrollTop;
    const navContainer = document.getElementById("navContainer");

    const shrinkBreakpoint = 20; //pixels
    const darkenBreakpoint = 500; //pixels

    if (bodyScrollTop > shrinkBreakpoint || documentScrollTop > shrinkBreakpoint) {
        navContainer.style.paddingTop = "5px";
        navContainer.style.backgroundColor = "rgba(0, 0, 0, 0.66)";

    } else {
        navContainer.style.paddingTop = "30px";
        navContainer.style.backgroundColor = "transparent ";
    }
}

const handleNavbarBtn = () => {

}

/*-------------- CAROUSEL SCRIPTS-----------------------*/
window.onload = handleCarousel = () => {
    let currentCarouselSlide = 0;

    //Show first slide
    const carouselSlides = document.getElementById("header-carousel").children;
    const carouselDots = document.getElementById("carousel-dots").children;

    const numberOfSlides = carouselSlides.length;
    console.log(numberOfSlides)

    carouselSlides[currentCarouselSlide].style.display = 'block'
    carouselDots[currentCarouselSlide].classList.add('active');

    handleCarousel.handleCarouselDirectionButton = (value) => {
        carouselSlides[currentCarouselSlide].style.display = 'none'
        carouselDots[currentCarouselSlide].classList.remove('active');

        let nextCarouselSlide = currentCarouselSlide + value;
        console.log(nextCarouselSlide)
        if (nextCarouselSlide > numberOfSlides - 1) {
            nextCarouselSlide = 0;
        } else if (nextCarouselSlide < 0) {
            nextCarouselSlide = numberOfSlides - 1;
        }

        carouselSlides[nextCarouselSlide].style.display = 'block'
        carouselDots[nextCarouselSlide].classList.add('active');
        currentCarouselSlide = nextCarouselSlide;
    }

    handleCarousel.handleCarouselhandleCarouselSlide = (slideNum) => {
        console.log(`handleCarouselSlide ${slideNum}`)
    }
};

const carouselDirectionButtonClick = (value) => {
    handleCarousel.handleCarouselDirectionButton(value);
}

const handleCarouselSlide = (slideNum) => {
    handleCarousel.handleCarouselSlide(slideNum);
}