import { useEffect, useState } from "react";
import NavBar from "../Component/Navbar/NavBar";
import { getActiveDoc } from "../Services/api";
import "./Activedoctor.css";

const IMAGE_BASE_URL =
  "https://ward10admin.lmc.gov.np/api/uploads/";


// =====================================================
// APPOINTMENT MODAL
// =====================================================

function AppointmentModal({ doctor, onClose }) {

  const [formData, setFormData] = useState({
    patientName: "",
    date: "",
    time: "",
    phone: "",
    age: "",
    address: "",
    email: "",
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Appointment Data:", {
      doctorId: doctor.id,
      doctorName: `${doctor.firstName} ${doctor.lastName}`,
      ...formData,
    });

    alert("बुकिङ पुष्टि गरिएको छ!");

    // Later you can send this data to your appointment API
  };


  return (
    <div className="appointment-overlay">

      <div className="appointment-modal">

        {/* ================= HEADER ================= */}

        <div className="appointment-header">

          <div>

            <h2>
              अपोइन्टमेन्ट बुक गर्नुहोस्
            </h2>

            <span className="doctor-name">
              Dr. {doctor.firstName} {doctor.lastName}
            </span>

          </div>


          <button
            type="button"
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        {/* ================= FORM ================= */}

        <form onSubmit={handleSubmit}>

          {/* Patient Name */}

          <div className="form-group">

            <label>
              बिरामीको नाम
            </label>

            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="पूरा नाम"
              required
            />

          </div>


          {/* Date */}

          <div className="form-group">

            <label>
              मनपर्ने मिति
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

          </div>


          {/* Time */}

          <div className="form-group">

            <label>
              मनपर्ने समय
            </label>

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              disabled={!formData.date}
              required
            >

              <option value="">
                पहिले उपलब्ध मिति छान्नुहोस्
              </option>

              <option value="10:00">
                १०:०० AM
              </option>

              <option value="11:00">
                ११:०० AM
              </option>

              <option value="12:00">
                १२:०० PM
              </option>

              <option value="13:00">
                १:०० PM
              </option>

              <option value="14:00">
                २:०० PM
              </option>

              <option value="15:00">
                ३:०० PM
              </option>

            </select>

          </div>


          {/* Phone + Age */}

          <div className="form-row">

            <div className="form-group">

              <label>
                फोन
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="98XXXXXXXX"
                maxLength="10"
                required
              />

            </div>


            <div className="form-group">

              <label>
                उमेर
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="उदा. ३०"
                min="1"
                max="120"
                required
              />

            </div>

          </div>


          {/* Address */}

          <div className="form-group">

            <label>
              ठेगाना
            </label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="सडक, वडा, शहर"
              rows="3"
              required
            />

          </div>


          {/* Email */}

          <div className="form-group">

            <label>
              इमेल
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="तपाईंको इमेल"
            />

          </div>


          {/* Buttons */}

          <div className="appointment-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              रद्द गर्नुहोस्
            </button>


            <button
              type="submit"
              className="confirm-btn"
            >
              बुकिङ पुष्टि गर्नुहोस्
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}



// =====================================================
// DOCTORS PAGE
// =====================================================

