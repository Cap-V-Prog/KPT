let lastScrollTop = 0;
let scrollThreshold = 45; // Adjust as needed

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let scrollDifference = currentScroll - lastScrollTop;
    if (Math.abs(scrollDifference) > scrollThreshold) {
        if (scrollDifference > 0) {
            // Scroll down
            document.getElementById("navbar").classList.add("hidden");
            document.querySelector(".big-title").style.fontSize = "120px";
            document.querySelector(".big-title").style.top = "35%";
            document.querySelector(".small-text").style.opacity = "1";
        } else {
            // Scroll up
            document.getElementById("navbar").classList.remove("hidden");
            document.querySelector(".big-title").style.fontSize = "72px";
            document.querySelector(".big-title").style.top = "40%";
            document.querySelector(".small-text").style.opacity = "0";
        }
        lastScrollTop = currentScroll;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
