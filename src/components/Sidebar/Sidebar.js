import { slide as Menu } from 'react-burger-menu';
export default props => {
  return (
    <Menu>
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