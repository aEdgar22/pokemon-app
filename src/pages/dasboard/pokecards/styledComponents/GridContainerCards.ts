import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
`;