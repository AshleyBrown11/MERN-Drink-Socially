import postImg01 from "../images/post-img01.jpg";
import postImg02 from "../images/post-img02.jpg";
import postImg03 from "../images/post-img03.jpg";
import postImg04 from "../images/post-img04.jpg";

const posts = [
  {
    id: "01",
    title: "Cant Get Enough",
    city: "London",
    desc: "this is the description",
    reviews: [
      {
        name: "ivy rose",
        likes: 69,
      },
    ],
    photo: postImg01,
    featured: true,
  },
  {
    id: "02",
    title: "On the Beach",
    city: "Indonesia",
    desc: "this is the description",
    comments: [
      {
        name: "blue rain",
        likes: 50,
      },
    ],
    photo: postImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Birthday Celebration",
    city: "Thailand",
    desc: "this is the description",
    comments: [
      {
        name: "blah blah",
        likes: 95,
      },
    ],
    photo: postImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Living The Life",
    city: "Thailand",
    desc: "this is the description",
    comments: [
      {
        name: "john doe",
        likes: 5,
      },
    ],
    photo: postImg04,
    featured: true,
  },
];

export default posts;
