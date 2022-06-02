var btn = document.getElementById("b1");
var msg = document.getElementById("heading2");
var mywords = document.getElementById("text");
let startTime, endTime;

const setOfWords = [
  "Hay You Can Try...",
  "dreamer believer achiever",
  "If you want to achieve greatness stop asking for permission.",
  "If you do what you always did, you will get what you always got.",
  "Opportunities don't happen, you create them.",
  "I have not failed. I've just found 10,000 ways that won't work --'Thomas A. Edison'",
  "Great things happen to those who don't stop believing, trying, learning, and being grateful.",
  "Do not fear failure but rather fear not trying",
  "Only those who dare to fail greatly can ever achieve greatly.",
  "A bruise is a lesson... and each lesson makes us better.",
];

const playgame = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totaltime = (endTime - startTime) / 1000;
  console.log(totaltime);

  let totalStr = mywords.value;
  let wordCount = wordCounter(totalStr);
  let speed = Math.round((wordCount / totaltime) * 60);
  let finalmsg = "You typed total at " + speed + " Words per minutes";
  msg.innerText = finalmsg;
};

const wordCounter = (str) => {
  let responce = str.split(" ").length;
  console.log(responce);

  return responce;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    mywords.disabled = false;
    mywords.value = "";
    playgame();
  } else if (this.innerText == "Done") {
    mywords.disabled = true;
    btn.innerText = "Start";

    endPlay();
  }
});
