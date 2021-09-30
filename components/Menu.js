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
 
  // Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as an <li>}
  //   </ul>
  // </div>

  // The 'menuMaker' takes an array of menu items as its only argument.
  function menuMaker(arr){
    // ! creating the placement
    
    const menu = document.createElement('div');
      menu.classList.add('menu');
    const orderList = document.createElement('ul');
      orderList.classList.add('this-here')
    
    arr.forEach(element => {
      const item = document.createElement('li')
      item.textContent = element;
      orderList.appendChild(item);
    });
    
    const hamburger = document.querySelector('.menu-button');
    
    hamburger.addEventListener('click',  (evt) => {
      menu.classList.toggle('menu--open');
      menu.appendChild(orderList);
      evt.stopPropagation();
    })
    document.addEventListener('click', evt => {
      menu.classList.remove('menu--open')
    })
    hamburger.appendChild(menu)
    //console.log(menu)
    return menu;
  }
  
  const yes = menuMaker(menuItems)
  header.appendChild(yes)
    
    
  
  //console.log(menuItems)



  // ! Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  // Add those items to the <ul>
  // ! Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
  //! Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  //! Step 5: Don't forget to return your div.menu.
  //! Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.