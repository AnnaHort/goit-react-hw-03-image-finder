
export const SearchBar = ({onSubmit}) => {

 const handleSubmit = (evt) => {
    evt.preventDefault();
    const inputValue = evt.target.querySelector('.input').value;
    if (inputValue === '' || inputValue === null || inputValue === undefined) {
      alert('You didnt write any word!!');
      return
    }
    onSubmit(inputValue);
    evt.target.reset();
  };

return(
    <header className="searchbar">
    <form className="form" onSubmit={handleSubmit}>
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>
  
      <input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
)
}