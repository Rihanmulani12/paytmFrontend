import React from "react";

export const AppBar = () => {
  return (
    <div className="shadow h-14 flex justify-between lg:px-16 px-4  shadow-lg bg-slate-950">
      <div className="flex flex-col justify-center h-full ml-6 font-bold text-slate-200">PayTM App</div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center h-full mr-4 font-bold text-slate-200">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>
    </div>
  );
};