import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export const ReactIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className} {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <rect width="128" height="128" rx="20" fill="#3178C6"/>
    <path fill="#FFFFFF" d="M37.3 84.8V53.2H20.7V42.6h44.6v10.6H48.7v31.6H37.3zm47.2.8c-7.3 0-13-2.1-17.2-6.4-4.2-4.3-6.3-10.3-6.3-18 0-8 2.2-14.2 6.5-18.6 4.3-4.4 10.3-6.6 17.8-6.6 6.3 0 11.5 1.5 15.6 4.6 4.1 3.1 6.5 7.4 7.2 13H93.8c-.6-3-1.8-5.3-3.7-6.8-1.9-1.5-4.4-2.3-7.5-2.3-4.3 0-7.6 1.4-10 4.1-2.4 2.7-3.6 6.8-3.6 12.1 0 5.4 1.2 9.5 3.6 12.2 2.4 2.7 5.8 4 10.1 4 3.4 0 6.1-.8 8.1-2.4 2-1.6 3.2-4.1 3.7-7.4h14.2c-.8 6-3.3 10.7-7.6 14-4.3 3.3-9.9 4.9-16.8 4.9z"/>
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <rect width="128" height="128" rx="20" fill="#F7DF1E"/>
    <path fill="#000000" d="M67.3 90.9c2.6 4.3 6.1 7.1 11.9 7.1 5 0 8.2-2.5 8.2-5.9 0-4.1-3.3-5.6-8.8-8l-3-.1c-8.7-3.7-14.5-8.4-14.5-18.4 0-9.1 7-16 18-16 7.8 0 13.4 2.8 17.4 9.8l-8.6 5.5c-1.9-3.4-4.1-4.8-8.8-4.8-3.7 0-6.2 2.3-6.2 5.1 0 3.6 2.4 5 7.8 7.3l3 .1c10.3 4.4 15.9 9 15.9 19.3 0 11-8.7 17.2-20.4 17.2-11.4 0-18.5-5.5-22.1-12.8l8.2-5.5zM22.5 91.5l8.7-5.3c1.7 3 3.5 5.5 7.1 5.5 3.6 0 5.9-1.4 5.9-7V40.2h10.9v44.8c0 10.9-6.4 16-16.3 16-8.8 0-13.8-4.7-16.3-9.5z"/>
  </svg>
);

export const RustIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 106 106" fill="none" className={className} {...props}>
    <circle cx="53" cy="53" r="50" fill="#201815" stroke="#DEA584" strokeWidth="3"/>
    <g fill="#DEA584">
      <path d="M53 18a35 35 0 0 0-35 35 35 35 0 0 0 35 35 35 35 0 0 0 35-35A35 35 0 0 0 53 18zm0 8a27 27 0 1 1 0 54 27 27 0 0 1 0-54z"/>
      <path d="M42 36h22c4 0 7 2 7 6 0 3-2 5-5 6 4 1 6 3 6 7 0 5-4 8-9 8H42V36zm8 7v6h12c2 0 3-1 3-3s-1-3-3-3H50zm0 13v7h13c2 0 4-1 4-3.5S65 56 63 56H50z"/>
    </g>
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#3776AB" d="M63.5 12.3c-25.9 0-24.3 11.2-24.3 11.2l.03 11.6h24.8v3.5H32.6s-15.8 1.8-15.8 24.8 13.8 24.1 13.8 24.1h8.3V75.7c0-11.8 10.2-11.8 10.2-11.8h24.7s9.7-.1 9.7-9.5v-30s1.4-12.1-15.9-12.1zm-8.8 7.3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"/>
    <path fill="#FFD438" d="M64.5 115.7c25.9 0 24.3-11.2 24.3-11.2l-.03-11.6H64V89.4h31.4s15.8-1.8 15.8-24.8-13.8-24.1-13.8-24.1h-8.3v11.8c0 11.8-10.2 11.8-10.2 11.8H44.2s-9.7.1-9.7 9.5v30s-1.4 12.1 15.9 12.1zm8.8-7.3a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
  </svg>
);

