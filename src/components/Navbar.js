import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getDate } from "../helpers/getDate";
import { SearchIcon } from "@heroicons/react/outline";

const Navbar = ({ setCity }) => {
	const date = getDate();
	const [newCity, setNewCity] = useState("");
	const [hour, setHour] = useState(new Date().toLocaleTimeString());

	// Here is how the clock are working 
	// This effect will execute the code every second
	useEffect(() => {
		let interval = setInterval(() => {
			setHour(new Date().toLocaleTimeString());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		setCity(newCity);

		setNewCity("");
	};

	const handleChange = (e) => {
		setNewCity(e.target.value);
	};

	return (
		<Nav>
			<InputBox onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Enter a city name'
					onChange={handleChange}
					value={newCity}
				/>
				<button type='submit'>
					<SearchIcon className='search' />
				</button>
			</InputBox>
			<ActualDate>
				{date[0]}, {date[2]} {date[1]}
			</ActualDate>
			<Clock>{hour}</Clock>
		</Nav>
	);
};

export default Navbar;


// Styles

const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-center;
	background-color: ${({ theme }) => theme.cardColor};
	padding: 10px 20px;
	color: ${({ theme }) => theme.text};
	transition: 0.5s all ease-in;
`;

const InputBox = styled.form`
	input {
		padding: 4px;
		font-size: 14px;
		border: none;
		border-bottom: solid 1px;
		border-color: ${({ theme }) => theme.text};
		background-color: transparent !important;
		color: #000000;
		outline: none !important;
		border-radius: 0 !important ;
		transition: 0.5s all ease-in;
		color: ${({ theme }) => theme.text};

		::placeholder {
			color: ${({ theme }) => theme.placeholder};
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}

	.search {
		width: 1.5rem;
	}

	button {
		background: transparent;
		border: none;
		/* border-bottom: solid 2px #777; */
		border-radius: 10px;
		outline: none;
		color: ${({ theme }) => theme.text};
		/* margin-left: 1px; */
		font-weight: 500;
		transition: 0.2s all ease-in;
	}

	button:hover {
		color: ${({ theme }) => theme.hover};
	}

	@media screen and (max-width: 640px) {
		input {
			width: 90px;

			::placeholder {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}
`;

const ActualDate = styled.div`
	justify-self: center;

	@media screen and (max-width: 640px) {
		font-size: 13px;
	}
`;

const Clock = styled.div`
	@media screen and (max-width: 640px) {
		font-size: 13px;
	}
`;
