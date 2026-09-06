import { WorkSteps } from "../components/WorkSteps.jsx";
export const WorkStep = () => {
  return (
    <div className=" min-h-screen bg-[#030505] text-white">
      <WorkSteps />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-mono text-3xl font-black uppercase sm:text-5xl">
          Enjoy Your.
          <span className="text-emerald-400 ml-32"><br/> Credits Now.</span>
        </h2>
      </div>
    </div>
  );
};