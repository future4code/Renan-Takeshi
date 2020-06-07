import styled from "styled-components";

export const MainContainer = styled.div`
  margin-left: 10px;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px 80px;
  grid-template-rows: 30px;
  gap: 5px;
  margin-bottom: 5px;
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
`;

export const Track = styled.tr`
  height: 30px;
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

export const Album = styled.col`
  width: 1fr;
`;

export const Artist = styled.col`
  width: 1fr;
`;

export const Add = styled.col`
  width: 70px;
`;
