import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: linear-gradient(to right, #4FD1C5, #234E52);
    color: #f8f8f8;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 7.5rem 5rem;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 5rem 'Poppins', sans-serif;
      line-height: 2.625rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 2rem;
      line-height: 2rem;
      margin-top: 1rem;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;
    background: #f8f8f8;

    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  align-items: stretch;
  text-align: center;

  svg {
    width: 80px;
    height: 80px;
  }

  > img {
    align-self: center;
  }

  form {
    input {
      height: 3.125rem;
      border-radius: 0.5rem;
      background: #fff;
      border: 1px solid #a8a8b3;
      padding-left: 1rem;
    }

    button {
      margin-top: 1rem;
    }

    button,
    input {
      width: 100%;
    }
  }
`;

export const ButtonGoogle = styled.button`
  img {
      width: 24px;
      height: 24px;
      margin-right: 0.5rem;
    }

    height: 3.125rem;
    background-color: var(--teal-500);
    border: 1px solid var(--teal-500);
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
`;

export const Separator = styled.div`
  font-size: 0.875rem;
  color: #a8a8b3;

  margin: 2rem 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #a8a8b3;
    margin-right: 1rem;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #a8a8b3;
    margin-left: 1rem;
    }
`;

export const IconLogo = styled.div`
  svg {
    color: var(--blue-300)
  }
  color: var(--teal-300);
`;