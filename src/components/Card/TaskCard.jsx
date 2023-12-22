import { PropTypes } from "prop-types";
const TaskCard = ({ task }) => {
  //   console.log("task:- ", task);
  const handleUpdate = () => {
    console.log("clicked update");
  };
  const handleDelete = (e) => {
    console.log("clicked delete ", e.target.value);
  };
  return (
    <div className='card w-10/12 bg-secondary text-primary-content'>
      <div className='card-body'>
        <button
          className='card-actions justify-end font-bold'
          value={task._id}
          onClick={(e) => handleDelete(e)}
        >
          X
        </button>
        <h2 className='card-title'>{task.title}</h2>
        <p>
          <span className='font-extrabold text-lg'>Deadline: </span>
          {task.deadline}
        </p>
        <p>
          <span className='font-extrabold text-lg'>Priority: </span>
          {task.priority}
        </p>
        <p>
          <span className='font-extrabold text-lg'>Description: </span>
          {task.description}
        </p>
        <div className='card-actions justify-center'>
          <button className='btn rounded-lg' onClick={handleUpdate}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};
export default TaskCard;
