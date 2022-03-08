import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	//  darkMode is used to tell the styled components what colors have to use
	const [darkMode, setDarkMode] = useState("");
	const [hour, setHour] = useState(new Date().getHours());

	useEffect(() => {
		// This is an interval to change the theme automatically when the conditions are true
		//  The interval will be executed every 1 hour
		setInterval(() => {
			setHour(new Date().getHours());
		}, 60000);

		if (hour >= 18 || hour <= 7) {
			setDarkMode("dark");
		} else {
			console.log(hour);
			setDarkMode("light");
		}
	}, [hour]);

	return (
		<DataContext.Provider value={{ darkMode }}>
			{children}
		</DataContext.Provider>
	);
};
