// Scroll Progress Bar
const scrollProgressBar = document.getElementById('scrollProgressBar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    scrollProgressBar.style.width = scrollPercentage + '%';
});

const boxes = document.querySelectorAll(".box");
const fourth = document.querySelector(".fourth");


// track scroll diraction and position for the fourth section
let lastScrollTop = 0;
let fourthActivated = false;

// observer for the fourth section background with scroll direction awareness
const myobs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollingDown = currentScrollTop > lastScrollTop;

        if (entry.isIntersecting) {

            fourth.classList.add('active');
            fourthActivated = true;
        } else {
            if (!scrollingDown && fourthActivated) {
                fourth.classList.remove('active');
                fourthActivated = false;
            }
        }

        lastScrollTop = currentScrollTop;
    })

}, {
    threshold: 0.1
})

if (fourth) {
    myobs.observe(fourth);

    // Scroll listener for the line animation
    window.addEventListener('scroll', () => {
        const rect = fourth.getBoundingClientRect();
        const windowHeight = window.innerHeight;


        if (rect.top < windowHeight && rect.bottom > 0) {

            const triggerPoint = windowHeight * 0.8; 
            const progress = (triggerPoint - rect.top) / rect.height;

            // Clamp between 0 and 0.8 (80%)
            let height = Math.min(Math.max(progress, 0), 0.8) * 100;

            console.log('Scroll Debug:', {
                top: rect.top,
                height: rect.height,
                progress: progress,
                finalHeight: height
            });

            fourth.style.setProperty('--line-height', `${height}%`);
        }
    });
}

// Observer for individual boxes
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    })

}, {
    threshold: 0.5
})

boxes.forEach(box => {
    observer.observe(box);
});


//js for animating section2//

const second = document.querySelector(".second");
const wrapper = document.querySelector(".wrapper");

window.addEventListener('scroll', () => {
    const rect = fourth.getBoundingClientRect();
    const windowHeight = window.innerHeight;


    if (rect.top < windowHeight && rect.bottom > 0) {
        const triggerPoint = windowHeight * 0.8; 
        const progress = (triggerPoint - rect.top) / rect.height;
        let height = Math.min(Math.max(progress, 0), 0.8) * 100;

        console.log('Scroll Debug:', {
            top: rect.top,
            height: rect.height,
            progress: progress,
            finalHeight: height
        });

    }
}
)


