interface IconProps {
  className?: string;
}

export const HeardsIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="auto"
      height="100%"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <path
        d="M30.038,12.993l0.377-0.32C33.018,10.283,36.572,9,40.395,9c7.562,0,13.783,5.712,14.531,13.033"
        stroke="rgb(85,66,57)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.965,49.951c-9.248-8.208-12.07-12.297-11.971-16.613c0.109-4.762,4.028-8.457,8.738-8.349c3.213,0.074,5.956,1.857,7.349,4.544
      c0.783-1.355,3.221-4.487,7.887-4.516c4.863,0.112,8.12,4.29,8.011,9.053c-0.103,8.792-21.802,24.628-21.802,24.628
      S6,37.098,6,23.517C6,15.499,12.54,9,20.606,9c0.023,0,0.045,0,0.069,0c0.282,0.001,0.564,0.012,0.843,0.032
      c3.469,0.245,6.217,1.339,8.482,3.961"
        stroke="rgb(85,66,57)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
