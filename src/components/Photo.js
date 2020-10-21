import React from "react";

const Photo = props => (
	<div>
		<h3 class="title-image">{props.photo.title}</h3>
		<img src={props.photo.url} alt={props.photo.title} />
		<p class="text-explanation">{props.photo.explanation}</p>
		<p class="text-author">{props.photo.copyright}</p>
	</div>
);

export default Photo;