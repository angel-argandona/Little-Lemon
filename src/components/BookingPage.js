import React from 'react';
import './BookingPage.css'
import BookingForm from './BookingForm';

function BookingPage(props) {
	return (
		<main className='booking-page'>
			<h1>Reservation</h1>
			<BookingForm {...props}/>
		</main>
  );
}

export default BookingPage;