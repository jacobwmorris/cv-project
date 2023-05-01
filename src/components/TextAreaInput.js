import "../style/TextAreaInput.css"

function TextAreaInput({labelText, name, defaultVal}) {
  return (
    <div>
      <label>
        <div>{labelText}</div>
        <textarea name={name} defaultValue={defaultVal} rows="4" className="TextAreaInput-textarea"></textarea>
      </label>
    </div>
  )
}

export default TextAreaInput
