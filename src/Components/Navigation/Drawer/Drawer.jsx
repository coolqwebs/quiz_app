import React, { Component } from "react";
import styles from "./Drawer.module.css";
import { NavLink } from "react-router-dom";
import BackDrop from "../../UI/BackDrop/BackDrop";

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  };
  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={styles.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }
  render() {
    const cls = [styles.Drawer];

    if (!this.props.isOpen) {
      cls.push(styles.close);
    }

    let links = [
      { to: "/", label: "Список Тестов", exact: true },
      { to: "/lesson-list", label: "Список Уроков", exact: false },
    ];

    if (this.props.isAuthentificated) {
      links.push({
        to: "/quiz-creator",
        label: "Создать тест",
        exact: false,
      });
      links.push({
        to: "/lesson-creator",
        label: "Создать Урок",
        exact: false,
      });
      links.push({
        to: "/logout",
        label: "Выйти",
        exact: false,
      });
    } else {
      links.push({ to: "/auth", label: "Авторизация", exact: false });
    }
    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <BackDrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