function Doctors() {

  const [doctors, setDoctors] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Currently selected doctor for appointment
  const [appointmentDoctor, setAppointmentDoctor] =
    useState(null);


  // ===================================================
  // FETCH DOCTORS
  // ===================================================

  useEffect(() => {

    const fetchDoctors = async () => {

      try {

        const data = await getActiveDoc();

        setDoctors(data);

      } catch (error) {

        console.error(error);

        setError("Failed to load doctors.");

      } finally {

        setLoading(false);

      }

    };


    fetchDoctors();

  }, []);


  // ===================================================
  // FORMAT TIME
  // ===================================================

  const formatTime = (time) => {

    if (!time) return "";

    const [hour, minute] = time.split(":");

    const date = new Date();

    date.setHours(Number(hour));

    date.setMinutes(Number(minute));

    return date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

  };


  // ===================================================
  // LOADING
  // ===================================================

  if (loading) {

    return (
      <>
        <NavBar />

        <div className="doctor-page">

          <div className="doctor-loading">

            <div className="loader"></div>

            <p>
              Loading doctors...
            </p>

          </div>

        </div>
      </>
    );
  }


  // ===================================================
  // ERROR
  // ===================================================

  if (error) {

    return (
      <>
        <NavBar />

        <div className="doctor-page">

          <div className="doctor-error">

            <h3>
              Unable to load doctors
            </h3>

            <p>
              {error}
            </p>

          </div>

        </div>
      </>
    );
  }


  // ===================================================
  // MAIN
  // ===================================================

  return (
    <>
      <NavBar />


      <main className="doctor-page">

        {/* =============================================
            PAGE HEADER
        ============================================= */}

        <section className="doctor-hero">

          <div className="doctor-hero-content">

            <span className="hero-small-title">
              HEALTH SERVICES
            </span>

            <h1>
              Our Doctors
            </h1>

            <p>
              Meet our dedicated medical professionals
              providing quality healthcare services to
              our community.
            </p>

          </div>

        </section>


        {/* =============================================
            BREADCRUMB
        ============================================= */}

        <div className="doctor-container">

          <div className="breadcrumb">

            <span>
              Home
            </span>

            <span>
              /
            </span>

            <strong>
              Doctors
            </strong>

          </div>

        </div>


        {/* =============================================
            DOCTORS
        ============================================= */}

        <section className="doctors-section">

          <div className="doctor-container">

            <div className="section-heading">

              <span>
                OUR MEDICAL TEAM
              </span>

              <h2>
                Active Doctors
              </h2>

              <p>
                Our experienced healthcare professionals
                are here to provide you with the best
                possible care.
              </p>

            </div>


            {/* =========================================
                NO DOCTORS
            ========================================= */}

            {doctors.length === 0 ? (

              <div className="no-doctors">

                <h3>
                  No doctors available
                </h3>

                <p>
                  There are currently no active doctors
                  available.
                </p>

              </div>

            ) : (

              <div className="doctor-grid">

                {doctors.map((doctor) => {

                  // Doctor image
                  const image =
                    doctor.galleryPhotos?.length > 0
                      ? `${IMAGE_BASE_URL}${doctor.galleryPhotos[0].fileName}`
                      : null;


                  return (

                    <div
                      className="doctor-card"
                      key={doctor.id}
                    >

                      {/* =============================
                          DOCTOR IMAGE
                      ============================= */}

                      <div className="doctor-image-wrapper">

                        {image ? (

                          <img
                            src={image}
                            alt={`${doctor.firstName} ${doctor.lastName}`}
                            className="doctor-image"
                          />

                        ) : (

                          <div className="doctor-placeholder">

                            <span>
                              {doctor.firstName?.charAt(0)}
                            </span>

                          </div>

                        )}


                        <div className="active-badge">

                          <span></span>

                          Active

                        </div>

                      </div>


                      {/* =============================
                          DOCTOR INFO
                      ============================= */}

                      <div className="doctor-info">

                        <h3>
                          Dr. {doctor.firstName} {doctor.lastName}
                        </h3>


                        <p className="doctor-specialization">

                          {doctor.specialization ||
                            "Medical Doctor"}

                        </p>


                        {/* =========================
                            DETAILS
                        ========================= */}

                        <div className="doctor-details">

                          <div className="detail-row">

                            <span className="detail-label">
                              Gender
                            </span>

                            <span className="detail-value">

                              {doctor.gender
                                ? doctor.gender.charAt(0).toUpperCase() +
                                  doctor.gender.slice(1)
                                : "N/A"}

                            </span>

                          </div>


                          <div className="detail-row">

                            <span className="detail-label">
                              License No.
                            </span>

                            <span className="detail-value">

                              {doctor.licenseNumber ||
                                "N/A"}

                            </span>

                          </div>


                          {doctor.subSpecialization && (

                            <div className="detail-row">

                              <span className="detail-label">
                                Sub-specialization
                              </span>

                              <span className="detail-value">
                                {doctor.subSpecialization}
                              </span>

                            </div>

                          )}


                          {doctor.education && (

                            <div className="detail-row">

                              <span className="detail-label">
                                Education
                              </span>

                              <span className="detail-value">
                                {doctor.education}
                              </span>

                            </div>

                          )}


                          {doctor.yearsOfExperience && (

                            <div className="detail-row">

                              <span className="detail-label">
                                Experience
                              </span>

                              <span className="detail-value">
                                {doctor.yearsOfExperience} years
                              </span>

                            </div>

                          )}

                        </div>


                        {/* =============================
                            SCHEDULE
                        ============================= */}

                        {doctor.schedules?.length > 0 && (

                          <div className="schedule-section">

                            <h4>
                              Available Schedule
                            </h4>


                            <div className="schedule-list">

                              {doctor.schedules.map(
                                (schedule, index) => (

                                  <div
                                    className="schedule-item"
                                    key={index}
                                  >

                                    <span className="schedule-day">

                                      {schedule.day}

                                    </span>


                                    <span className="schedule-time">

                                      {formatTime(
                                        schedule.startTime
                                      )}

                                      {" - "}

                                      {formatTime(
                                        schedule.endTime
                                      )}

                                    </span>

                                  </div>

                                )
                              )}

                            </div>

                          </div>

                        )}


                        {/* =============================
                            BOOK APPOINTMENT
                        ============================= */}

                        <button
                          type="button"
                          className="book-appointment-btn"
                          onClick={() =>
                            setAppointmentDoctor(doctor)
                          }
                        >
                          अपोइन्टमेन्ट बुक गर्नुहोस्
                        </button>


                      </div>

                    </div>

                  );

                })}

              </div>

            )}

          </div>

        </section>

      </main>


      {/* ===============================================
          APPOINTMENT MODAL

          IMPORTANT:
          This is OUTSIDE the doctor card/grid.
      =============================================== */}

      {appointmentDoctor && (

        <AppointmentModal
          doctor={appointmentDoctor}
          onClose={() => setAppointmentDoctor(null)}
        />

      )}

    </>
  );
}


export default Doctors;