import styled from "styled-components";


export const MainContainer = styled.div`
  margin-left: 10px;
`;

export const Header = styled.h2`
  text-align: center;
  text-decoration: underline;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 3) 50px;
  grid-auto-flow: column;
  gap: 5px;
  margin-bottom: 5px;
`;

export const MusicItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 80px;
  grid-auto-flow: column;
`;

export const Track = styled.audio`
  height: 30px;
`;