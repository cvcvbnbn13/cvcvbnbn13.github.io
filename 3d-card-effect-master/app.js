// movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const headPhoto = document.querySelector(".headPhoto img");
const follow = document.querySelector(".follow button");
const description = document.querySelector(".info h3");
const traits = document.querySelector(".traits");
// items


// moving animation event
container.addEventListener('mousemove',(e)=>{
  let xAxis = (window.innerWidth / 2 - e.pageX)/ 25;
  let yAxis = (window.innerHeight / 2 - e.pageY)/ 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// animate in
container.addEventListener('mouseenter',e=>{
  card.style.transform = "none";
  // popout
  title.style.transform = "translateZ(150px)"
  headPhoto.style.transform = "translateZ(200px) rotateZ(-5deg)"
  description.style.transform = "translateZ(150px)"
  traits.style.transform = "translateZ(150px)"
  follow.style.transform = "translateZ(150px)"
});
// animate out
container.addEventListener('mouseleave',e=>{
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotate(0deg)`;
  // popback
  title.style.transform = "translateZ(0px)"
  headPhoto.style.transform = "translateZ(0px) rotateZ(0deg)"
  description.style.transform = "translateZ(0px)"
  traits.style.transform = "translateZ(0px)"
  follow.style.transform = "translateZ(0px)"
});

