import axios from "axios";

const url = `https://api.nasa.gov/planetary/apod?api_key=JK27Lvz6Gl9gcfvi7noM4b8tQ0I6WhEgsK2baXoC&count=6`;

export const getPosts = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