export const NodeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#5FA04E" d="M64 10.6L14.7 39.1v56.9L64 124.5l49.3-28.5V39.1L64 10.6zm0 18.6l33.2 19.2v38.3L64 105.9 30.8 86.7V48.4L64 29.2z"/>
    <path fill="#339933" d="M64 39.1L40.7 52.6v27.1L64 93.1l23.3-13.4V52.6L64 39.1z"/>
  </svg>
);

export const NextJsIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <circle cx="64" cy="64" r="64" fill="#000000"/>
    <path fill="url(#next-grad)" d="M86.6 98.7L44.8 45.4h-7.6v37.2h6.2V54.4l38.2 48.8c1.7-1.4 3.4-3 5-4.5z"/>
    <rect x="78" y="45.4" width="6.2" height="25" fill="#FFFFFF"/>
    <defs>
      <linearGradient id="next-grad" x1="56" y1="62" x2="84" y2="98" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF"/>
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#06B6D4" d="M34.8 54.4c4.8-19.2 16.8-26.4 36-21.6 11.2 2.8 19.2 11 28 20 14.4 14.8 30.4 18 41.2 9.6-4.8 19.2-16.8 26.4-36 21.6-11.2-2.8-19.2-11-28-20-14.4-14.8-30.4-18-41.2-9.6zm-24 38.4c4.8-19.2 16.8-26.4 36-21.6 11.2 2.8 19.2 11 28 20 14.4 14.8 30.4 18 41.2 9.6-4.8 19.2-16.8 26.4-36 21.6-11.2-2.8-19.2-11-28-20-14.4-14.8-30.4-18-41.2-9.6z"/>
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#2496ED" d="M123.7 57.3c-2.4-1.7-7.8-1.5-12.1.7-1.1-6.8-6.1-11.7-13.4-12.8-1.3-.2-2.6-.2-3.8 0-1.7-11.2-10.8-16.3-11.3-16.6l-3.3-1.8-1.9 3.2c-2.9 4.9-3.5 11.4-1.6 17.5-3.3 1.9-6.3 4.5-8.8 7.6H8.7c-3.1 0-5.7 2.6-5.7 5.7v1.8c0 14.1 6.1 27.6 16.8 37 12 10.5 28.1 16.3 44.8 16.3 35.8 0 65.5-22.6 70.8-54.8.1-.8.2-1.6.2-2.4v-1.4h-11.9zM30.4 34.6H17.2v12.2h13.2V34.6zm16.5 0H33.7v12.2h13.2V34.6zm16.5 0H50.2v12.2h13.2V34.6zm16.5 0H66.7v12.2h13.2V34.6zm-49.5 15.4H17.2v12.2h13.2V50zm16.5 0H33.7v12.2h13.2V50zm16.5 0H50.2v12.2h13.2V50zm16.5 0H66.7v12.2h13.2V50zm16.5 0H83.2v12.2h13.2V50z"/>
  </svg>
);

export const PineconeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <rect width="100" height="100" rx="20" fill="#061E14"/>
    <path d="M50 15L70 30L50 45L30 30L50 15Z" fill="#10B981"/>
    <path d="M50 35L75 52L50 68L25 52L50 35Z" fill="#059669"/>
    <path d="M50 55L80 75L50 92L20 75L50 55Z" fill="#047857"/>
    <circle cx="50" cy="50" r="4" fill="#34D399"/>
  </svg>
);

