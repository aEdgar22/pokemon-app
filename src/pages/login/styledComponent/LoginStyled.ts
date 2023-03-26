import styled from "styled-components";

export const StyledLoginCard = styled.div`

  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid yellow;
  border-radius: 10px;
  width: 30%;
  height: 30rem;
  padding: 2rem;
  position: relative;

  animation: changeColor 10s infinite;

  @keyframes changeColor {
    0% {
      box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.5),
        inset 0 0 5px 2px rgba(255, 255, 255, 0.5);
    }
    25% {
      box-shadow: 0 0 5px 2px rgba(236, 16, 16, 0.5),
        inset 0 0 5px 2px rgba(236, 16, 16, 0.5);
    }
    50% {
      box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.5),
        inset 0 0 5px 2px rgba(255, 255, 255, 0.5);
    }
    75% {
      box-shadow: 0 0 5px 2px rgba(16, 81, 236, 0.5),
        inset 0 0 5px 2px rgba(16, 81, 236, 0.5);
    }
    100% {
      box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.5),
        inset 0 0 5px 2px rgba(255, 255, 255, 0.5);
    }
  }

  @media (max-width: 900px) {
    width: 80%;
    margin-top: 4rem;
    padding: 1rem;
  }

  @media (max-width: 768px) {

    margin-top: 0rem;
 
  }
`;
