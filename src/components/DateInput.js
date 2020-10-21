import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = props => (
	<div>
		Pick a date: 
		<DatePicker
			selected={props.date}
			onChange={props.changeDate}
			dateFormat="yyyy/MM/dd"
		/>
	</div>
);

export default DateInput;