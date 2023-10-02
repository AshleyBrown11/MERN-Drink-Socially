import axios from "axios"

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': 'a185359adbmsh1fe18b43f3158b5p14e1c5jsn18f42d448100',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export async function fetchVideo(setVideo) {
try {
	const response = await axios.request(options);
	console.log(response.data);
  const data = response.data
  setVideo(data.items)
} catch (error) {
	console.error(error);
}} 