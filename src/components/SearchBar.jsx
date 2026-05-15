function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div>
      <label htmlFor="search">Search Products: </label>

      <input
        id="search"
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;