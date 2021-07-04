function Filter({onChange, filter}) {
  return (
    <div>
        <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </div>
  );
}

export default Filter;
