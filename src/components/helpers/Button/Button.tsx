// Global
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const STYLES = {
  button:
    'disabled:bg-gray-light disabled:cursor-not-allowed disabled:text-gray enabled:duration-150 enabled:transition hover:ease-in h-10 inline-block leading-10 py-0 px-4 rounded-md text-center whitespace-nowrap',
  label: 'gap-4 h-10 inline-flex items-center justify-center leading-10 relative -top-px',
  loading: 'animate-spin',
  minWidth: 'min-w-[10rem]',
  type: {
    default: 'bg-primary hover:text-theme-btn-primary-text/50 text-theme-btn-primary-text',
    secondary: 'bg-rose-dark hover:text-white/50 text-white',
    abort: 'bg-salmon',
    errorblack: 'bg-error-black hover:text-white/50 text-white',
    errorwhite: 'bg-error-white hover:text-white/50 text-white',
    success: 'bg-beige hover:text-black/50 text-black',
    warning: 'bg-orange hover:text-white/50 text-white',
  },
};

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
  type: string;
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;

export type ButtonProps = Props & NativeAttrs;

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
  type = 'default',
}: ButtonProps) => {
  const children = (
    <>
      <div className={STYLES.label}>
        {iconLeft && <FontAwesomeIcon icon={FaIcons[iconLeft]} />}
        {loading && <FontAwesomeIcon className={STYLES.loading} icon={FaIcons['faSpinner']} />}
        {label && !loading && label}
        {iconRight && <FontAwesomeIcon icon={FaIcons[iconRight]} />}
      </div>
    </>
  );
  const className = `${STYLES.button} ${STYLES.type[type]} ${!auto && STYLES.minWidth}`;

  return React.createElement(
    tag,
    { className, disabled, id, onClick: () => onClick(), ref },
    children
  );
};

export default Button;
