import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const CVLink = styled.a`
  width: 200px;
  height: 50px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 7rem;
  padding-right: 7rem;
  border-radius: 50px;
  font-size: 2.2rem;
  color: white;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    text-align: center;
    font-size: 1.5rem;
    padding-left: 5rem;
    padding-right: 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 40%;
    display: flex;
    text-align: center;
    font-size: 1.5rem;
    padding-left: 5rem;
    padding-right: 0;
  }
`

// export const CVLink = styled.a`
// 	position: relative;
// 	display: inline-block;
// 	padding: 1.2em 2em;
// 	text-decoration: none;
// 	text-align: center;
// 	cursor: pointer;
// 	user-select: none;
// 	color: white;
	
// 	&::before {
// 		content: 'GET CV';
// 		position: absolute;
// 		top: 0;
// 		left: 0;
// 		bottom: 0;
// 		right: 0;
// 		background: linear-gradient(135deg, #6e8efb, #a777e3);
// 		border-radius: 4px;
// 		transition: box-shadow .5s ease, transform .2s ease; 
// 		will-change: transform;
// 		box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
// 		transform:
// 			translateY(var(--ty, 0))
// 			rotateX(var(--rx, 0))
// 			rotateY(var(--ry, 0))
// 			translateZ(var(--tz, -12px));
// 	}
	
// 	&:hover::before {
// 		box-shadow: 0 5px 15px rgba(0, 0, 0, .3);
// 	}
	
// 	&::after {
// 		position: relative;
// 		display: inline-block;
// 		content: attr(data-title);
// 		transition: transform .2s ease; 
// 		font-weight: bold;
// 		letter-spacing: .01em;
// 		will-change: transform;
// 		transform:
// 			translateY(var(--ty, 0))
// 			rotateX(var(--rx, 0))
// 			rotateY(var(--ry, 0));
// 	}
// }

// body {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	height: 100vh;
// 	transform-style: preserve-3d;
// 	transform: perspective(800px);
// `
