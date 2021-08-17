import React, { FC, ButtonHTMLAttributes } from 'react';

const defaultButtonStyle =
  'inline-flex outline-none no-underline justify-center items-center transition-colors rounded-lg font-semibold cursor-pointer border px-6 py-3';

const buttonStyles = {
  primary: `${defaultButtonStyle} bg-info text-white focus:shadow-sm focus:border-white hover:bg-info-dark`,
  secondary: `${defaultButtonStyle} bg-info-light text-info-dark focus:shadow-sm border-white focus:border-white hover:bg-info-lighter`,
  disabled: '',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styling?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, styling = 'primary', ...rest }) => (
  <button className={buttonStyles[rest.disabled === true ? 'disabled' : styling]} {...rest}>
    {children}
  </button>
);
