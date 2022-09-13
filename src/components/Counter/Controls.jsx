import React from "react";
import { StyleButton } from "./Style.styled";
export const Controls = ({ onIncrement, onDecrement }) => (
  <div>
    <StyleButton type="button" onClick={onIncrement}>
      Увеличить на 1
    </StyleButton>
    <StyleButton type="button" onClick={onDecrement}>
      Уменьшить на 1
    </StyleButton>
  </div>
);
