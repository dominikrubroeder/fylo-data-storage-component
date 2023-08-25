interface IBackgroundGradient {
  level: 1 | 2 | 3;
  className?: string;
}
export default function BackgroundGradient({
  level,
  className,
}: IBackgroundGradient) {
  return level === 1 ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1232 257"
      fill="none"
      className={className}
    >
      <path
        opacity="0.400646"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1227.25 728.549C1251.25 599.149 1180.82 484.718 897.246 460.658C613.67 436.598 599.125 280.658 443.607 140.485C288.088 0.312012 4.21729 -98.2068 -75.3485 163.568C-154.914 425.343 -123.993 595.944 134.611 811.337C393.214 1026.73 665.435 982.223 777.927 965.669C890.419 949.115 1203.25 857.949 1227.25 728.549Z"
        fill="url(#paint0_linear_0_59)"
        fillOpacity="0.75"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_59"
          x1="991.532"
          y1="476.299"
          x2="762.987"
          y2="947.346"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E2D69" />
          <stop offset="0.999129" stopColor="#0C122C" stopOpacity="0.01" />
        </linearGradient>
      </defs>
    </svg>
  ) : level === 2 ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1260 420"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1255.25 617.549C1279.25 488.149 1208.82 373.718 925.246 349.658C641.67 325.598 627.125 169.658 471.607 29.4848C316.088 -110.688 32.2173 -209.207 -47.3485 52.5679C-126.914 314.343 -95.9926 484.944 162.611 700.337C421.214 915.73 693.435 871.223 805.927 854.669C918.419 838.115 1231.25 746.949 1255.25 617.549Z"
        fill="url(#paint0_linear_0_58)"
        fillOpacity="0.75"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_58"
          x1="1019.53"
          y1="365.299"
          x2="790.987"
          y2="836.346"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E2D69" />
          <stop offset="0.999129" stopColor="#0C122C" stopOpacity="0.01" />
        </linearGradient>
      </defs>
    </svg>
  ) : level === 3 ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1353 420"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1859.96 658.028C1893.24 478.633 1795.58 319.991 1402.33 286.636C1009.09 253.28 988.918 37.0911 773.255 -157.238C557.591 -351.567 163.937 -488.15 53.5996 -125.237C-56.7373 237.676 -13.8572 474.191 344.758 772.802C703.374 1071.41 1080.87 1009.71 1236.87 986.76C1392.87 963.81 1826.68 837.423 1859.96 658.028Z"
        fill="url(#paint0_linear_0_57)"
        fillOpacity="0.75"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_57"
          x1="1533.08"
          y1="308.32"
          x2="1216.29"
          y2="961.427"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E2D69" />
          <stop offset="0.999129" stopColor="#0C122C" stopOpacity="0.01" />
        </linearGradient>
      </defs>
    </svg>
  ) : null;
}
