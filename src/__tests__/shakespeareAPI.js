import shakespeareAPI from '../utils/shakespeareAPI';
import mockAxios from 'axios';
import { API_KEY, API_URL } from '../config';

// Get quotes from API
it('makes axios request to quotes api', async () => {
  // Setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: [
        {
          rating: 0.8,
          publish_date: '2016-09-05T23:25:47.642350Z',
          id: '9783221620868',
          body:
            'The fool doth think he is wise, but the wise man knows himself to be a fool.',
          author: 'Kaley Schiller'
        }
      ]
    })
  );

  // Work
  const quotes = await shakespeareAPI();

  // Expect
  expect(quotes).toEqual([
    {
      rating: 0.8,
      publish_date: '2016-09-05T23:25:47.642350Z',
      id: '9783221620868',
      body:
        'The fool doth think he is wise, but the wise man knows himself to be a fool.',
      author: 'Kaley Schiller'
    }
  ]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(API_URL, {
    headers: { 'x-api-key': API_KEY }
  });
});
