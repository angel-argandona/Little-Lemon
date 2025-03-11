import React, { useEffect } from 'react';

function BookingForm({date, time, guests, occasion, availableTimes, changeField, submitHandler, currentDate, isFormValid, errors}) {	
	
	return (
	<>
		<form onSubmit={submitHandler} noValidate>
			<label htmlFor="date">Choose date<span className='asterisk'>*</span></label>
			<input type="date" id="date" name="date" value={date} onChange={changeField} required min={currentDate}/>
			{errors.date? <p className='error-message'>{errors.date}</p>: null}
			<label htmlFor="time">Choose time<span className='asterisk'>*</span></label>
			<select id="time" name="time" value={time} onChange={changeField} required>
				{availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
			</select>
			{errors.time? <p className='error-message'>{errors.time}</p>: null}
			<label htmlFor="guests">Number of guests<span className='asterisk'>*</span></label>
			<input type="number" placeholder="Enter a number between 1-10" id="guests" name="guests" value={guests} onChange={changeField} required min="1" max="10"/>
			{errors.guests? <p className='error-message'>{errors.guests}</p>: null}
			<label htmlFor="occasion">Occasion</label>
			<select id="occasion" name="occasion" value={occasion} onChange={changeField}>
				<option value=""></option>
				<option value="birthday">Birthday</option>
				<option value="anniversary">Anniversary</option>
			</select>
			{errors.occasion? <p className='error-message'>{errors.occasion}</p>: null}
			<button type='submit' disabled={!isFormValid}>Make Your Reservation</button>
			{!isFormValid? <p className='error-message' style={{marginTop:"1rem"}}>Please fill out all the required fields correctly before submitting your reservation.</p>: null}
		</form>
	</>
  )
}

export default BookingForm;