import { CloseIconProps } from '@/types/IconTypes';

export function CloseIcon(props: CloseIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="14" y1="6" x2="6" y2="14" />
      <line x1="6" y1="6" x2="14" y2="14" />
    </svg>
  );
}
