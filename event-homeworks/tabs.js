function asTabs(node) {
  // Create new nav element, where all the buttons can be in (ul for the listing)
  let tabNav = document.createElement('nav');
  let tabList = document.createElement('ul');

  tabList.style.padding = '0';

  // Cn choose with just the div, since there are no other divs in the html file. I had the understanding that there would be no editing the html, so that is why I didn't use Id's or ClassNames
  let tabs = document.querySelectorAll('div')

  // Array for the buttons that will be created
  let buttons = [];

  // Go through all the data-tabnames (divs)
  tabs.forEach( tab => {
    // For each data-tabname (div), create a li and inside that an a
    let item = document.createElement('li');
    let button = document.createElement('a');

    // Just playing around with JavaScript styling, obviously these would be best within the css.
    item.style.border = 'solid';
    item.style.listStyle = 'none';
    item.style.display = 'inline';
    item.style.margin = '0 10px 0 0'

    // adding enough padding for the button (a href) so that it will fit the item, so you can click anywhere on the item.
    button.style.textDecoration = 'none';
    button.style.padding = '12px 20px';

    button.href = '#';

    // Add button to the array
    buttons.push(button);

    // Get the text content of the tab
    button.textContent = tab.getAttribute('data-tabname');

    item.appendChild(button)
    tabList.appendChild(item);

  });

  // Hard-coded, but this way you can easily hide all except the first tab (div)
  for (let i = 1; i < tabs.length; i++){
    tabs[i].style.display = 'none';
  }

  // Go through all the buttons in the array and add a click listener, which then shows the selected tab text
  buttons.forEach(function(button, nth){
    button.addEventListener('click', function(event) {
      for (let i = 0; i < tabs.length; i++){
        let tab = tabs[i];
        if(i === nth){
          tab.style.display = 'inline-block';
        }else {
          tab.style.display = 'none';

        }
      }

    })
  })

  tabNav.appendChild(tabList);
  document.body.insertBefore(tabNav, node);

}

asTabs(document.querySelector('tab-panel'));