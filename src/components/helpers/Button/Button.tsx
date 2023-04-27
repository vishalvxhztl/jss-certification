// Global
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { classnames } from 'tailwindcss-classnames';
import { tv } from 'tailwind-variants';

export const BUTTON_TYPES = [
  'default',
  'secondary',
  'abort',
  'errorblack',
  'errorwhite',
  'success',
  'warning',
];

interface Props {
  auto?: boolean;
  disabled?: boolean;
  iconLeft?: string;
  iconRight?: string;
  id?: string;
  label?: string;
  loading?: boolean;
  onClick?: MouseEventHandler;
  ref?: Ref<HTMLButtonElement | null>;
  tag?: string;
  title?: string;
  type: string;
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;

export type ButtonProps = Props & NativeAttrs;

const buttonSlots = tv({
  slots: {
    spinner: classnames('animate-spin'),
    text: classnames(
      'gap-4',
      'h-10',
      'inline-flex',
      'items-center',
      'justify-center',
      'leading-10',
      'relative',
      '-top-px'
    ),
  },
});

const buttonVariants = tv({
  base: classnames(
    'disabled:bg-gray-light',
    'disabled:cursor-not-allowed',
    'disabled:text-gray',
    'enabled:duration-150',
    'enabled:transition',
    'hover:ease-in',
    'h-10',
    'inline-block',
    'leading-10',
    'py-0',
    'px-4',
    'rounded-md',
    'text-center',
    'whitespace-nowrap'
  ),
  defaultVariants: {
    type: 'default',
  },
  variants: {
    type: {
      default: classnames(
        'bg-primary',
        'hover:text-theme-btn-primary-text/50',
        'text-theme-btn-primary-text'
      ),
      secondary: classnames('bg-rose-dark', 'hover:text-white/50', 'text-white'),
      abort: classnames('bg-salmon'),
      errorblack: classnames('bg-error-black', 'hover:text-white/50', 'text-white'),
      errorwhite: classnames('bg-error-white', 'hover:text-white/50', 'text-white'),
      success: classnames('bg-beige', 'hover:text-black/50', 'text-black'),
      warning: classnames('bg-orange', 'hover:text-white/50', 'text-white'),
    },
    minWidth: {
      true: classnames('min-w-[10rem]'),
    },
  },
});

const Button = ({
  auto = false,
  disabled = false,
  iconLeft,
  iconRight,
  id,
  label,
  loading = false,
  onClick = () => {},
  ref,
  tag = 'button',
  title,
  type = 'default',
}: ButtonProps) => {
  const { spinner, text } = buttonSlots();
  const children = (
    <>
      <div className={text()}>
        {iconLeft && <FontAwesomeIcon icon={FaIcons[iconLeft]} />}
        {loading && <FontAwesomeIcon className={spinner()} icon={FaIcons['faSpinner']} />}
        {label && !loading && label}
        {iconRight && <FontAwesomeIcon icon={FaIcons[iconRight]} />}
      </div>
    </>
  );
  const className = buttonVariants({ minWidth: !auto, type });

  return React.createElement(
    tag,
    { className, disabled, id, onClick: () => onClick(), ref, title },
    children
  );
};

export default Button;
