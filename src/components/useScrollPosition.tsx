import React from "react";
import {
	useScrollPosition,
	useScrollXPosition,
	useScrollYPosition,
} from "react-use-scroll-position";

export default function UseYourImagination() {
	const { x, y } = useScrollPosition();
	const scrollX = useScrollXPosition();
	const scrollY = useScrollYPosition();

	return (
		<>
			<div>
				<p>
					{x}== {scrollX}.
				</p>
				<p>
					{y} == {scrollY}.
				</p>
			</div>
		</>
	);
}
