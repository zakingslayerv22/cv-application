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
    <div className="form-container">
      <section className="form-body">
        <section className="heading">
          <h2>Résumé Generator</h2>
          <p>Generate your résumé in one click!</p>
          <p>All fields are required.</p>
        </section>
        <form action="" onSubmit={handleSubmit}>
          <section className="basic-info">
            <h3 className="section-title">{data[0].sectionTitle}</h3>
            <section className="subsection">
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
            </section>

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

            <InputField
              labelName="Address"
              type="text"
              inputName="address"
              value={data[0].address}
              onChange={(e) => handleChange(e, data[0].id)}
            />
          </section>

          <section className="education-info">
            <h3 className="section-title">{data[1].sectionTitle}</h3>
            <InputField
              labelName="School Name"
              inputName="schoolName"
              value={data[1].schoolName}
              onChange={(e) => handleChange(e, data[1].id)}
            />
            <InputField
              labelName="City/Country"
              inputName="location"
              value={data[1].location}
              onChange={(e) => handleChange(e, data[1].id)}
            />
            <InputField
              labelName="Course"
              inputName="course"
              value={data[1].course}
              onChange={(e) => handleChange(e, data[1].id)}
            />
            <InputField
              labelName="Certificate Obtained"
              inputName="certificateObtained"
              value={data[1].certificateObtained}
              onChange={(e) => handleChange(e, data[1].id)}
            />
            <InputField
              labelName="Date of Graduation"
              type="date"
              inputName="dateOfGraduation"
              value={data[1].dateOfGraduation}
              onChange={(e) => handleChange(e, data[1].id)}
            />
          </section>

          <section className="work-experience-info">
            <h3 className="section-title">{data[2].sectionTitle}</h3>
            <section className="subsection">
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
            </section>
            <InputField
              labelName="Company Name"
              type="text"
              inputName="companyName"
              value={data[2].companyName}
              onChange={(e) => handleChange(e, data[2].id)}
            />
            <InputField
              labelName="City/Country"
              type="text"
              inputName="location"
              value={data[2].location}
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
          </section>

          <button type="submit">Generate</button>
        </form>
      </section>
    </div>
  );
}
