import { useState } from 'react';

import Header from './components/Header';
import SearchVideoInput from './components/SearchVideoInput';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setSearchValue((e.target.name = e.target.value));
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    </div>
  );
};

export default App;
