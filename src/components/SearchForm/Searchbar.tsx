type Props = {};

export default function Searchbar({}: Props) {
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   if (e.target.value.trim() === '') {
  //     return toast.warning('Please enter a movie name');
  //   }
  //   setSearchQuery(e.target.value);
  // };

  // const handleChange = (e: any) => {
  //   setMoviesList(0);
  //   setSearchQuery(e.currentTarget.value);
  // };

  return (
    <input
      type='text'
      className='px-6 py-2 text-[1rem] rounded-[3px] text-black w-full outline-none'
      id='movie-search-box'
      autoComplete='off'
      autoFocus
      placeholder='Search movie'
      // value={searchQuery}
      // onKeyUp={handleSubmit}
      // onChange={handleChange}
    />
  );
}
