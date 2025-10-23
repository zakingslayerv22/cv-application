export default function CVDisplay({ CVDataArray, handleEdit }) {
  return (
    <div className="container">
      <section className="basic-information">
        <h2>
          {CVDataArray[0].firstName} {CVDataArray[0].lastName}
        </h2>
        <div>
          {CVDataArray[0].email} | {CVDataArray[0].phoneNumber}
        </div>
        <div>{CVDataArray[0].address}</div>
      </section>
      <hr />
      <section className="educational-qualifications">
        <h3>{CVDataArray[1].sectionTitle}</h3>
        <div>
          {CVDataArray[1].dateOfGraduation} | {CVDataArray[1].schoolName}
        </div>
        <div>
          {CVDataArray[1].course} | {CVDataArray[1].certificateObtained}
        </div>
      </section>
      <hr />
      <section className="work-experience">
        <h3>{CVDataArray[2].sectionTitle}</h3>
        <div>
          {CVDataArray[2].from} - {CVDataArray[2].to}
        </div>
        <div>
          {CVDataArray[2].companyName} | {CVDataArray[2].positionTitle}
        </div>
        <div>{CVDataArray[2].responsibilities}</div>
      </section>
      <br />
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
