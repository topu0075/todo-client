import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import sweetAlertController from "../../utils/sweetAlertController";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    // eslint-disable-next-line no-unused-vars
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    defaultValues: {
      title: "",
      deadline: "",
      priority: "",
      description: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        title: "",
        deadline: "",
        priority: "",
        description: "",
      });
    }
  }, [formState, reset]);

  const closeModal = () => {
    document.getElementById("addTask").close();
  };

  const addTask = useMutation({
    mutationFn: async (task) => {
      return await axios.post(`${process.env.REACT_BASE_URL}/addTask`, task);
    },
    onSuccess: () => {
      setTimeout(() => {
        reset();
      }, 2000);
    },
    onError: (error) => {
      console.log(error);
      sweetAlertController("Error", "Task Could not be add", "error", "close");
    },
  });

  const handleAddTask = async (data) => {
    console.log(data);
    data["status"] = "todo";
    const res = await addTask.mutateAsync(data);
    console.log("res from db", res);
  };
  return (
    <>
      <div className='modal-box w-8/12 max-w-5xl'>
        <div className='modal-action'>
          <form
            method='dialog'
            onSubmit={handleSubmit(handleAddTask)}
            className='card-body'
          >
            <div className='form-control'>
              <input
                type='test'
                placeholder='Title'
                className='input input-bordered rounded-lg'
                name='title'
                {...register("title", {
                  required: true,
                })}
              />
              {errors.title?.type === "required" && (
                <p className='text-red-600 text-xs mt-3 ml-3'>
                  Title is required
                </p>
              )}
            </div>
            <div className='form-control'>
              <input
                type='date'
                placeholder='Deadline'
                className='input input-bordered rounded-lg'
                name='deadline'
                {...register("deadline")}
              />
            </div>

            <div>
              <select
                className='select select-accent w-full rounded-lg'
                {...register("priority")}
              >
                <option value='Low' selected>
                  Low
                </option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
              </select>
            </div>
            <div>
              <textarea
                className='textarea textarea-bordered w-full rounded-lg'
                placeholder='Task Description'
                name='description'
                {...register("description")}
              ></textarea>
            </div>
            <div>
              <button
                type='submit'
                className='btn btn-primary w-full rounded-lg'
              >
                Submit
              </button>
            </div>
          </form>
          <div>
            <button className='btn rounded-lg' onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
