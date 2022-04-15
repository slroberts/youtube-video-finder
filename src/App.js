import { useState } from 'react';
import { getVideoById } from './helpers/index';

import Header from './components/Header';
import SearchVideoInput from './components/SearchVideoInput';
import { ReactComponent as Dream } from './imgs/zombieing.svg';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [video, setVideo] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setSearchValue((e.target.name = e.target.value));
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    getVideoById(searchValue, setVideo, setErrorMessage);

    setSearchValue('');
  };

  return (
    <div className='bg-zinc-300 h-screen'>
      <Header />
      <SearchVideoInput
        searchValue={searchValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />

      {video.length === 0 ? (
        <Dream
          style={{
            width: 'auto',
            height: '22rem',
            margin: '2rem auto',
            opacity: '.10',
          }}
        />
      ) : (
        <div>
          {video.map((v) => (
            <div
              key={v.id}
              className='flex justify-start md:justify-center flex-wrap mt-8 drop-shadow-xl'
            >
              <div className='bg-slate-200 w-full md:w-5/12 h-96'>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.snippet.title}
                  className='w-full h-full'
                />
              </div>

              <div className='p-8 w-full md:w-4/12 h-96 md:mt-0 bg-white text-black overflow-y-auto'>
                <h2 className='text-xl font-semibold'>{v.snippet.title}</h2>
                <p className='mt-4'>{v.snippet.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
