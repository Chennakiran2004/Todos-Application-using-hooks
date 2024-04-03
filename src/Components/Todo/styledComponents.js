import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fbfe;
  height: 100vh;
  width: 80%;
  margin: auto;
`;

export const MainHeading = styled.h1`
  text-align: center;
  font-family: "Roboto";
  font-size: 46px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CreateTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const CreateTaskHeading = styled.h1`
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
`;

export const Span = styled.span`
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
`;

export const TodoUserInput = styled.input`
  background-color: white;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #e4e7eb;
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px;
  outline: none;
`;

export const Button = styled.button`
  color: white;
  background-color: #4c63b6;
  font-family: "Roboto";
  font-size: 18px;
  border-width: 0;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
  cursor: pointer;
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
