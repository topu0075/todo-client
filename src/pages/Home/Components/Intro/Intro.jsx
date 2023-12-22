const Intro = () => {
  return (
    <div>
      <h3>Task Broad IN ACTION</h3>
      <h1 className='text-3xl'>Workflows for any project, big or small</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4'>
        <div className='card w-11/12 mx-auto bg-[#ff7452] text-primary-content'>
          <div className='card-body'>
            <h2 className='card-title'>Project management</h2>
            <p>
              Keep tasks in order, deadlines on track, and team members aligned
              with Task Broad.
            </p>
          </div>
        </div>
        <div className='card w-11/12 mx-auto bg-[#2684ff] text-primary-content'>
          <div className='card-body'>
            <h2 className='card-title'>Meetings</h2>
            <p>
              Empower your team meetings to be more productive, empowering, and
              dare we say—fun.
            </p>
          </div>
        </div>
        <div className='card w-11/12 mx-auto bg-[#ffc400] text-primary-content'>
          <div className='card-body'>
            <h2 className='card-title'>Task management</h2>
            <p>
              Use Task Broad to track, manage, complete, and bring tasks
              together like the pieces of a puzzle, and make your teams projects
              a cohesive success every time.
            </p>
          </div>
        </div>
        <div className='card w-11/12 mx-auto bg-[#00c7e5] text-primary-content'>
          <div className='card-body'>
            <h2 className='card-title'>Brainstorming</h2>
            <p>
              Unleash your teams creativity and keep ideas visible,
              collaborative, and actionable.
            </p>
          </div>
        </div>
        <div className='card w-11/12 mx-auto bg-[#f99cdb] text-primary-content'>
          <div className='card-body'>
            <h2 className='card-title'>Resource hub</h2>
            <p>
              Save time with a well-designed hub that helps teams find
              information easily and quickly.
            </p>
          </div>
        </div>
        <div className='card w-11/12 mx-auto bg-[#57d9a3] text-primary-content'>
          <div className='card-body'>
            <h2 className='card-title'>Onboarding</h2>
            <p>
              Onboarding to a new company or project is a snap with Task Broad’s
              visual layout of to-do’s, resources, and progress tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
