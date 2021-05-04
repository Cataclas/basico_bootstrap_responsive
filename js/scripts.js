window.onscroll = function() {
    navbarCollapse();
    navActive()
};
// Collapse Navbar
function navbarCollapse() {
    if ($("#nav").offset().top > 200) {
        $("#nav").addClass("navbar-scrolled");
        $("#btn-top").addClass("visible").removeClass('visually-hidden');
    } else {
        $("#nav").removeClass("navbar-scrolled");
        $("#btn-top").addClass('visually-hidden').removeClass("visible");
    }
};

let sections = $('body>*');
let navLinks = $('nav .nav-link');

function navActive() {
    let position = window.scrollY;
    let heightWindow = window.innerHeight;
    let positionActiveSection = position + ((heightWindow / 5) * 3);
    let positionActiveAnimate = position + ((heightWindow / 3) * 2);


    sections.each(function() {
        let item = $(this);
        let itemId = `#${item.attr('id')}`;
        let itemPosition = item.offset().top
        let itemHeight = item.outerHeight(true)

        if (positionActiveSection >= itemPosition && positionActiveSection <= (itemPosition + itemHeight)) {
            let animate = item.find('.animate');
            let time = 0;

            navLinks.each(function() {
                let href = $(this).attr('href');
                if (href == itemId) {
                    $(this).addClass('active')
                } else {
                    $(this).removeClass('active')
                }
            })

            animate.each(function() {
                let a = $(this);
                let aPosition = a.offset().top
                let aHeight = a.outerHeight(true)

                if ((positionActiveAnimate) >= aPosition && (positionActiveAnimate) <= (aPosition + aHeight)) {
                    setTimeout(() => {
                        a.find('.zoom').addClass('zoomIn');
                        a.find('.top').addClass('toTop');
                        a.find('.left').addClass('toLeft');
                        a.find('.right').addClass('toRight');
                    }, time);

                    time += 500;
                }
            });
        }
    });
}