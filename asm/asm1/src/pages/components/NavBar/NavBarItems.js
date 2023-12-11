import NavBarItem from './NavBarItem';
import './NavBarItems.css';

const NavBarItems = ({ navBarData }) => {
  return (
    <ul className="navbar_items">
      {navBarData.map((item, index) => (
        <NavBarItem
          key={index}
          type={item.type}
          icon={item.icon}
          active={item.active}
        />
      ))}
    </ul>
  );
};

export default NavBarItems;
