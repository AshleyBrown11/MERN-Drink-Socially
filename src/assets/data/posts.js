import postImg01 from "../images/post-img01.jpg";
import postImg02 from "../images/post-img02.jpg";
import postImg03 from "../images/post-img03.jpg";
import postImg04 from "../images/post-img04.jpg";

const posts = [
  {
    id: "01",
    title: "Its My Birthday",
    city: "Atlanta",
    desc: "Dance like no one is watching!",
    reviews: [
      {
        name: "ivy rose",
        likes: 100,
        comments: "Happy 10th Birthday",
      },
    ],
    photo: postImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Different",
    city: "Atlanta",
    desc: "Never Dim Your Light!",
    comments: [
      {
        name: "blue rain",
        likes: 80,
        comments: ""
      },
    ],
    photo: postImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Brown Skin Girl",
    city: "Atlanta",
    desc: "Princess",
    comments: [
      {
        name: "blah blah",
        likes: 95,
        comments: "You Go Girl!"
      },
    ],
    photo: postImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Its Me",
    city: "Brooklyn, NY",
    desc: "In these NY Streets",
    comments: [
      {
        name: "john doe",
        likes: 66,
        comments: "Beautiful Mama",
      },
    ],
    photo: postImg04,
    featured: true,
  },
];

export default posts;
