import "../style/BasicInput.css"

function BasicInput({labelText, name, type, defaultVal}) {
  return (
    <div className="BasicInput-container">
      <label>{labelText}
        <input type={type} name={name} defaultValue={defaultVal} className="BasicInput-input"/>
      </label>
    </div>
  )
}

export default BasicInput
