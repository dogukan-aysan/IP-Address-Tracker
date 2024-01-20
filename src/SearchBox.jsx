function SearchBox() {
  return (
    <div className="searchbox">
      <input
        className="searchbox__input"
        placeholder="Search for any IP address or domain"
      />
      <div className="searchbox__icon-container">
        <img className="searchbox__icon" src="images/icon-arrow.svg" />
      </div>
    </div>
  );
}

export default SearchBox;
