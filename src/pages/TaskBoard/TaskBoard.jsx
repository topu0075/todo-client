import { useEffect, useState } from "react";
import TaskCard from "../../components/Card/TaskCard";
import Heading from "../../components/Heading/Heading";
import useTask from "../../components/Hooks/useTask";
import AddTask from "../../components/Modal/AddTask";

const TaskBoard = () => {
  const { data } = useTask();
  const [allTask, setAllTask] = useState([]);
  const [onGoingTask, setOnGoingTask] = useState([]);
//   const [completeTask, setCompleteTask] = useState([]);
  console.log(data?.data);
  useEffect(() => {
    if (data?.data.length > 0) {
      console.log("donut ", data?.data);
      setAllTask(data?.data);
    }
  }, [data]);
  const handleOnDrag = (e, dragEvent, task) => {
    e.dataTransfer.setData("task", task);
    console.log(dragEvent);
    setOnGoingTask((prevState) => [...prevState, dragEvent]);
  };

  const handleOnDrop = (e, dragEvent) => {
    console.log("dropped");
    console.log(e);
    console.log(dragEvent);
    const taskData = e.dataTransfer.getData("task");
    console.log(taskData);
    // setOnGoingTask((prevState) => [...prevState, task]);
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
    console.log("drag over");
  };
  console.log(onGoingTask);
  console.log(allTask);
  return (
    <>
      <Heading heading={"All Task"}></Heading>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5 overflow-x-scroll w-11/12 mx-auto'>
        <div className='border-2 py-10 flex flex-col items-center gap-y-2 rounded-lg'>
          <h3 className='text-2xl font-bold border-b-2 mb-4 text-center'>
            TO DO
          </h3>

          {allTask &&
            allTask.map((task, idx) => (
              <div
                className='flex flex-col items-center w-11/12 mx-auto'
                key={idx}
                draggable
                onDragStart={(e) => handleOnDrag(e, task)}
              >
                <TaskCard task={task}></TaskCard>
              </div>
            ))}

          <div
            className='flex flex-col justify-center items-center'
            draggable
            onDragStart
          >
            <button
              className='btn btn-primary rounded-lg mx-auto'
              onClick={() => document.getElementById("addTask").showModal()}
            >
              + Add New Task
            </button>
          </div>
        </div>
        <div className='border-2 py-10 flex flex-col items-center gap-y-2 rounded-lg'>
          <h3 className='text-2xl font-bold border-b-2 mb-4 text-center'>
            On Going
          </h3>
          {onGoingTask.length > 0 &&
            onGoingTask.map((task, idx) => (
              <div
                className='flex flex-col items-center w-11/12 mx-auto'
                key={idx}
                draggable
                onDrop={handleOnDrop}
                onDragOver={handleOnDragOver}
              >
                <TaskCard task={task}></TaskCard>
              </div>
            ))}

          {/* <div className='flex flex-col justify-center items-center '>
            <button className='btn btn-primary rounded-lg mx-auto'>
              + Add New Task
            </button>
          </div> */}
        </div>
        <div className='border-2 py-10 flex flex-col items-center gap-y-2 rounded-lg'>
          <h3 className='text-2xl font-bold border-b-2 mb-4 text-center'>
            Complete
          </h3>
          {/* <div className='flex flex-col justify-center items-center '>
            <button className='btn btn-primary rounded-lg mx-auto'>
              + Add New Task
            </button>
          </div> */}
        </div>
      </div>

      <div>
        <dialog id='addTask' className='modal'>
          <AddTask />
        </dialog>
      </div>
    </>
  );
};

export default TaskBoard;
