
export const SearchBar = ({onSubmit}) => {
return(
    <header className="searchbar">
    <form className="form">
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>
  
      <input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={evt => onSubmit(evt.target.value)}
      />
    </form>
  </header>
)
}