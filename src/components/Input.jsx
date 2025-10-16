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
        <>
          <label htmlFor="">
            {labelName}{" "}
            <textarea
              type={type}
              name={inputName}
              value={value}
              onChange={onChange}
              rows="5"
              cols="33"
            ></textarea>
          </label>
        </>
      ) : (
        <>
          <label htmlFor="">
            {labelName}{" "}
            <input
              type={type}
              name={inputName}
              value={value}
              onChange={onChange}
            />
          </label>
          <br />
        </>
      )}
    </>
  );
}
