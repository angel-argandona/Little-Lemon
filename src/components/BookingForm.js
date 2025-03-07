import React from 'react';

function BookingForm({date, time, guests, occasion, availableTimes, changeHandler}) {	
	return (
	<>
		<form>
			<label htmlFor="res-date">Choose date</label>
			<input type="date" id="res-date" value={date} onChange={(e)=>changeHandler({date: e.target.value}, "date")}/>
			<label htmlFor="res-time">Choose time</label>
			<select id="res-time " value={time} onChange={(e)=>changeHandler({time: e.target.value}, "time")}>
				{availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
			</select>
			<label htmlFor="guests">Number of guests</label>
			<input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>{changeHandler({guests: e.target.value}, "guests")}}/>
			<label htmlFor="occasion">Occasion</label>
			<select id="occasion" value={occasion} onChange={(e)=>changeHandler({occasion: e.target.value}, "occasion")}>
				<option value="birthday">Birthday</option>
				<option value="anniversary">Anniversary</option>
			</select>
			<button type='submit'>Make Your Reservation</button>
		</form>
	</>
  )
}

export default BookingForm;