

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

   
    function fadeIn(element, duration = 500) {
        element.style.opacity = 0;
        element.classList.remove("d-none");
        let last = +new Date();
        const tick = function() {
            element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
            last = +new Date();

            if (+element.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    }

   
    function fadeOut(element, duration = 500) {
        element.style.opacity = 1;
        let last = +new Date();
        const tick = function() {
            element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
            last = +new Date();

            if (+element.style.opacity > 0) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            } else {
                element.classList.add("d-none");
            }
        };
        tick();
    }

    
    form.addEventListener("submit", function(e) {
        e.preventDefault(); 

       
        fadeIn(successMessage);

        
        setTimeout(() => {
            fadeOut(successMessage);
        }, 5000);

       
        form.reset();
    });
});
