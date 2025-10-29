type Props = {};

const LoadingSpinner = (props: Props) => {
  return (
    <div className='flex justify-center items-center'>
      <svg
        className='animate-spin h-5 w-5 mr-3 text-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          strokeWidth='4'
        ></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0115.68-3.2l2.16-2.15A10 10 0 003 12h1z'
        ></path>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
