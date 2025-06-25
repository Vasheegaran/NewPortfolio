$(document).ready(function () {
    // Sticky navbar and scroll up button
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll up
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });

    // Smooth scroll menu
    $('.navbar .menu li a').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var offset = $(target).offset().top - 55;
        $('html, body').animate({ scrollTop: offset }, 400);
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // Hamburger menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animations
    var typed1 = new Typed(".typing", {
        strings: ["Software Developer", "Web Designer", "Tech Enthusiast", "Lifelong Learner"],
        typeSpeed: 90,
        backSpeed: 60,
        loop: true
    });
    var typed2 = new Typed(".typing-2", {
        strings: ["I'm passionate about coding.", "I'm a creative problem solver.", "I'm a lifelong learner."],
        typeSpeed: 90,
        backSpeed: 60,
        loop: true
    });
});