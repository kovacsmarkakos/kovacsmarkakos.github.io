let logo = document.querySelector('#logo');

var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 700
});

tl
  .add({
    targets: '.path',
    opacity: [0, 1],
    translateY: ["5rem", "0rem"],
    scale: [.75, 1],
    delay: anime.stagger(80, { start: 800 }),
    direction: 'forwards',
  })
  .add({
    targets: '#hammer',
    rotate: 360,
    duration: 1300,
    autoplay: true,
    easing: 'easeOutBack',
  }, '-=850');


let hammerAnimation = anime({
  targets: '#hammer',
  rotate: 360,
  duration: 800,
  autoplay: false,
  easing: 'easeOutBack',
});

logo.addEventListener('click', function () { hammerAnimation.play(); });