import { useState } from 'react';
import classes from './flightBookingFrom.module.css'


const FlightBookingForm = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission
    // You can perform any necessary actions here, such as making an API request

    // Reset form fields
    setDepartureCity('');
    setArrivalCity('');
    setDepartureDate('');
    setReturnDate('');
    setPassengerCount(1);
  };

  return (
    <form onSubmit={handleSubmit}  className={classes.form}>
      <label className={classes.label}>
        Departure City:
        <input
          type="text" className={classes.input}
          value={departureCity}
          onChange={(e) => setDepartureCity(e.target.value)}
          required
        />
      </label >
      <br />
      <label className={classes.label}>
        Arrival City:
        <input
          type="text" className={classes.input}
          value={arrivalCity}
          onChange={(e) => setArrivalCity(e.target.value)}
          required
        />
      </label>
      <br />
      <label className={classes.label}>
        Departure Date:
        <input
          type="date" className={classes.input}
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label className={classes.label}>
        Return Date:
        <input
          type="date" className={classes.input}
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </label>
      <br />
      <label className={classes.label}>
        Passenger Count:
        <input
          type="number" className={classes.input}
          value={passengerCount}
          onChange={(e) => setPassengerCount(e.target.value)}
          min="1"
          required
        />
      </label>
      <br />
      <button type="submit" className={classes.button}>Book Flight</button>
    </form>
  );
};

export default FlightBookingForm;
