import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-template-rows: 30px;
  gap:5px;
  height: 30px;
`;

export const PlaylistItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  border: 1px solid black;
  margin-top: 5px;
`;

export const Name = styled.span`
  cursor: pointer;
  padding-left: 5px;
`;

export const DelButton = styled.span`
  color: red;
  cursor: pointer;
  padding-right: 5px;
`;
