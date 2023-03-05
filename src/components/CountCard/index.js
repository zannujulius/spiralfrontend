import CountUp from "react-countup";
import "./style.css";

const CountCard = ({ title, value }) => {
  return (
    <div className="bg-white drop-shadow-lg mt-6 rounded-md w-[90%] h-[200px] flex items-cener flex-col justify-center">
      <div className="font-Kanit font-light text-gray-800 text-[30px] text-center">
        {title}
      </div>
      <div className="font-bold text-gray-800 text-4xl text-center pt-3">
        <CountUp
          end={value}
          className="font-bold text-gray-800 text-4xl text-center pt-3"
          style={{}}
        />
      </div>
    </div>
  );
};

export default CountCard;
