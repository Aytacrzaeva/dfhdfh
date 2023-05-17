const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const posts = [
  {
    id: 1,
    image: "https://preview.colorlib.com/theme/magdesign/images/img_2.jpg",
    category: "Business,Travel",
    date: "July 2, 2020",
    title:"Your most unhappy customers are your greatest source of learning.",
    description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

  },
  {
    id: 2,
    image: "https://preview.colorlib.com/theme/magdesign/images/img_3.jpg",
    category: "Business,Travel",
    date: "July 2, 2020",
    title:"Your most unhappy customers are your greatest source of learning.",
    description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."

  },
  {
    id: 3,
    image: "https://preview.colorlib.com/theme/magdesign/images/img_4.jpg",
    category: "Business,Travel",
    date: "July 2, 2020",
    title:"Your most unhappy customers are your greatest source of learning.",
    description:"blaFar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.blabladvgsdrvgblabla"

  },
  {
    id: 4,
    image: "https://preview.colorlib.com/theme/magdesign/images/img_4.jpg",
    category: "Business,Travel",
    date: "July 2, 2020",
    title:"Your most unhappy customers are your greatest source of learning.",
    description:"blaFar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.blabladvgsdrvgblabla"

  }
];
app.get("/", (req, res) => {
  res.send(posts);
});

app.post("/new", (req, res) => {
  posts.push(req.body);
  res.send(posts);
});

app.delete("/:id", (req, res) => {
  let { id } = req.params;
  let target = posts.find((user) => user.id == id);
  let indexOfTarget = posts.indexOf(target);
  posts.splice(indexOfTarget, 1);
  res.send(posts);
});

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});