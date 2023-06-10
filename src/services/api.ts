import axios from 'axios';

export const getCountApi = async() => {
  try {
    const response = await axios.get('/api/getCounts');
    return response.data;
  } catch (error) {
    console.log('Something Went Wrong', error);
    throw error;
  }
}

 
  
  
  
  
  