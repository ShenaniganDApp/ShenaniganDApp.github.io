import React from 'react';
import styled, { css } from 'styled-components';

const Text = styled.p`
	text-decoration: none;
	margin: 0;
	margin: ${(props) => props.margin};
	padding: 0;
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	width: ${(props) => props.width};

	${(props) =>
		(props.header &&
			css`
				font-weight: 800;
				font-size: 1.5vw;
				font-family: Electro-Shackle;
				-webkit-user-select: none; /* Chrome all / Safari all */
				-moz-user-select: none; /* Firefox all */
				-ms-user-select: none; /* IE 10+ */
				user-select: none;
				@media (max-width: 768px) {
					font-size: 3vw;
				}
			`) ||
		(props.main &&
			css`
				font-size: 15px;
				font-size: 1.75vw;
				background-color: 'black';
				font-family: GreenScreen;
				@media (max-width: 768px) {
					font-size: 3vw;
				}
			`) ||
		(props.smallMain &&
			css`
				font-size: 12px;
				font-size: 1vw;
				background-color: 'black';
				font-family: GreenScreen;
				@media (max-width: 768px) {
					font-size: 2.5vw;
				}
			`) ||
		(props.title &&
			css`
				font-size: 20px;
				font-size: 4vw;
				font-weight: 900;
				font-family: Electro-Shackle;
				@media (max-width: 768px) {
					font-size: 5vw;
				}
			`)};
	${(props) =>
		props.shadowed &&
		css`
			text-shadow: ${props.shadowed} 0px 0px 5px;
		`}
	${(props) =>
		props.wrap &&
		css`
			overflow-wrap: break-word;
		`}
`;

export default Text;
