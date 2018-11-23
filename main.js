// PANNELS
var pannelTest = new TimelineMax();

pannelTest
.from('.leftlargepannel', 0.7, {y: -700})
.from('.rightlargepannel', 0.7, {y: 1400})
.from('.rightsmallpannel', 0.7, {y: -600})
.from('.text', 0.7, {y: 1400});


// CARDS

var controller = new ScrollMagic.Controller();

var cardAnimation = new TimelineMax();
cardAnimation
.from("#card1", 0.4, {ease:Power0.easeIn, x: -100, opacity:0})
.from("#card2", 0.4, {ease:Power0.easeIn, x: -100, opacity:0}, "-=0.05")
.from("#card3", 0.4, {ease:Power0.easeIn, x: -100, opacity:0}, "-=0.05")

var card = new ScrollMagic.Scene({
    triggerElement: '.card',
    reverse: true
})

.addTo(controller)

// .addIndicators({
//   colorStart: 'green'
//  })

.setTween(cardAnimation)


// DABOSAURE POWAAA

var dabosaureAnimation = new TimelineMax();
dabosaureAnimation
.from(".boldTitle", 0.4, {ease:Power0.easeIn, y: 100, opacity:0})
.from(".text3", 0.4, {ease:Power0.easeIn, x: -100, opacity:0}, "-=0.05")
.from(".inner-img", 0.4, {ease:Power0.easeIn, y: -100, x: -100, width: 0, height: 0, opacity:0}, "-=0.05")
.from(".image-dab", 0.4, {ease:Power0.easeIn, x: -100, opacity:0}, "-=0.05");

var dino = new ScrollMagic.Scene({
    triggerElement: '.cadre',
    reverse: true
})

.addTo(controller)

// .addIndicators({
//   colorStart: 'purple'
//  })

.setTween(dabosaureAnimation)




