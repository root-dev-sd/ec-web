const Schedule = () => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <span className="text-lg text-cyan-600 font-bold my-5">Schedule</span>
      <div className="flex flex-row border-2 border-emerald-500 rounded-xl">
        <div className="text-sm font-bold py-2 px-10 tracking-wider text-emerald-500 border-e-2 border-emerald-500">
          Previous
        </div>
        <div className="text-sm font-bold py-2 px-10 tracking-wider text-emerald-500">
          Upcoming
        </div>
      </div>
    </div>
  );
};

export default Schedule;
