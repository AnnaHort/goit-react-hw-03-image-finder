import { ButtonStyled, FormStyled, InputStyled, SectionContainerStyled } from "./SearchBar.styled";

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
    <SectionContainerStyled className="searchbar">
    <FormStyled className="form" onSubmit={handleSubmit}>
      <ButtonStyled type="submit" className="button">
        <span className="button-label">Search</span>
      </ButtonStyled>
  
      <InputStyled
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </FormStyled>
  </SectionContainerStyled>
)
}