import emailIcon from "../assets/images/icons/email.svg";
import phoneIcon from "../assets/images/icons/phone.svg";
import locationIcon from "../assets/images/icons/map-marker-radius.svg";

export default function CVDisplay({ CVDataArray, handleEdit }) {
  return (
    <div className="container">
      <div>
        <section className="basic-information">
          <h2>
            {CVDataArray[0].firstName} {CVDataArray[0].lastName}
          </h2>
          <div className="email-and-phone">
            <div className="details-container">
              <img src={emailIcon} className="icon" alt="email-icon" />
              <div>{CVDataArray[0].email}</div>
            </div>
            <div className="details-container">
              <img src={phoneIcon} className="icon" alt="phone-icon" />
              <div>{CVDataArray[0].phoneNumber}</div>
            </div>
          </div>
          <div className="details-container">
            <img src={locationIcon} className="icon" alt="location-icon" />
            <div>{CVDataArray[0].address}</div>
          </div>
        </section>
        <section className="educational-qualifications">
          <h3 className="title-of-section">{CVDataArray[1].sectionTitle}</h3>
          <div className="education-details">
            <div>
              <div>{CVDataArray[1].location} </div>
              <div className="graduation-date">
                {" "}
                {CVDataArray[1].dateOfGraduation}
              </div>
            </div>
            <div>
              <div>
                <strong>{CVDataArray[1].schoolName}</strong>
              </div>
              <div>
                <strong>{CVDataArray[1].course}</strong>
              </div>

              <div>{CVDataArray[1].certificateObtained}</div>
            </div>
          </div>
        </section>
        <section className="work-experience">
          <h3 className="title-of-section">{CVDataArray[2].sectionTitle}</h3>
          <div className="work-details">
            <div>
              <div> {CVDataArray[2].location}</div>
              <div className="from-and-to">
                <span className="from"> {CVDataArray[2].from} </span>
                <p className="dash">
                  <span>–</span>
                </p>{" "}
                <span className="to"> {CVDataArray[2].to}</span>
              </div>
            </div>
            <div>
              <div>
                <strong>{CVDataArray[2].companyName}</strong>
              </div>
              <div>
                <strong>{CVDataArray[2].positionTitle}</strong>
              </div>
              <div>{CVDataArray[2].responsibilities}</div>
            </div>
          </div>
        </section>
        <br />
      </div>
      <button onClick={handleEdit} className="edit-button">
        Edit
      </button>
    </div>
  );
}
