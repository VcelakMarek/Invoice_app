import { ReactNode, useState } from "react";
import DropDownMenu from "./DropDownMenu";

type Props = {
  color?: "red" | "purple" | "grey" | "darkBlue" | "transparent";
  children?: ReactNode;
  dropDown?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  invoice?: boolean;
  DropDownMenu?: ReactNode;
  icon?: boolean;
};

const backgroundColor = {
  red: "bg-red hover:bg-red-hover",
  purple: "bg-purple hover:bg-purple-hover",
  grey: "bg-[#e6e8f5] hover:bg-light-grey",
  darkBlue: "bg-blue hover:bg-black",
  transparent: "",
};

const textColor = {
  red: "text-white",
  purple: "text-white",
  grey: "text-light-blue",
  darkBlue: "text-grey",
  transparent: "",
};

const Button = ({
  color = "transparent",
  dropDown,
  onClick,
  invoice,
  children,
  icon,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const border = !dropDown ? "rounded-full" : null;
  const dimensions = !icon
    ? `h-12 ${invoice ? "pl-2" : "pl-6"} pr-6`
    : " pl-5 pb-2";
  const text = "font-bold text-xs tracking-[1px]";
  const flex = "flex items-center gap-4";

  const baseClasses = [
    backgroundColor[color],
    textColor[color],
    border,
    dimensions,
    text,
  ];

  const dropDownClasses = [text, flex, "relative"];
  const invoiceClasses = baseClasses.concat(flex);

  const options = ["Draft", "Pendind", "Paid"];

  if (dropDown) {
    return (
      <>
        <button
          className={dropDownClasses.join(" ")}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {children}
          <img
            className={isOpen ? "rotate-180 duration-500" : "duration-500"}
            src="/Invoice_app/assets/icon-arrow-down.svg"
            alt="arrow-down"
          ></img>
        </button>
        {isOpen && <DropDownMenu options={options}></DropDownMenu>}
      </>
    );
  } else if (invoice) {
    return (
      <button className={invoiceClasses.join(" ")} onClick={onClick}>
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white">
          <img
            className="pl-px pt-px"
            src="/Invoice_app/assets/icon-plus.svg"
            alt="plus"
          ></img>
        </div>
        {children}
      </button>
    );
  } else {
    return (
      <button type="button" className={baseClasses.join(" ")} onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;
