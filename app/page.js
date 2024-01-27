  "use client";
  import React, { useState } from "react";
  // import RenderTask = '../components/Render.js'
  import Render from "../components/Render"
  const page = () => {
    const [title, constTitle] = useState("");
    const [desc, setdesc] = useState("");
    const [mainTask, setmainTask] = useState([]);
    const submitHandler = (e) => {
      e.preventDefault();
      setmainTask([...mainTask, { title, desc }]);
      constTitle("");
      setdesc("");
      console.log(mainTask);
    };

    

    return (
      <>
        <h1 className="bg-black text-white p-5 text-2xl font-bold text-center">
          TodoList
        </h1>
        <form onSubmit={submitHandler}>
          <input
            className="text-2xl border-2 border-zinc-800 m-5 px-4 py-2 rounded-xl"
            placeholder="Enter your Task here"
            value={title}
            onChange={(e) => {
              constTitle(e.target.value);
            }}
          />
          <input
            className="text-2xl border-2 border-zinc-800 m-5 px-4 py-2 rounded-xl"
            placeholder="Enter your Description here"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="bg-black text-white px-4 py-2 m-5 text-2xl rounded">
            Add Task
          </button>
        </form>
        <hr />
        <div className="p-8 bg-slate-200">
          <ul><Render mainTask = {mainTask} setmainTask = {setmainTask}/></ul>
        </div>
      </>
    );
  };

  export default page;
