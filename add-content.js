var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Goooooooooood evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoooooooooooon!';
} else if (hourNow > 0) {
    greeting = 'Good morning :)';
} else {
    greeting = 'Welcome home!';
}

document.write('<h3>' + greeting + '</h3>');
