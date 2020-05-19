// Макаров Анатолий Александрович
const playSlider = ()=>{
    const portfolioItem = document.querySelectorAll(".portfolio-item"),
    dot = document.querySelectorAll(".dot"),
    portfolio = document.getElementById("portfolio");
    
    const addClass = (item, index, classStyle) => {
    item[index].classList.add(classStyle);
    };
    const removeClass = (item, index, classStyle) => {
    item[index].classList.remove(classStyle);
    };
    
    let count = 0;
    
    function animateSlide(){
        removeClass(portfolioItem,count, "portfolio-item-active");
        removeClass(dot, count, "dot-active");
        count++;
        if (count === portfolioItem.length) count = 0;
        addClass(portfolioItem,count, "portfolio-item-active");
        addClass(dot,count, "dot-active");
    };

    function animateSlideNazad(){
        removeClass(portfolioItem,count, "portfolio-item-active");
        removeClass(dot,count, "dot-active");
        count--;
        if (count == -1) count = 5;
        addClass(portfolioItem,count, "portfolio-item-active");
        addClass(dot,count, "dot-active");
    }

    portfolio.addEventListener("click", (event) =>{
        event.preventDefault();
        const target = event.target;
        if (target.matches(".next")) animateSlide();
        if (target.matches(".prev")) animateSlideNazad();
    })



    let idAnimate = setInterval(animateSlide, 3000);
}

playSlider();