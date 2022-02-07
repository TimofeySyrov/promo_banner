import React, { ReactPropTypes } from "react";

import styles from "./button.module.css";

interface ButtonProps extends ReactPropTypes {
  children: React.ReactNode;
  active: boolean;
  disabled: boolean;
}

const Button = ({
  children,
  active = false,
  disabled = false,
}: Partial<ButtonProps>) => {
  const getClassNames = (): string => {
    if (disabled) {
      return `${styles.button} ${styles.button_disabled}`;
    }

    if (!disabled && active) {
      return `${styles.button} ${active && styles.button_active}`;
    }

    return `${styles.button}`;
  };

  return <button className={getClassNames()}>{children}</button>;
};

export default Button;
