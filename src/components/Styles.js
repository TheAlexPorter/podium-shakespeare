import styled from 'styled-components/macro';

const gutter = 30;
const maxWidth = '1300px';
const yellow = 'rgb(255, 224, 0)';

export const Body = styled.div`
  font-family: 'MedievalSharp', cursive;
  max-width: ${maxWidth};
  margin: 0 auto;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: ${gutter * 2}px;
  text-shadow: 2px 2px 0 white;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${gutter * 3}px;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const Shakespeare = styled.div`
  max-width: 700px;
  margin-right: 60px;

  img {
    width: 100%;
    transform: rotateY(180deg);
  }

  @media (max-width: 770px) {
    max-width: 200px;
    margin: 0 auto;
  }
`;

export const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuoteText = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  padding: 40px;
  width: 600px;
  min-height: 250px;

  @media (max-width: 1100px) {
    width: 450px;
  }

  @media (max-width: 900px) {
    width: 350px;
  }

  @media (max-width: 770px) {
    padding: 40px 5px;
    width: unset;
  }

  h1 {
    padding: 0;
    text-align: justify;
    font-size: 35px;
    line-height: 1.3;
    background-color: ${yellow};
    padding: 10px 20px;
    border-radius: 2px;
  }

  span {
  }

  &:before {
    content: '"';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    font-size: 100px;
    color: ${yellow};
    height: 50px;
    text-shadow: 3px 3px 0 white;
  }

  &:after {
    content: '"';
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    font-size: 100px;
    color: ${yellow};
    height: 50px;
    text-shadow: 3px 3px 0 white;
  }
`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-top: ${gutter}px;
  padding: 8px 20px;
  line-height: 0;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  span {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  &:hover {
    color: white;
    background-color: black;
  }

  &:hover div img {
    transform: translateY(-5px);
  }
`;

export const ScrollImage = styled.div`
  position: relative;
  width: 40px;
  margin-right: 10px;

  img {
    width: 100%;
    transition: all 0.15s ease-in-out;
  }
`;
