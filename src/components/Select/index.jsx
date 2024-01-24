
const Select = ({content, itens}) => (
  <select>
    <option disabled>{content}</option>
    {itens.map((index) => (
      <option value="valor3" key={index}>Valor 3</option>
    ))}
  </select>
)

export default Select;