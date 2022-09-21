
    let square = document.querySelector('.formBlue')
    let square1 = document.querySelector('.blue1');
    let square2 = document.querySelector('.blue2');
    let square3 = document.querySelector('.blue3');
    let square4 = document.querySelector('.blue4');

(function () {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entry.target.classList.add('square-animation');
            }
        });
    });

    observer.observe(square);
    observer.observe(square1);
    observer.observe(square2);
    observer.observe(square3);
    observer.observe(square4);
})();

square.addEventListener("mouseover", mouseOverHanderl);
function mouseOverHanderl() {
    square.style.boxShadow = "12px 12px 2px 1px rgba(10, 100, 25, 0.3)"
}

square.addEventListener("mouseout", mouseOutHanderl);
function mouseOutHanderl() {
    square.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, .2)";
    }