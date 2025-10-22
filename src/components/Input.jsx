export default function InputField({
  labelName,
  type = "text",
  inputName,
  value,
  onChange,
  textArea = false,
}) {
  return (
    <>
      {textArea ? (
        <div>
          <label htmlFor="">{labelName} </label>
          <textarea
            type={type}
            name={inputName}
            value={value}
            onChange={onChange}
            rows="5"
            cols="33"
            required
          ></textarea>
        </div>
      ) : (
        <div>
          <label htmlFor="">{labelName} </label>
          <input
            type={type}
            name={inputName}
            value={value}
            onChange={onChange}
            required
          />
        </div>
      )}
    </>
  );
}
