/*
 I am trying to open a react Component on a button click. Let's say I have two components that I wanted to load on a page upon button click - how can I get it done with this code:

 Let's say I have two components
<ComponentOne />
<ComponentTwo />

//menuComponent.js
const menu = [
  {
    name: 'Home',
    icon: HomeIcon,
    link: function () {
      // How can I open <ComponentOne />;
    },
  },
  {
    name: 'Growth Tools',
    icon: ChatBubbleLeftIcon,
    current: false,
    link: function () {
      // 'How can I open <ComponentTwo />'
    },
  },
];
export {menu}

By looping through the list...

// SidebarComponent.js
import {menu} from ../menu.js
menu.map((item) => (
  <button
  key={item.name}
  onClick={item.link}
>
{item.name}
</button>
))





*/
