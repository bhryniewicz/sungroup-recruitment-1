import { ReactNode } from "react";

export const ListItem = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <li
      className="text-gray hover:text-[#5086F2] cursor-pointer text-sm"
      onClick={onClick}
    >
      {children}
    </li>
  );
};
