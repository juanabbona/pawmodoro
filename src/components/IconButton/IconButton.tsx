import "./IconButton.css";

import classNames from "classnames";
import { IconButtonProps } from "./IconButton.types";

const IconButton = ({
  size = "small",
  color = "light",
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      {...props}
      className={classNames("icon-button", size, color, className)}
    />
  );
};

export default IconButton;
