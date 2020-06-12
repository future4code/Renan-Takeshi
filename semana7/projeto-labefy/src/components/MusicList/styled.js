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
  grid-template-columns: repeat(3, 1fr) 80px;
  grid-template-rows: 30px;
  gap: 5px;
  margin-bottom: 5px;
`;

export const Audio = styled.audio`
  height: 30px;
  width: 250px;
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
`;

export const Track = styled.tr`
  &:nth-child(odd) {
    background-color: #f5f5f5;
  }
  &:hover {
    background-color: #dddddd;
  }
`;

export const Song = styled.col`
  width: 1fr;
`;

export const Artist = styled.col`
  width: 1fr;
`;

export const Control = styled.col`
  width: 250px;
`;

export const Remove = styled.col`
  width: 70px;
`;
