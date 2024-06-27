import { useState } from "react";

import "./App.css";

function App() {
  const formatDate = function (currDate) {
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth() + 1;
    const currDay = currDate.getDate();

    return `${currYear}-${String(currMonth).padStart(2, "0")}-${String(
      currDay
    ).padStart(2, "0")}`;
  };

  const currentDate = new Date();

  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [flightDate, setFlightDate] = useState(formatDate(currentDate));
  const [returnFlightDate, setReturnFlightDate] = useState(
    formatDate(currentDate)
  );

  return (
    <>
      <h1>Flight booker</h1>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          if (isRoundTrip) {
            alert(
              `Your flight is on ${flightDate} and your return flight is on ${returnFlightDate}`
            );
          } else {
            alert(`Your flight is on ${flightDate}`);
          }
        }}
      >
        <select
          name="type of flight"
          onChange={(event) => {
            if (event.target.value === "roundTrip") {
              setIsRoundTrip(true);
            }
            if (event.target.value === "oneWayTrip") {
              setIsRoundTrip(false);
            }
          }}
        >
          <option value="">Select flight type</option>
          <option value="oneWayTrip">one-way trip</option>
          <option value="roundTrip">round trip</option>
        </select>
        <input
          type="date"
          value={flightDate}
          onChange={(event) => {
            const selectedFlightDate = event.target.value;
            setFlightDate(selectedFlightDate);
          }}
        />
        {isRoundTrip ? (
          <input
            type="date"
            value={returnFlightDate}
            onChange={(event) => {
              const selectedReturnFlightDate = event.target.value;
              setReturnFlightDate(selectedReturnFlightDate);
            }}
          />
        ) : null}
        <button>Reserve Flight</button>
      </form>
    </>
  );
}

export default App;
