import React from 'react';
import './ConfirmedBooking.css';

function ConfirmedBooking({date, time, guests}) {
  return (
	<main className='confirmed-booking-page'>
		<h1>Excellent!</h1>
		<h2>Your reservation on {date} at {time} for {guests} guest(s) has been confirmed.</h2>
	</main>
  )
}

export default ConfirmedBooking;