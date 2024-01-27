import React from "react";

const Render = ({ mainTask, setmainTask}) => {
  const deleteHandler = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index,1);
    setmainTask(copyTask)

  }
  return (
    <>
      {mainTask.length > 0 ? (
        mainTask.map((task, index) => {
          return (
            <li key={index} className="flex justify-between items-center">
              <div className="flex items-center justify-between mb-5 w-2/3">
                <h5 className="text-2xl font-semibold">{task.title}</h5>
                <h6 className="text-xl font-semibold">{task.desc}</h6>
              </div>
              <button
                onClick={() => {
                  deleteHandler(index)
                }}
                className="py-2 px-4 rounded bg-zinc-800 text-white font-bold"
              >
                Delete
              </button>
            </li>
          );
        })
      ) : (
        <h2>No Task Available</h2>
      )}
    </>
  );
};

export default Render;