export const OpenAIIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <rect width="128" height="128" rx="24" fill="#0f172a"/>
    <path fill="#10A37F" d="M101.4 56.4c-.8-6.1-4.2-11.5-9.3-15-2.8-1.9-6-3-9.4-3.4-.6-3.8-2.5-7.3-5.5-9.8-4.8-4-11.2-5.4-17.1-3.7-2.6.7-5 2.1-7.1 3.9-3.8-2.4-8.3-3.4-12.8-2.8-6.3.8-11.9 4.6-15.1 10.1-2.1 3.6-3 7.7-2.7 11.9-4.8 2.1-8.5 6-10.4 10.9-2.9 7.4-1.8 15.9 2.8 22.3.8 1.1 1.7 2.1 2.7 3-.8 6.1 4.2 11.5 9.3 15 2.8 1.9 6 3 9.4 3.4.6 3.8 2.5 7.3 5.5 9.8 4.8 4 11.2 5.4 17.1 3.7 2.6-.7 5-2.1 7.1-3.9 3.8 2.4 8.3 3.4 12.8 2.8 6.3-.8 11.9-4.6 15.1-10.1 2.1-3.6 3-7.7 2.7-11.9 4.8-2.1 8.5-6 10.4-10.9 2.9-7.4 1.8-15.9-2.8-22.3-.8-1.1-1.7-2.1-2.7-3zm-29.6 48.7c-3.7 0-7.3-1.1-10.3-3.2l7.1-4.1c1.5.9 3.2 1.3 4.9 1.3 5.4 0 9.8-4.4 9.8-9.8v-17l7.7 4.5v12.5c0 8.7-7.1 15.8-15.8 15.8H71.8zm-29.2-15.5c-2.4-3.6-3.5-7.9-3-12.2l7.7 4.4c.1 1.7.9 3.3 2.3 4.4 4.4 3.2 10.6 2.1 13.7-2.3l8.6-12.1 7.7 4.5-9.6 13.5c-5.2 7.3-15.2 9-22.5 3.8l-4.9-4.5zM36.1 57c1.3-4.1 4.1-7.5 7.9-9.6v8.9c-.9 1.4-1.3 3.1-1.1 4.8.5 5.4 5.3 9.3 10.7 8.8l14.8-1.4v8.9l-16.5 1.6c-8.9.8-16.7-5.7-17.5-14.6l1.7-7.4zm42.7-13.4c-4.4-3.2-10.6-2.1-13.7 2.3l-8.6 12.1-7.7-4.5 9.6-13.5c5.2-7.3 15.2-9 22.5-3.8l4.9 4.5 2.4 3.6c2.4 3.6 3.5 7.9 3 12.2l-7.7-4.4c-.1-1.7-.9-3.3-2.3-4.4l-2.4-4.1zM91.9 71c-1.3 4.1-4.1 7.5-7.9 9.6v-8.9c.9-1.4 1.3-3.1 1.1-4.8-.5-5.4-5.3-9.3-10.7-8.8l-14.8 1.4v-8.9l16.5-1.6c8.9-.8 16.7 5.7 17.5 14.6l-1.7 7.4z"/>
  </svg>
);

export const FirebaseIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#FFA000" d="M19.7 94.6L44.8 46.8c1.4-2.7 5.3-2.6 6.5.2l12.4 27.2-44 20.4z"/>
    <path fill="#F57C00" d="M69.8 28.5c-1.4-2.8-5.4-2.7-6.6.1L19.7 94.6l44-20.4L69.8 28.5z"/>
    <path fill="#FFCA28" d="M108.3 94.6L85.7 50.9c-1.4-2.7-5.3-2.6-6.5.2L19.7 94.6l44.3 24.8c2.6 1.4 5.7 1.4 8.3 0l36-24.8z"/>
  </svg>
);

export const MongoDbIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#47A248" d="M64 12.8c-1.7 0-3.3 1.1-4 2.8C52.2 33 28.8 56.4 28.8 83.2c0 23.9 19.3 43.2 43.2 43.2 1.3 0 2.7-.1 4-.2 15.3-1.6 28.8-12.8 33.6-27.6 5.6-17.1.6-36.8-11.6-50.8L64 12.8zm-.8 102.4c-1.9 0-3.2-1.3-3.2-3.2 0-21.7 5.7-43.2 16.5-62.2 1.1-1.9 3.6-2.6 5.5-1.5 1.9 1.1 2.6 3.6 1.5 5.5-10.1 17.6-15.4 37.6-15.4 58.2-.1 1.8-1.5 3.2-3.3 3.2h-1.6z"/>
  </svg>
);

export const AzureIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#008AD7" d="M37.8 19.4L10 82.2l28.6 26.4 57.6-19.4z"/>
    <path fill="#0078D4" d="M78.6 19.4L44.8 91.2l41.6 17.4 31.6-89.2z"/>
    <path fill="#50E6FF" d="M37.8 19.4l40.8 71.8H44.8L10 82.2z"/>
  </svg>
);

