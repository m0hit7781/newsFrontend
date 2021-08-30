import "../App.css";
import LocationCard from './LocationNews'

const LiveCard = () => {
  return (
    <div className="livecard">
      <div className="livecardtitle">
        <h3>Live</h3>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"
            fill="#C31815"
          />
          <path
            opacity="0.8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
            stroke="#C31815"
            strokeWidth="0.5"
          />
          <path
            opacity="0.4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27Z"
            stroke="#C31815"
            strokeWidth="0.5"
          />
        </svg>
      </div>
      <div className="livecardnews">
        <img src="./images/images.png" alt="" />
        <h2>Beloved Arizona coach loses battle with coronavirus</h2>
      </div>
        <LocationCard />
    </div>
  );
};

export default LiveCard;
