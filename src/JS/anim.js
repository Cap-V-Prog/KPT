let lastScrollTop = 0;
let scrollThreshold = 45; // Adjust as needed
let scrollDownThreshold = window.innerHeight * 0.05; // 50% of the viewport height

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let scrollDifference = currentScroll - lastScrollTop;
    if (Math.abs(scrollDifference) > scrollThreshold) {
        if (scrollDifference > 0) {
            // Scroll down
            if (currentScroll > scrollDownThreshold) {
                // Activate animations only if scrolled beyond 50%
                document.getElementById("navbar").classList.add("hidden");
                document.querySelector(".big-title").style.fontSize = "120px";
                document.querySelector(".big-title").style.top = "35%";
                document.querySelector(".small-text").style.opacity = "1";
            }
        } else {
            // Scroll up
            if (currentScroll < scrollDownThreshold) {
                // Deactivate animations if scrolled back below 50%
                document.getElementById("navbar").classList.remove("hidden");
                document.querySelector(".big-title").style.fontSize = "72px";
                document.querySelector(".big-title").style.top = "40%";
                document.querySelector(".small-text").style.opacity = "0";
            }
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

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateMeter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.65 }); // Adjust the threshold as needed

    const riverCards = document.querySelectorAll('.river-card');
    riverCards.forEach(card => {
        observer.observe(card);
    });

    // Determine the maximum river length
    let maxLength = 0;
    riverCards.forEach(card => {
        const length = parseInt(card.querySelector('.meter-bar').getAttribute('data-length'));
        if (length > maxLength) {
            maxLength = length + 50; // Adjusted for better scale visualization
        }
    });

    function animateMeter(card) {
        const fill = card.querySelector('.meter-bar');
        const length = parseInt(fill.getAttribute('data-length'));
        const scale = createScale(length, maxLength);

        // Scale width relative to the longest river
        fill.style.width = (length / maxLength) * 100 + '%';
        card.querySelector('.meter').appendChild(scale);
    }

    function createScale(length, maxLength) {
        const scale = document.createElement('div');
        scale.className = 'meter-scale';

        // Create markers for every 50km with big markers at 100km
        for (let i = 0; i <= maxLength; i += 50) {
            const marker = document.createElement('div');
            const label = document.createElement('span');

            if (i % 100 === 0) { // Big markers for every 100km
                marker.className = 'km';
                label.innerText = i / 100; // Show kilometers
            } else if (i % 50 === 0) { // Small markers for every 50km
                marker.className = 'half-km';
            }

            scale.appendChild(marker);
            if (label.innerText) {
                marker.appendChild(label);
            }
        }
        return scale;
    }
});




