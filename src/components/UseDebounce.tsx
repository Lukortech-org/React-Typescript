import { useState, useEffect } from "react";
import {
	useScrollPosition,
	useScrollXPosition,
	useScrollYPosition,
} from "react-use-scroll-position";



export const UseDebounce = (value: number, delay: number) => {
	const { x, y } = useScrollPosition();
	const scrollX = useScrollXPosition();
	const scrollY = useScrollYPosition();

    
    

	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(1);
            <p>{x}</p>
		}, 5000);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};
