import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getPosition from "../helpers/getPosition";
import getWeather from "../helpers/getWeather";
import { Loader } from "../Loader";

const WeatherMain = ({ city }) => {
	const [weather, setWeather] = useState("");

	useEffect(() => {
		// If the city is not defined then will going to use the position to hava a city
		// Else will make an api call to get the weather for the city that the user want to see
		const getData = async () => {
			setWeather("");
			let pos = "";

			if (city) {
				pos = city;
			} else {
				pos = await getPosition();
			}

			const data = await getWeather(pos);

			setWeather(data.data);
		};

		getData();
	}, [city]);

	return (
		<Container className='animate__fadeInDown'>
			{weather ? (
				<Weather>
					<div className='main animate__fadeInDown'>
						<Temp>
							<h1>{weather.main.temp}°</h1>
							<div className={"temp_details"}>
								<p>
									Temp Min{" "}
									<span>{weather.main.temp_min}°</span>
								</p>
								<p>
									Temp Max{" "}
									<span>{weather.main.temp_max}°</span>
								</p>
							</div>
						</Temp>
						<div className='icon-container'>
							<img
							// Here I'm using custom icons because the api icos are terribles
								src={`/icons/${weather.weather[0].icon}.svg`}
								alt='Weather-Icon'
							/>
							<p>{weather.weather[0].description}</p>
						</div>
					</div>
					<Details>
						<div>
							<p>
								<strong>City</strong>
							</p>
							<p>
								<strong>{weather.name}</strong>
							</p>
						</div>
						<hr />
						<div>
							<p>Wind</p>
							<p>
								{weather.wind.speed} <span>K/h</span>
							</p>
						</div>
						<hr />
						<div>
							<p>Sunrise</p>
							<p>
								{new Date(
									weather.sys.sunrise
								).toLocaleTimeString()}
							</p>
						</div>
						<hr />
						<div>
							<p>Sunset</p>
							<p>
								{new Date(
									weather.sys.sunset
								).toLocaleTimeString()}
							</p>
						</div>
					</Details>
				</Weather>
			) : (
				<Loader />
			)}
		</Container>
	);
};

export default WeatherMain;

// Styles 

const Container = styled.div`
	width: auto;
	max-width: 1400px;
	margin: auto;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 20px 0;
	color: ${({ theme }) => theme.text};
	transition: 0.5s all ease-in;
`;

const Weather = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	.main {
		width: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: ${({ theme }) => theme.cardColor};
		backdrop-filter: blur(8px);
		border-radius: 7px;
		transition: 0.5s all ease-in;

		@media screen and (max-width: 640px) {
			width: 97%;
			flex-direction: column-reverse;
			align-items: center;
		}
	}

	.icon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-right: 20px;

		p {
			font-weight: bold;
			text-transform: uppercase;
			margin-top: -40px;
		}
	}

	img {
		height: 220px;
		max-height: 220px;
		width: auto;
		max-width: 220px;
	}
`;

const Temp = styled.div`
	text-align: center;
	margin-left: 40px;
	.temp_details {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 50px;
	}

	h1 {
		font-size: 3.5em;
		margin-bottom: 20px;
		color: ${({ theme }) => theme.title};
		transition: 0.5s all ease-in;
	}

	p {
		font-size: 1em;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: ${({ theme }) => theme.subtitle};
		transition: 0.5s all ease-in;
	}

	span {
		font-weight: 700;
	}
`;

const Details = styled.div`
	width: 80%;
	margin: auto;
	background-color: ${({ theme }) => theme.cardColor};
	backdrop-filter: blur(8px);
	border-radius: 7px;
	padding: 50px;
	transition: 0.5s all ease-in;


	div {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	@media screen and (max-width: 640px) {
			width: 97%;
			padding: 8px;
		}

`;
