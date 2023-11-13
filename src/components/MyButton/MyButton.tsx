import React from "react";

export interface MyButtonProps {
  label: string;
  onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default MyButton;
