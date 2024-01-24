
const Checkbox = ({itens, key}) => (
  <>
    {itens.map(({value, description}, index) => (
      <div key={`${key}-${index}`}>
        <input type="checkbox" name="checkSelect" value={value} />
        <label>{description}</label>
      </div>
    ))}
  </>
)

export default Checkbox;