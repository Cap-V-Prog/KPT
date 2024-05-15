let lastScrollTop = 0;
let scrollThreshold = 50; // Adjust as needed

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let scrollDifference = currentScroll - lastScrollTop;
    if (Math.abs(scrollDifference) > scrollThreshold) {
        if (scrollDifference > 0) {
            // Scroll down
            document.getElementById("navbar").classList.add("hidden");
            document.querySelector(".big-title").style.fontSize = "96px";
            document.querySelector(".big-title").style.top = "30%";
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