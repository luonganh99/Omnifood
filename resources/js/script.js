const waypoint = new Waypoint({
    element: document.querySelector('.js--section-features'),
    handler: function (direction) {
        if (direction == 'down') {
            document.querySelector('nav').classList.add('sticky');
        } else {
            document.querySelector('nav').classList.remove('sticky');
        }
    },
    offset: '60px',
});

const waypointGrid = new Waypoint({
    element: document.querySelector('.js--wp-grid'),
    handler: function () {
        document.querySelector('.js--wp-grid').classList.add('animated', 'fadeIn');
    },
    offset: '50%',
});

const waypointImage = new Waypoint({
    element: document.querySelector('.js--wp-image-step'),
    handler: function () {
        document.querySelector('.js--wp-image-step').classList.add('animated', 'fadeInUp');
    },
    offset: '50%',
});

const waypointStepList = new Waypoint({
    element: document.querySelector('.js--wp-step-list'),
    handler: function () {
        document.querySelector('.js--wp-step-list').classList.add('animated', 'bounceInRight');
    },
    offset: '50%',
});

const waypointCities = new Waypoint({
    element: document.querySelector('.js--wp-cities'),
    handler: function () {
        document.querySelector('.js--wp-cities').classList.add('animated', 'fadeIn');
    },
    offset: '50%',
});

const waypointPlan = new Waypoint({
    element: document.querySelector('.js--wp-plan'),
    handler: function () {
        document.querySelector('.js--wp-plan').classList.add('animated', 'pulse');
    },
    offset: '50%',
});

document.addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('show');

    const hamburgerIcon = document.querySelector('.js--nav-icon');
    if (hamburgerIcon.classList.contains('ion-navicon-round')) {
        hamburgerIcon.classList.add('ion-close-round');
        hamburgerIcon.classList.remove('ion-navicon-round');
    } else {
        hamburgerIcon.classList.remove('ion-close-round');
        hamburgerIcon.classList.add('ion-navicon-round');
    }
});
