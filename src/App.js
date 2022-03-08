import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import WeatherMain from "./components/WeatherMain";
import { DataContext } from "./context/DataContext";
import { Themes } from "./components";

const App = () => {
	const [city, setCity] = useState("");

	const { darkMode } = useContext(DataContext);

	return (
		<ThemeProvider theme={Themes[darkMode]}> {/* Theme provider to change between dark and light mode with styled components*/}
			<Container darkMode={darkMode}>
				<Navbar setCity={setCity} />
				<WeatherMain city={city} setCity={setCity} />
			</Container>
		</ThemeProvider>
	);
};

export default App;

const Container = styled.div`
	background: ${({ theme }) => theme.background};

	background-size: cover;
	transition: 0.5s all ease-in;

	@media screen and (min-width: 700px) {
		height: 100vh;
	}
`;
