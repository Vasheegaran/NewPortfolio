// Wait for DOM to load
$(document).ready(function() {
    // Initialize Typed.js for typing animation
    var typed = new Typed('.typing', {
        strings: ["Software Engineer", "Web Developer", "Problem Solver", "Tech Enthusiast"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });
    
    var typed2 = new Typed('.typing-2', {
        strings: ["Software Engineer", "Web Developer", "Problem Solver", "Tech Enthusiast"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });
    
    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#2563eb"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#2563eb",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
    
    // Mobile menu toggle
    $('.menu-btn.mobile').click(function() {
        $('.menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });
    
    // Close mobile menu when clicking on a menu item
    $('.menu li a').click(function() {
        $('.menu').removeClass('active');
        $('.menu-btn.mobile i').removeClass('fa-times').addClass('fa-bars');
    });
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 800, 'easeInOutCubic');
            }
        }
    });
    
    // Sticky navbar on scroll
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        
        // Scroll up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
        
        // Animate elements on scroll
        animateOnScroll();
    });
    
    // Scroll up button click
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    
    // Dark mode toggle
    $('#darkToggle').click(function() {
        $('body').toggleClass('dark');
        $(this).find('i').toggleClass('fa-moon fa-sun');
        
        // Save preference to localStorage
        if ($('body').hasClass('dark')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        $('body').addClass('dark');
        $('#darkToggle').find('i').removeClass('fa-moon').addClass('fa-sun');
    }
    
    // Animate elements on scroll
    function animateOnScroll() {
        var elements = $('.animated');
        var windowHeight = $(window).height();
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + windowHeight;
        
        $.each(elements, function() {
            var element = $(this);
            var elementTop = element.offset().top;
            var elementBottom = elementTop + element.outerHeight();
            
            // Check if element is in viewport
            if (elementBottom >= windowTop && elementTop <= windowBottom) {
                element.addClass('visible');
            }
        });
    }
    
    // Initialize scroll animations
    animateOnScroll();
    
    // Animate skill bars on scroll
    function animateSkillBars() {
        $('.skillbar').each(function() {
            var skillbar = $(this);
            var percent = skillbar.data('percent');
            
            if (isElementInViewport(skillbar[0])) {
                skillbar.find('.skillbar-bar').css('width', percent + '%');
            }
        });
    }
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Animate skill bars on scroll
    $(window).scroll(function() {
        animateSkillBars();
    });
    
    // Initialize skill bars animation
    animateSkillBars();
    
    // Animate stats counter
    function animateStats() {
        $('.stat-number').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            
            if (isElementInViewport($this[0]) && !$this.hasClass('counted')) {
                $this.addClass('counted');
                
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });
    }
    
    // Animate stats on scroll
    $(window).scroll(function() {
        animateStats();
    });
    
    // Initialize stats animation
    animateStats();
    
    // Form submission
    $('.contact-form').submit(function(e) {
        e.preventDefault();
        
        // Get form data
        var name = $(this).find('input[type="text"]').val();
        var email = $(this).find('input[type="email"]').val();
        var subject = $(this).find('input[placeholder="Subject"]').val();
        var message = $(this).find('textarea').val();
        
        // Simple validation
        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        $(this).trigger('reset');
    });
    
    // Add hover effect to cards
    $('.card, .cert-card, .proj-card').hover(
        function() {
            $(this).addClass('hover');
        },
        function() {
            $(this).removeClass('hover');
        }
    );
    
    // Add loading animation
    $(window).on('load', function() {
        $('.loader').fadeOut();
    });
    
    // Add custom easing for animations
    $.easing.easeInOutCubic = function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    
    // Add parallax effect to background shapes
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        $('.shape-1').css('transform', 'translateY(' + (scrolled * 0.5) + 'px) rotate(' + (scrolled * 0.1) + 'deg)');
        $('.shape-2').css('transform', 'translateY(' + (scrolled * 0.3) + 'px) rotate(' + (scrolled * 0.05) + 'deg)');
        $('.shape-3').css('transform', 'translateY(' + (scrolled * 0.7) + 'px) rotate(' + (scrolled * 0.15) + 'deg)');
        $('.shape-4').css('transform', 'translateY(' + (scrolled * 0.4) + 'px) rotate(' + (scrolled * 0.08) + 'deg)');
    });
    
    // Add active class to menu items based on scroll position
    function updateActiveMenu() {
        var scrollPos = $(document).scrollTop();
        $('.menu li a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos + 100 && refElement.position().top + refElement.height() > scrollPos) {
                $('.menu li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }
    
    $(window).scroll(function() {
        updateActiveMenu();
    });
    
    // Initialize active menu
    updateActiveMenu();
});