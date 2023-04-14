import "./styles.css";

export default function App() {
  return (
    <div className="bg-gray">
      <Spin size="small" />
    </div>
  );
}

const Spin = ({ size }) => (
  <div className={` ${size !== "small" ? "spainLg" : ""}`}>
    {size === "small" && (
      <svg
        className="animation"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
        <circle cx="25" cy="25" r="18.5" fill="white" />
        <path
          d="M46.856 23.8546C48.5735 23.7646 50.0589 25.0881 49.9349 26.8034C49.7686 29.1026 49.2847 31.3728 48.4931 33.5485C47.3456 36.7019 45.575 39.5921 43.2868 42.0468C40.9986 44.5014 38.2397 46.4703 35.1744 47.836C32.1091 49.2017 28.8003 49.9363 25.445 49.996C22.0898 50.0558 18.7569 49.4394 15.645 48.1837C12.533 46.928 9.70572 45.0586 7.3316 42.6869C4.95748 40.3153 3.08513 37.49 1.82614 34.3793C0.957549 32.2333 0.393171 29.9818 0.145135 27.6899C-0.0399134 25.9801 1.39749 24.6045 3.11706 24.6333V24.6333C4.83663 24.6621 6.18081 26.0884 6.43634 27.7891C6.65496 29.2442 7.04445 30.6722 7.59919 32.0428C8.54454 34.3785 9.95045 36.5 11.7331 38.2808C13.5158 40.0616 15.6388 41.4653 17.9755 42.4082C20.3122 43.3511 22.8148 43.8139 25.3342 43.769C27.8536 43.7242 30.3381 43.1726 32.6398 42.1471C34.9414 41.1216 37.0131 39.6432 38.7312 37.8001C40.4494 35.9569 41.7789 33.7868 42.6405 31.4189C43.1461 30.0294 43.4845 28.5885 43.6512 27.1265C43.846 25.4178 45.1386 23.9446 46.856 23.8546V23.8546Z"
          fill="url(#paint0_linear_1_10)"
        />
        <ellipse cx="28" cy="25.25" rx="22" ry="20.75" fill="#D9D9D9" />
        <path
          d="M46 24.75C46 35.9338 36.9338 45 25.75 45C14.5662 45 5.5 35.9338 5.5 24.75C5.5 13.5662 14.5662 4.5 25.75 4.5C36.9338 4.5 46 13.5662 46 24.75Z"
          fill="#808080"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_10"
            x1="4.75"
            y1="36.5"
            x2="44.5"
            y2="39.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D72996" />
            <stop offset="0.412994" stop-color="#CF365B" />
            <stop offset="1" stop-color="#B33AC2" />
          </linearGradient>
        </defs>
      </svg>
    )}
  </div>
);
