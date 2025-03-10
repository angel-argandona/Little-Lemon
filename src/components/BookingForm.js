import React, { useEffect } from 'react';

function BookingForm({date, time, guests, occasion, availableTimes, errors, isFormValid, changeField, submitHandler, currentDate}) {	
	
	return (
	<>
		<form onSubmit={submitHandler}>
			<label htmlFor="date">Choose date</label>
			<input type="date" id="date" name="date" value={date} onChange={changeField} required min={currentDate}/>
			{errors.date? <p className='error-message'>{errors.date}</p>: null}
			<label htmlFor="time">Choose time</label>
			<select id="time" name="time" value={time} onChange={changeField} required>
				{availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
			</select>
			{errors.time? <p className='error-message'>{errors.time}</p>: null}
			<label htmlFor="guests">Number of guests</label>
			<input type="number" placeholder="1" id="guests" name="guests" value={guests} onChange={changeField} required min="1" max="10"/>
			{errors.guests? <p className='error-message'>{errors.guests}</p>: null}
			<label htmlFor="occasion">Occasion</label>
			<select id="occasion" name="occasion" value={occasion} onChange={changeField} required>
				<option value="birthday">Birthday</option>
				<option value="anniversary">Anniversary</option>
			</select>
			{errors.occasion? <p className='error-message'>{errors.occasion}</p>: null}
			<button type='submit' disabled={!isFormValid}>Make Your Reservation</button>
		</form>
	</>
  )
}

export default BookingForm;