import React, { useEffect } from 'react';

function BookingForm({date, time, guests, occasion, availableTimes, changeField, submitHandler}) {	
	
	return (
	<>
		<form onSubmit={submitHandler}>
			<label htmlFor="date">Choose date</label>
			<input type="date" id="date" name="date" value={date} onChange={changeField}/>
			<label htmlFor="time">Choose time</label>
			<select id="time" name="time" value={time} onChange={changeField}>
				{availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
			</select>
			<label htmlFor="guests">Number of guests</label>
			<input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={guests} onChange={changeField}/>
			<label htmlFor="occasion">Occasion</label>
			<select id="occasion" name="occasion" value={occasion} onChange={changeField}>
				<option value="birthday">Birthday</option>
				<option value="anniversary">Anniversary</option>
			</select>
			<button type='submit'>Make Your Reservation</button>
		</form>
	</>
  )
}

export default BookingForm;