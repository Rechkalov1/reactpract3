import React, { Component } from "react";
import css from './Dropdown.module'
export class Dropdown extends Component {
  render() {
    return (
      <div className={css.Dropdown}>
        <button type="button" className="Dropdown__toggle">
          Показать
        </button>
        <div className="Dropdown__menu">Выпадающее меню</div>
      </div>
    );
  }
}
