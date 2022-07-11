import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background-color: rgb(39 39 42);
position: absolute;
bottom: 3;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 70px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color:  rgb(29 78 216);
margin-bottom: 30px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: black;
	transition: 400ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
