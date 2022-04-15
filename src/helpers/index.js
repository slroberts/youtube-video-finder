import youtube from '../api/youtube';

export const getVideoById = async (value, setResponse, setError) => {
  const response = await youtube.get('/videos', {
    params: {
      id: value,
    },
  });

  if (response.data.items.length === 0) {
    setError('Video not found, try another video id');
  } else {
    setResponse(response.data.items);
  }
};
