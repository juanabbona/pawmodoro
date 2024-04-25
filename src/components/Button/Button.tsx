import classNames from "classnames";
import "./Button.css";
import { ButtonProps } from "./Button.types";

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button className={classNames("button", className)} {...(props as any)} />
  );
};

export default Button;