export const SqlIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <rect width="128" height="128" rx="20" fill="#1e293b"/>
    <path fill="#38BDF8" d="M64 24c-22.1 0-40 6.3-40 14v16c0 7.7 17.9 14 40 14s40-6.3 40-14V38c0-7.7-17.9-14-40-14zm0 8c17.7 0 32 4.5 32 6s-14.3 6-32 6-32-4.5-32-6 14.3-6 32-6z"/>
    <path fill="#0284C7" d="M24 62v16c0 7.7 17.9 14 40 14s40-6.3 40-14V62c-7.8 5-22.9 8-40 8s-32.2-3-40-8z"/>
    <path fill="#0369A1" d="M24 86v16c0 7.7 17.9 14 40 14s40-6.3 40-14V86c-7.8 5-22.9 8-40 8s-32.2-3-40-8z"/>
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#F05032" d="M121.2 56.4L71.6 6.8c-3.6-3.6-9.5-3.6-13.1 0L46.1 19.2l16.8 16.8c3.9-1.3 8.3-.4 11.4 2.7 3.1 3.1 4 7.5 2.7 11.4l16.1 16.1c3.9-1.3 8.3-.4 11.4 2.7 4.3 4.3 4.3 11.4 0 15.7-4.3 4.3-11.4 4.3-15.7 0-3.3-3.3-4.1-8-2.5-12.1L75.1 57.7v34.4c1.3.6 2.4 1.5 3.3 2.5 4.3 4.3 4.3 11.4 0 15.7-4.3 4.3-11.4 4.3-15.7 0-4.3-4.3-4.3-11.4 0-15.7.9-.9 2.1-1.7 3.3-2.2V57.1c-1.3-.6-2.4-1.5-3.3-2.5-3.3-3.3-4.1-8-2.5-12.1L43.8 25.7 6.8 62.7c-3.6 3.6-3.6 9.5 0 13.1l49.6 49.6c3.6 3.6 9.5 3.6 13.1 0l51.7-51.7c3.6-3.6 3.6-9.5 0-13.1z"/>
  </svg>
);

export const StripeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <rect width="128" height="128" rx="24" fill="#635BFF"/>
    <path fill="#FFFFFF" d="M57.4 51.5c0-4.7 3.9-6.4 10.3-6.4 9.2 0 20.8 3.5 30 8.5V26.2c-10.2-4.1-20.7-5.8-30.7-5.8-24.3 0-40.4 12.7-40.4 34 0 33.2 45.6 27.9 45.6 42.2 0 5.6-4.9 7.4-11.8 7.4-10.4 0-23.7-4.6-34.3-10.5v27.9c11.8 5.1 23.9 7.2 35.1 7.2 24.8 0 42.2-12.3 42.2-34.3-.2-35.8-46-29.3-46-42.8z"/>
  </svg>
);

export const LinuxIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#FFA500" d="M64 116c20 0 32-12 32-24s-12-16-32-16-32 4-32 16 12 24 32 24z"/>
    <path fill="#202020" d="M64 16c-17.7 0-32 17.9-32 40 0 14.3 6.1 26.8 15.3 33.7C44.8 92.4 43 97 43 102c0 6.6 9.4 12 21 12s21-5.4 21-12c0-5-1.8-9.6-4.3-12.3 9.2-6.9 15.3-19.4 15.3-33.7 0-22.1-14.3-40-32-40z"/>
    <ellipse cx="64" cy="72" rx="20" ry="24" fill="#FFFFFF"/>
    <circle cx="54" cy="46" r="4" fill="#FFFFFF"/>
    <circle cx="74" cy="46" r="4" fill="#FFFFFF"/>
    <circle cx="55" cy="46" r="2" fill="#000000"/>
    <circle cx="73" cy="46" r="2" fill="#000000"/>
    <path d="M60 54l4 6 4-6z" fill="#FFA500"/>
  </svg>
);

