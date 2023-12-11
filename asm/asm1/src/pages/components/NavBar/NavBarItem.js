const NavBarItem = ({ type, icon, active }) => {
  return (
    <li>
      {/* Check the 'active' */}
      <button className={`btn-item ${active ? 'active' : ''}`}>
        {/* Use FA icon following icon-list.html */}
        <i className={`fa ${icon}`}></i>
        <span>{type}</span>
      </button>
    </li>
  );
};

export default NavBarItem;
