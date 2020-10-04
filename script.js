console.log('1--getElementsByTagName(h3)');
var elTag = document.getElementsByTagName('h3');
  for (var elem of elTag) {
  console.log(elem.textContent); 
console.log(`Width: ${elem.clientWidth}`);
console.log(`Height: ${elem.clientHeight}`)
}
console.log('---------------------------');

console.log('2--getElementsByClassName (p)');
var elClassName = document.getElementsByClassName('reviews__p-italy');
for (var i = 0; i<elClassName.length; i++) {
console.log(elClassName[i].textContent);
console.log(getComputedStyle(elClassName[i]).fontSize);
}
 console.log('---------------------------'); 


console.log("3--getElementsByName (textarea)");
var elByName=document.getElementsByName('message');
console.log(`tagName: ${elByName[0].tagName}`);
var placeholder = elByName[0].getAttribute("placeholder");
console.log(`Text in placeholder: ${placeholder}`);
console.log("Form width is: " + window.getComputedStyle(elByName[0]).width);
console.log("Form height is: " + window.getComputedStyle(elByName[0]).height);
console.log('---------------------------');


console.log("4--getElementById (div)");
var elementId=document.getElementById('dignity_id');
console.log(elementId.textContent);
console.log(elementId.clientWidth);
console.log(elementId.clientHeight);
console.log('---------------------------');


console.log('5--querySelectorAll (li)');
 var elements = document.querySelectorAll('.footer__content--contact-direct-list>li');

  for (var elem of elements) {
console.log(`Текст Li: ${elem.textContent}`);
console.log(elem.clientWidth);
console.log(elem.clientHeight);
}
console.log('---------------------------');


console.log("6--querySelector (button)");
var el = document.querySelector('.footer__content--form-button');
console.log(`Text button: ${el.innerHTML}`);
console.log(`Width: ${el.clientWidth}`);
console.log(`Height: ${el.clientHeight}`);
console.log('---------------------------');

console.log("7--getComputedStyle,querySelector (div)");
var headerWidth = window.getComputedStyle(document.querySelector(".header")).width;
var headerHeight = window.getComputedStyle(document.querySelector(".header")).height;
console.log(`Header has width: ${headerWidth}, height ${headerHeight}`);
console.log('---------------------------');


console.log("8--getElementsByClassName, fontSize (image)");
var icons = document.getElementsByClassName("footer__content--contact-direct-list-item-icon");

 for (var i = 0; i < icons.length; i++) {
 console.log( "Icons fontSize: " + window.getComputedStyle(icons[i]).fontSize);
}
console.log('---------------------------');

console.log("9--getElementsByClassName, naturalWidth (image)");
var img = document.getElementsByClassName("footer__content--contact-direct-list-item-icon");

 for (var i = 0; i < img.length; i++) {
 console.log(" Width - " + img[i].naturalWidth, "Height - " + img[i].naturalHeight);
}
console.log('---------------------------');


console.log("10--getElementsByTagName (form)");
var form = document.getElementsByTagName("form");
var formAction = form[0].getAttribute("action");
console.log("Form width is: " + window.getComputedStyle(form[0]).width);
console.log("Form height is: " + window.getComputedStyle(form[0]).height);
console.log("Form action attribute is: " + formAction);
console.log('---------------------------');


console.log("11--querySelector (data-auto)");
var dataAttr = document.querySelector('[data-auto="title_header"]');
var dataAttrWidth = dataAttr.clientWidth;
var dataAttrHeight = dataAttr.clientHeight;
console.log("Element width:", dataAttrWidth);
console.log("Element height:", dataAttrHeight);
console.log('---------------------------');


console.log("12--querySelector (type=email) ");
var email = document.querySelector('[type="email"]');
console.log("Email text: " + email.innerHTML);
console.log("Email width: " + window.getComputedStyle(email).width);
console.log("Email height: " + window.getComputedStyle(email).height);
console.log('---------------------------');


console.log("13--querySelector (src=icon)");
var elemsSrc = document.querySelectorAll('[src*="icon"]');
for (var elems of elemsSrc) {   
    console.log("Icon width: " + window.getComputedStyle(elems).fontSize);
    console.log("Icon height: " + window.getComputedStyle(elems).lineHeight);
}
console.log('---------------------------');


console.log("14--getElementsByTagName (body)");
var elemBody=document.getElementsByTagName("body");
var bodyWidth = window.getComputedStyle(elemBody[0]).width;
var bodyHeight = window.getComputedStyle(elemBody[0]).height;
console.log("bodyWidth",bodyWidth);
console.log("bodyHeight",bodyHeight);
console.log('---------------------------');


console.log("15--getElementsByClassName (footer)");
var elemFooter = document.getElementsByClassName("footer");
var footerWidth = window.getComputedStyle(elemFooter[0]).width;
var footerHeight = window.getComputedStyle(elemFooter[0]).height;
console.log("footerWidth",footerWidth);
console.log("footerHeight",footerHeight);
console.log('---------------------------');
