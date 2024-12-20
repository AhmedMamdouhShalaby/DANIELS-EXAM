new WOW().init();
var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();
var typed = new Typed('.element', {
    strings: ["", "Ahmed Mamdouh", "Full Stack Developer.", "Web Designer."],
    typeSpeed: 30,
    loop: true,
});


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './js/particles.js-master/demo/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const navCollapsing = document.getElementById('navbarSupportedContent')
const titles = document.querySelectorAll('.title h2');
function checkMe() {
    setTimeout(() => {

        if (navCollapsing.classList.contains('show')) {
            console.log('inside nav true', navCollapsing, titles);

            titles.forEach(title => title.classList.remove('position-relative'))
        } else {
            console.log('inside nav false', navCollapsing, titles);

            titles.forEach(title => title.classList.add('position-relative'))
        }
    }, 500)
}