import styled from "styled-components";

export const MainContainer = styled.div`
  margin-left: 10px;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px;
  grid-auto-flow: column;
  gap: 5px;
  margin-bottom: 5px;
`;

export const SpotifyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;
