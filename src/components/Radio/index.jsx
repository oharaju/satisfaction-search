
const Radio = ({itens, key}) => (
  <div key={key}>
    {itens.map(({value, description}, index) => (
      <div key={`${key}-${index}`}>
        <input type="radio" name="radioSelect" value={value} />
        <label>{description}</label>
      </div>
    ))}
  </div>
)

export default Radio;