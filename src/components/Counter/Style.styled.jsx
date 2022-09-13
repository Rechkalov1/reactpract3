import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  padding: 100px;
  align-items: center;
`;

export const CounterSpan = styled.span`
  font-size: 24px;
  color: green;
  margin-right: 15px;
`;
export const StyleButton = styled.button`
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: green;
    font-size:16px;
    font-weight: 500;
  }
`;
