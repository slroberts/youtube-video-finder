import React from 'react';

const SearchVideoInput = ({
  searchValue,
  handleChange,
  handleSubmit,
  errorMessage,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='mt-8 p-8 w-full flex justify-center'
    >
      <div>
        <input
          type='text'
          name='search'
          value={searchValue}
          onChange={handleChange}
          className='bg-slate-200 mt-8 px-4 py-3 w-full sm:w-80 border-none border-2 rounded-none sm:rounded-l-md outline-0'
          autoComplete='off'
          placeholder={'Search using video id'}
        />

        {!searchValue ? (
          <button
            className='bg-zinc-400 p-3 w-full sm:w-32 text-white rounded-none sm:rounded-r-md'
            disabled
          >
            Find Video
          </button>
        ) : (
          <button className='bg-red-600 hover:bg-red-700 p-3 w-full sm:w-32 text-white rounded-none sm:rounded-r-md'>
            Find Video
          </button>
        )}
        {errorMessage ? (
          <div className=' bg-red-300 border-2 border-red-600 text-red-600 text-sm font-semibold mt-4 px-4 py-3 rounded-md'>
            {errorMessage}
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default SearchVideoInput;
