import React from "react";

const DateInput = props => (
	<form onSubmit= {props.changeDate}>
		Enter a date (format: YYYY-MM-DD):
		<input />
		<input type="submit" />
	</form>
);

export default DateInput;