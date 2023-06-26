// Developer API Key
const API_KEY = '8a6a8429a6074dce9c72b76d70efd73d';
const BaseUrl = 'https://newsapi.org';
// Country Code: ex(kr, ca, us)
const Country = 'country=us';

// Get all the latest news
export const getLatestNews = async () => {
  try {
    const response = await fetch(`${BaseUrl}/v2/top-headlines?${Country}&apiKey=${API_KEY}`);
    const data = await response.json();

    if (response.ok) {
      return data.articles;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error fetching latest news:', error);
    throw error;
  }
};

// Get news by category
export const getNewsByCategory = async (category) => {
  try {
    const response = await fetch(`${BaseUrl}/v2/top-headlines?${Country}&category=${category}&apiKey=${API_KEY}`);
    const data = await response.json();

    if (response.ok) {
      return data.articles;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    throw error;
  }
};

