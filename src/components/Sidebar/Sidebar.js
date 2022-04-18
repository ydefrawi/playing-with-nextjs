import { push as Menu } from 'react-burger-menu';
import React, {useState, useEffect} from 'react'
export default props => {
    const [open, setOpen]=useState(true)

useEffect(() => {
 setOpen(true)

})

  return (
    <Menu pageWrapId={props.pageWrapId} overlayClassName={'main-background'} isOpen={open}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};