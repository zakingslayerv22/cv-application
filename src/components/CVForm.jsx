import { useState } from "react";
import InputField from "./Input";
import { categories } from "../assets/CVData";

export default function CVForm() {
  const [data, setData] = useState(categories);

  const handleChange = (e, idToUpdate) => {
    const { name, value } = e.target;

    setData((previousData) =>
      previousData.map((detail) =>
        detail.id === idToUpdate ? { ...detail, [name]: value } : detail
      )
    );
  };

  console.log(data);
  return (
    <>
      <form action="">
        <h3>{data[0].sectionTitle}</h3>
        <InputField
          key={data[0].id}
          labelName="First Name"
          inputName="firstName"
          value={data[0].firstName}
          onChange={(e) => handleChange(e, data[0].id)}
        />
        <InputField
          labelName="Last Name"
          inputName="lastName"
          value={data[0].lastName}
          onChange={(e) => handleChange(e, data[0].id)}
        />
        <InputField
          labelName="Age"
          type="number"
          inputName="age"
          value={data[0].age}
          onChange={(e) => handleChange(e, data[0].id)}
        />
        <InputField
          labelName="Sex"
          inputName="sex"
          value={data[0].sex}
          onChange={(e) => handleChange(e, data[0].id)}
        />
        <InputField
          labelName="Email"
          type="email"
          inputName="email"
          value={data[0].email}
          onChange={(e) => handleChange(e, data[0].id)}
        />

        <InputField
          labelName="Phone Number"
          type="tel"
          inputName="phoneNumber"
          value={data[0].phoneNumber}
          onChange={(e) => handleChange(e, data[0].id)}
        />
        <hr />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
