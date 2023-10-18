import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://devapi.getgoally.com/v1/api/reminders/all',
      headers: {
        Authorization: ' ddc58e6a-2e69-4f44-97e8-1454eb352069',
      },
    });
    return response.data.docs;
  } catch (error) {
    console.log(error);
  }
};
