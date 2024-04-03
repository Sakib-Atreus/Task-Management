import task from '../../../assets/task.png';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-4 items-center'>
      <div className='text-center lg:order-1 order-2'>
        <h1 className='text-3xl font-bold py-5'>Task Management</h1>
        <p className='text-lg font-semibold text-gray-400 pb-8 lg:m-0 mx-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe
          aperiam, veritatis natus accusantium dolorem in laborum est reiciendis
          possimus ratione. Eaque quaerat dolore omnis distinctio provident esse
          deserunt illum facere? In ratione quidem corrupti quod sequi, dolor
          autem vitae delectus cumque error voluptatum laboriosam dicta quisquam
          at, optio eum!
        </p>

        <a
          href="/home"
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-orange-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group lg:mb-0 md:mb-0 mb-28"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-600 group-hover:h-full "></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12 ">
            <svg
              className="w-5 h-5 text-orange-600 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white text-xl font-bold">
            Get Started
          </span>
        </a>
      </div>

      <div className='flex items-end lg:order-2 order-1'>
        <img className='w-full' src={task} alt="" />
      </div>
    </div>
  );
};

export default Home;
