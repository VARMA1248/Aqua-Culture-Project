import type { SVGProps } from 'react';

export function FishIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.5 19.5C18.7 18.1 20 15.8 20 13c0-3.9-3.1-7-7-7s-7 3.1-7 7c0 2.8 1.3 5.1 3.5 6.5" />
      <path d="M18 13c0-2.8-2.2-5-5-5" />
      <path d="M11.5 13.5C11.5 13.5 13 15 15 15" />
      <path d="M19 8s1.5-2.5 3-2" />
      <path d="M5 8s-1.5-2.5-3-2" />
      <path d="M9 19c-1 2-3.5 2.5-5 1" />
    </svg>
  );
}
