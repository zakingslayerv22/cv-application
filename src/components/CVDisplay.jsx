export default function CVDisplay({ CVDataArray, handleEdit }) {
  return (
    <>
      <section className="basic-info">
        <h3>{CVDataArray[0].sectionTitle}</h3>
        <div>
          {CVDataArray[0].firstName} {CVDataArray[0].lastName}
        </div>
        <div>
          {CVDataArray[0].email} | {CVDataArray[0].phoneNumber}
        </div>
        <div>
          {CVDataArray[0].age} | {CVDataArray[0].sex}
        </div>
      </section>
      <hr />
      <section className="educational-qualifications">
        <h3>{CVDataArray[1].sectionTitle}</h3>
        <div>
          {CVDataArray[1].dateOfGraduation} | {CVDataArray[1].schoolName}
        </div>
        <div>{CVDataArray[1].course}</div>
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
    </>
  );
}
