import { NavLink } from "react-router";

const Footer = () => {
  return (
    <>
      <nav className="flex flex-row justify-around bg-emerald-500 p-1">
        <NavLink
          to="/more"
          end
          className="flex flex-col items-center text-white text-xs font-bold transition-all duration-700 focus:-translate-y-4"
        >
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white">
            <svg
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#40bf82"
            >
              <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
            </svg>
          </div>
          <span>More</span>
        </NavLink>

        <NavLink
          to="/records"
          end
          className="flex flex-col items-center text-white text-xs font-bold transition-all duration-700 focus:-translate-y-4"
        >
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white">
            <svg
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#40bf82"
            >
              <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
          </div>
          <span>Records</span>
        </NavLink>

        <NavLink
          to="/schedule"
          end
          className="flex flex-col items-center text-white text-xs font-bold transition-all duration-700 focus:-translate-y-4"
        >
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white">
            <svg
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#40bf82"
            >
              <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
            </svg>
          </div>
          <span>Schedule</span>
        </NavLink>

        <NavLink
          to="/services"
          end
          className="flex flex-col items-center text-white text-xs font-bold transition-all duration-700 focus:-translate-y-4"
        >
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white">
            <svg
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#40bf82"
            >
              <path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm0-80h640v-480H160v480Zm240-560h160v-80H400v80ZM160-160v-480 480Zm280-200v120h80v-120h120v-80H520v-120h-80v120H320v80h120Z" />
            </svg>
          </div>
          <span>Services</span>
        </NavLink>

        <NavLink
          to="/home"
          end
          className="flex flex-col items-center text-white text-xs font-bold transition-all duration-700 focus:-translate-y-4"
        >
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white">
            <svg
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#40bf82"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </div>
          <span>Home</span>
        </NavLink>
      </nav>
      <footer className="flex flex-col text-center text-[1ch] text-gray-400">
        <span>more services</span>
        <span>
          this Applecation in provided protected and sponsered by @elite care
        </span>
      </footer>
    </>
  );
};

export default Footer;
