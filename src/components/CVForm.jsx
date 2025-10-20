import { useState } from "react";
import InputField from "./Input";
import { categories } from "../assets/CVData";
import CVDisplay from "./CVDisplay";

export default function CVForm() {
  const [data, setData] = useState(categories);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e, idToUpdate) => {
    const { name, value } = e.target;

    setData((previousData) =>
      previousData.map((detail) =>
        detail.id === idToUpdate ? { ...detail, [name]: value } : detail
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  const handleEdit = () => {
    setIsSent(false);
  };

  if (isSent) {
    return <CVDisplay CVDataArray={data} handleEdit={handleEdit} />;
  }

  console.log(data);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
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

        <hr />
        <h3>{data[1].sectionTitle}</h3>
        <InputField
          labelName="School Name"
          inputName="schoolName"
          value={data[1].schoolName}
          onChange={(e) => handleChange(e, data[1].id)}
        />
        <InputField
          labelName="Course"
          inputName="course"
          value={data[1].course}
          onChange={(e) => handleChange(e, data[1].id)}
        />
        <InputField
          labelName="Date of Graduation"
          type="date"
          inputName="dateOfGraduation"
          value={data[1].dateOfGraduation}
          onChange={(e) => handleChange(e, data[1].id)}
        />
        <hr />
        <h3>{data[2].sectionTitle}</h3>
        <InputField
          labelName="From"
          type="date"
          inputName="from"
          value={data[2].from}
          onChange={(e) => handleChange(e, data[2].id)}
        />
        <InputField
          labelName="To"
          type="date"
          inputName="to"
          value={data[2].to}
          onChange={(e) => handleChange(e, data[2].id)}
        />
        <InputField
          labelName="Company Name"
          type="text"
          inputName="companyName"
          value={data[2].companyName}
          onChange={(e) => handleChange(e, data[2].id)}
        />

        <InputField
          labelName="Position Title"
          type="text"
          inputName="positionTitle"
          value={data[2].positionTitle}
          onChange={(e) => handleChange(e, data[2].id)}
        />

        <InputField
          labelName="Responsibilities"
          textArea={true}
          inputName="responsibilities"
          value={data[2].responsibilities}
          onChange={(e) => handleChange(e, data[2].id)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
