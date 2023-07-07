import { useState } from 'react';
import classes from './hotelBookingFrom.module.css'


const HotelBookingForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [roomType, setRoomType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission
    // You can perform any necessary actions here, such as making an API request

    // Reset form fields
    setCheckInDate('');
    setCheckOutDate('');
    setGuestCount(1);
    setRoomType('');
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label className={classes.label}>
        Check-in Date:
        <input
          type="date" className={classes.input}
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label className={classes.label}>
        Check-out Date:
        <input
          type="date" className={classes.input}
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label className={classes.label}>
        Guest Count:
        <input
          type="number" className={classes.input}
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
          min="1"
          required
        />
      </label>
      <br />
      <label className={classes.label}>
        Room Type:
        <select
          value={roomType} className={classes.input}
          onChange={(e) => setRoomType(e.target.value)}
          required
        >
          <option value="">Select Room Type</option>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
        </select>
      </label>
      <br />
      <button type="submit" className={classes.button}>Book Hotel</button>
    </form>
  );
};

export default HotelBookingForm;
