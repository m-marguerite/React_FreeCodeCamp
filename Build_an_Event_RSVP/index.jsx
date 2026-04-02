const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numberAttendees, setNumberAttendees] = useState(1);
  const [dietary, setDietary] = useState("");
  const [additionalGuest, setAdditionalGuest] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: name,
      email: email,
      numberAttendees: numberAttendees,
      dietary: dietary,
      additionalGuest: additionalGuest ? "Yes" : "No",
    });
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit}>
        <div className="section">
          <label>
            Name:
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Number of attendees:
            <input
              type="number"
              value={numberAttendees}
              required
              min={1}
              onChange={(e) => setNumberAttendees(e.target.value)}
            />
          </label>
          <label>
            Dietary:
            <input
              type="text"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
            />
          </label>
          <label>
            Bringing additional guests:
            <input
              type="checkbox"
              checked={additionalGuest}
              onChange={(e) => setAdditionalGuest(e.target.checked)}
            />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submittedData && (
        <div>
          <h2>RSVP Submitted!</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Number of attendees: {submittedData.numberAttendees}</p>
          <p>Dietary preferences: {submittedData.dietary}</p>
          <p>Bringing additional guests: {submittedData.additionalGuest}</p>
        </div>
      )}
    </div>
  );
}