export const CSharpIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <path fill="#9B4F96" d="M64 10L14 39v62l50 29 50-29V39L64 10z"/>
    <path fill="#FFFFFF" d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c10.4 0 19.5-5.7 24.3-14.1l-10.4-5.3C74.6 77.2 69.6 80 64 80c-8.8 0-16-7.2-16-16s7.2-16 16-16c5.6 0 10.6 2.8 13.9 7.4l10.4-5.3C83.5 41.7 74.4 36 64 36zm28 22h4v4h-4v6h6v4h-6v6h-4v-6h-6v-4h6v-6h-4v-4h4v-6h4v6zm-6 4v6h6v-6h-6z"/>
  </svg>
);

export const JavaIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <rect width="128" height="128" rx="20" fill="#0c1a29"/>
    <path fill="#E76F00" d="M47.2 91.5s-4.3 2.5 3.1 3.5c9 1.1 14.1 1 24.4-.9 0 0 3.5 2.2 8.4 4.1-23.7 9.8-49.8-1.5-35.9-6.7zm-2.4-13.9s-4.9 3.6 2.5 4.7c10.1 1.4 18 1.5 31.6-1.3 0 0 2.5 2.6 6.3 4.3-28.7 8.7-55.3.3-40.4-7.7z"/>
    <path fill="#5382A1" d="M66.4 53.6c4.6 5.3-1.2 10.2-1.2 10.2s11.5-5.9 6.2-13.4c-5-7.1-9.3-10.6 12.5-22.4-23.4 5.3-22.1 20.3-17.5 25.6zM88 77.3c6.2-7.1 3.4-13.4 3.4-13.4s.8 4.2-4.5 8c-6.6 4.7-18.7 8.8-37.4 9.1-8.9.1-15.6-.9-15.6-.9s4.8 2.2 13.9 2.5c23.2.7 34-1.2 40.2-5.3z"/>
    <path fill="#E76F00" d="M60.6 107.5c15.2-1 23.8-5.7 23.8-5.7s-3.3 2.3-9.5 3.9c-10.7 2.8-25.2 2.3-34.9-.7 0 0 2.2 2.1 8 2.9 4.3.5 8.3.7 12.6-.4z"/>
  </svg>
);

export const WasmIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className} {...props}>
    <rect width="128" height="128" rx="20" fill="#654FF0"/>
    <path fill="#FFFFFF" d="M22 84L38 44h10l8 24 8-24h10L90 84H78l-5-16-7 16H54l-7-16-5 16H22zm70-3h14c5 0 9-3 9-8s-4-8-9-8h-6v-4h6c3 0 6-2 6-5s-3-5-6-5h-14v30z"/>
  </svg>
);

// ==========================================
// Official Knolink & System Brand Marks
// ==========================================

export const KnolinkIcon: React.FC<IconProps> = ({ className = "w-6 h-5", size = 24, ...props }) => {
  const numSize = typeof size === "number" ? size : parseFloat(String(size)) || 24;
  const height = (numSize * 20) / 24;
  return (
    <svg width={size} height={height} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect x="2" y="0" width="4" height="4" rx="0.5" fill="#FFAF01"/>
      <rect x="18" y="0" width="4" height="4" rx="0.5" fill="#FFAF01"/>
      <rect x="6" y="2" width="12" height="4" fill="#FF8204"/>
      <rect x="4" y="4" width="16" height="4" fill="#FF8204"/>
      <rect x="2" y="8" width="20" height="4" fill="#FA500F"/>
      <rect x="6" y="8" width="3" height="3" fill="#111111"/>
      <rect x="7" y="8.5" width="1" height="1" fill="#FFFFFF"/>
      <rect x="15" y="8" width="3" height="3" fill="#111111"/>
      <rect x="16" y="8.5" width="1" height="1" fill="#FFFFFF"/>
      <rect x="4" y="12" width="16" height="4" fill="#ff5229"/>
      <rect x="10.5" y="12" width="3" height="2" rx="0.5" fill="#111111"/>
      <rect x="4" y="13" width="2" height="2" fill="#FFAF01" opacity="0.8"/>
      <rect x="18" y="13" width="2" height="2" fill="#FFAF01" opacity="0.8"/>
      <rect x="6" y="16" width="12" height="4" fill="#E61300"/>
      <rect x="4" y="16" width="3" height="3" fill="#C4001D"/>
      <rect x="17" y="16" width="3" height="3" fill="#C4001D"/>
    </svg>
  );
};

