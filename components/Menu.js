// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const header = document.querySelector('.header')
 
function menuMaker(arr){

  // ! creating the elements
  const menu = document.createElement('div'); //* creating a menu div
    menu.classList.add('menu'); //* giving the menu div a class of menu
  
    const orderList = document.createElement('ul'); //*creating a list for our items to go into
    ////orderList.classList.add('this-here') //*this is just a test
    // ! in order to have the amount of list items needed with incoming data, we need a forEach 
  arr.forEach(element => { 
    const item = document.createElement('li'); //* this is actually CREATING the list tag and calling each one an "item" 
    item.textContent = element; //* filling the item that we created with text content from incoming array element
    
    orderList.appendChild(item); //* now appending that item to our order list which we created <ul>
  });
  
  //! selecting a place in the HTML to insert our "menu" we create, and calling it "hamburger" 
  const hamburger = document.querySelector('.menu-button');
  //? i dont think it is necessary to have it here (positionally) - would probably be better to have it at the top, right below the function
  
  // ! need to create an event listener for the user to do something to show our "menu"
  hamburger.addEventListener('click',  (evt) => {   //* here is our event listener applied to our hamburger item 
    menu.classList.toggle('menu--open'); //! here we are toggling our "menu" by applying (or unapplying) the styling called 'menu--open' in our CSS (or .less in this case)
    evt.stopPropagation(); //* stopping propogation in order to be able to click out of the "menu" for it to hide again
  })
  //* not necessary, but in order to click out of the menu to hide it again, i did the below
  document.addEventListener('click', evt => {  //* click  anywhere
    menu.classList.remove('menu--open') //* remove menu--open class from menu in order to hide it from view
  })  
  
  menu.appendChild(orderList); //! putting our "orderList" <ul> (our items in the list [<li>] are already in there) into our "menu"
  hamburger.appendChild(menu) // ! append "menu" to our hamburger place that we called which is connected to the "div.menu-button"
  //console.log(menu)
  return menu; //! always remember to return the top order item being made here ("menu" in this case)
}

//* const yes = menuMaker(menuItems)
//* header.appendChild(yes)

header.appendChild(menuMaker(menuItems))


//console.log(menuItems)



// Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

// <div class="menu">
//   <ul>
//     {each menu item as an <li>}
//   </ul>
// </div>

// The 'menuMaker' takes an array of menu items as its only argument.


  // ! Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  // Add those items to the <ul>
  // ! Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
  //! Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  //! Step 5: Don't forget to return your div.menu.
  //! Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.