import SearchBox from "./SearchBox";

function Header() {
  return (
    <header className="header">
      <h1 className="header__heading">IP Address Tracker</h1>
      <SearchBox />
    </header>
  );
}

export default Header;