export const ApolemiaIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <rect width="100" height="100" rx="20" fill="#1E1605"/>
    <path d="M50 15L85 35V65L50 85L15 65V35L50 15Z" stroke="#FFAF01" strokeWidth="6" fill="none"/>
    <path d="M50 30L70 42V58L50 70L30 58V42L50 30Z" fill="#FFAF01"/>
    <path d="M50 15V85M15 35L85 65M15 65L85 35" stroke="#FF8204" strokeWidth="3" opacity="0.6"/>
    <circle cx="50" cy="50" r="8" fill="#FFFFFF"/>
  </svg>
);

export const EntropyIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <rect width="100" height="100" rx="20" fill="#031526"/>
    <path d="M35 25L15 50L35 75" stroke="#0082E6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M65 25L85 50L65 75" stroke="#0082E6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M58 20L42 80" stroke="#50E6FF" strokeWidth="6" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="4" fill="#FFFFFF"/>
  </svg>
);

export const PraxisIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <rect width="100" height="100" rx="20" fill="#240A05"/>
    <circle cx="50" cy="25" r="10" fill="#ff5229"/>
    <circle cx="25" cy="55" r="8" fill="#FF8204"/>
    <circle cx="75" cy="55" r="8" fill="#FF8204"/>
    <circle cx="20" cy="80" r="6" fill="#FFAF01"/>
    <circle cx="40" cy="80" r="6" fill="#FFAF01"/>
    <circle cx="60" cy="80" r="6" fill="#FFAF01"/>
    <circle cx="80" cy="80" r="6" fill="#FFAF01"/>
    <path d="M50 25L25 55M50 25L75 55M25 55L20 80M25 55L40 80M75 55L60 80M75 55L80 80" stroke="#ff5229" strokeWidth="3" strokeOpacity="0.8"/>
  </svg>
);

export const KnolinkCloudIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <rect width="100" height="100" rx="20" fill="#0C1026"/>
    <path d="M72 42a18 18 0 0 0-35-5 13 13 0 0 0-17 13 13 13 0 0 0 1 5A16 16 0 0 0 32 82h38a16 16 0 0 0 2-32v-8z" fill="#6366F1"/>
    <path d="M42 62l8-8 8 8M50 54v18" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const KnolinkChatIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <rect width="100" height="100" rx="20" fill="#061E14"/>
    <path d="M25 25h50a8 8 0 0 1 8 8v30a8 8 0 0 1-8 8H40l-15 12V33a8 8 0 0 1 8-8z" fill="#10B981"/>
    <circle cx="40" cy="48" r="4" fill="#FFFFFF"/>
    <circle cx="50" cy="48" r="4" fill="#FFFFFF"/>
    <circle cx="60" cy="48" r="4" fill="#FFFFFF"/>
  </svg>
);

export const PachIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <rect width="100" height="100" rx="20" fill="#1A0E2A"/>
    <path d="M20 30L50 50L80 30M20 30v40a5 5 0 0 0 5 5h50a5 5 0 0 0 5-5V30a5 5 0 0 0-5-5H25a5 5 0 0 0-5 5z" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="50" cy="52" r="10" fill="#C084FC"/>
    <path d="M50 48v8" stroke="#1A0E2A" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const RootsButcheryIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <rect width="100" height="100" rx="20" fill="#0C1D13"/>
    <path d="M25 30h10l8 32h28l8-24H38" stroke="#10B981" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="45" cy="72" r="6" fill="#34D399"/>
    <circle cx="68" cy="72" r="6" fill="#34D399"/>
  </svg>
);

export const Dec2BinIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} {...props}>
    <rect width="100" height="100" rx="20" fill="#0F172A"/>
    <text x="18" y="42" fill="#38BDF8" fontFamily="monospace" fontSize="24" fontWeight="bold">10</text>
    <path d="M50 35l10 15-10 15M38 50h22" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round"/>
    <text x="65" y="70" fill="#34D399" fontFamily="monospace" fontSize="22" fontWeight="bold">01</text>
  </svg>
);
