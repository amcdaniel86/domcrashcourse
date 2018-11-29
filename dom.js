// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// above local host, loop back address
// console.log(document.URL);
// whole URL above
// console.log(document.title);
// document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// outputting whatever is in head to the console.

// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// SELECTORS // SELECTORS //

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //

// BY CLASS //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
  // odd[i].style.backgroundColor = '#f4f4f4';
  // even[i].style.backgroundColor = '#ccc';
// }

//   TRAVERSING THE DOM //

// parent nodes, child nodes, and siblings.

// h2 parent is div, h2 is child of div. form is sibling of h2 because its also within the parent div.

let itemList = document.querySelector('#items');
// ul id items above, look at parentNode property
// parentNode
// console.log(itemList.parentNode);
// this case the DOM gives us the div #main because it is the parent of the id items id.
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
//pseudo selector changes the div's background color.

// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// this case the DOM gives us the div #main because it is the parent of the id items id.
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);
// usually parentNode and parentElement can be used interchangeably.

// childNodes
// console.log(itemList.childNodes);
// produces a nodeList, an array of all the elements.
// the text node. represents white space, a line break etc.
// better to use CHILDRENNODES

// console.log(itemList.children); 
// produces a html collection, no text line breaks.
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
// console.log(itemList.firstChild);
// like childNodes. not used much.

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemList.lastChild);
// like childNodes. not used much.

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// SIBLINGS //
// nextSibling
// console.log(itemList.nextSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// itemList.previousElementSibling.style.color = 'green';

// CREATING ELEMENTS INSERTING THEM //
// createElement
// Create a div
var newDiv = document.createElement('div');

newDiv.className = 'hello';

console.log(newDiv);