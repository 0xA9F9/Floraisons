document.addEventListener("DOMContentLoaded", function() {
        var swiper = new Swiper(".swiper-container", {
            slidesPerView: 3, // default to 3 slides per view
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1, // show 1 slide per view on small screens
                    spaceBetween: 20
                },
                // when window width is >= 840px
                840: {
                    slidesPerView: 2, // show 2 slides per view on medium screens
                    spaceBetween: 30
                },
                // when window width is >= 1000px
                1000: {
                    slidesPerView: 3, // show 3 slides per view on large screens
                    spaceBetween: 40
                }
            }
        });
    });