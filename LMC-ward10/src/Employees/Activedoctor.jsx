import { useState, useEffect } from 'react';
import NavBar from '../Component/Navbar/NavBar';
import { getActiveDoc } from '../Services/api';
import './Activedoctor.css';

// Point this at wherever your backend serves doctor photos from
const IMAGE_BASE_URL = 'https://ward10admin.lmc.gov.np/api/uploads/WhatsApp_Image_2025-12-08_at_15_01_46_89ff10d5_20260522_085207_ms1e0w.png';

const DAY_LABELS = {
  Sunday: 'आइतबार',
  Monday: 'सोमबार',
  Tuesday: 'मङ्गलबार',
  Wednesday: 'बुधबार',
  Thursday: 'बिहिबार',
  Friday: 'शुक्रबार',
  Saturday: 'शनिबार',
};

function formatTime(time) {
  if (!time) return '';
  const [h, m] = time.split(':');
  const hour = Number(h);
  const period = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${m} ${period}`;
}

function DoctorCard({ doctor }) {
  const photo = doctor.galleryPhotos?.[0]?.fileName;

  return (
    <div className="doctor-card">
      <div className="doctor-card__header">
        {photo ? (
          <img
            className="doctor-card__photo"
            src={`${IMAGE_BASE_URL}/${photo}`}
            alt={doctor.firstName}
          />
        ) : (
          <div className="doctor-card__photo doctor-card__photo--placeholder">
            {doctor.firstName?.[0]}
            {doctor.lastName?.[0]}
          </div>
        )}

        <div>
          <h3 className="doctor-card__name">
            {doctor.firstName} {doctor.lastName}
          </h3>
          {doctor.specialization && (
            <span className="doctor-card__badge">{doctor.specialization}</span>
          )}
        </div>
      </div>

      <div className="doctor-card__meta">
        {doctor.education && <p>शिक्षा: {doctor.education}</p>}
        {doctor.yearsOfExperience != null && <p>अनुभव: {doctor.yearsOfExperience} वर्ष</p>}
        {doctor.licenseNumber && <p>लाइसेन्स नं.: {doctor.licenseNumber}</p>}
      </div>

      <div className="doctor-card__schedule">
        <h4>कार्यतालिका</h4>
        {doctor.schedules?.length > 0 ? (
          <ul>
            {doctor.schedules.map((s, i) => (
              <li key={i}>
                <span>{DAY_LABELS[s.day] || s.day}</span>
                <span>{formatTime(s.startTime)} – {formatTime(s.endTime)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="doctor-card__no-schedule">कार्यतालिका उपलब्ध छैन</p>
        )}
      </div>
    </div>
  );
}

function Activedoctor() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getActiveDoc()
      .then(setDoctors)
      .catch((err) => {
        console.error(err);
        setError('चिकित्सकहरूको जानकारी ल्याउन सकिएन। कृपया पुनः प्रयास गर्नुहोस्।');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <NavBar />

      <div className="top-section">
        <p className="top-section__eyebrow">स्वास्थ्य सेवा</p>
        <h1>हाम्रा चिकित्सकहरू</h1>
        <p className="top-section__desc">
          वडा स्वास्थ्य चौकीमा कार्यरत चिकित्सकहरू र तिनको कार्यतालिका।
        </p>
      </div>

      <div className="doc-card">
        {loading && <p className="doc-card__status">लोड हुँदैछ...</p>}
        {!loading && error && <p className="doc-card__status doc-card__status--error">{error}</p>}
        {!loading && !error && doctors.length === 0 && (
          <p className="doc-card__status">हाल कुनै सक्रिय चिकित्सक फेला परेन।</p>
        )}
        {!loading && !error && doctors.length > 0 && (
          <div className="doc-card__grid">
            {doctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Activedoctor;