// console.dir(document);
// console.log(document.);

// can change title of page with 
// console.log(document.title);
// document.title = 123; changes name of page title, to whatever is after =
// console.log(document.all); prints a html collection in the DOM, console.

// able to access any sort of item on a browser screen using the DOM, typing in console.log(document.all); f12 to bring up console, hover over any element to highlight it on the screen.

// document.all[10].textContent = 'Hello'; not correct way to do it.
// console.log(document.forms); grabs all forms on the page.

// Selectors

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// innerHTML puts an element inside the DOM element.
// textContent, innerText, innerHTML all important

// headerTitle.style.borderBottom = ''; borderBottom is camelCase, notice different than standard CSS.

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// an html collection and each item has an index.
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// gives error below
// items.style.backgroundColor = '#f4f4f4';
// for items... you'd think you could grab all the items but you cannot with the DOM. you actually have to loop through the collection to assign all of them what you want them to have.
for(i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

// // ELEMENTS BY TAG NAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// an html collection and each item has an index.
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // gives error below
// // items.style.backgroundColor = '#f4f4f4';
// // for items... you'd think you could grab all the items but you cannot with the DOM. you actually have to loop through the collection to assign all of them what you want them to have.
// for(i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERY SELECTOR // QUERY SELECTOR //
// WORKS JUST LIKE JQUERY
// WORKS FOR ONE ITEM, AND FOR MULTIPLE, QUERY SELECTOR ALL

// var header = document.querySelector('#main-header')
// can use tags, list item, document.querySelector replaces the jQuery $('').
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';
// // even though there are 2 inputs, querySelector grabs the first one it finds on the page by default.

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// // CSS Pseudo Selectors ;;

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//  QUERY SELECTOR ALL //

let titles = document.querySelectorAll('.title');
console.log(titles);
// you can run array functions on a node list, which explains the 'All' in query Selector All.

var odd = document.querySelectorAll('li:nth-child(odd)');

var even = document.querySelectorAll('li:nth-child(even)');

for (var i = ; i < odd.length; i++){
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}