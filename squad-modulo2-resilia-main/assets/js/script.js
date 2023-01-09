const square = document.getElementById("square");
const frontSide = document.getElementById("frontSide");
const leftSide = document.getElementById("leftSide");
const rightSide = document.getElementById("rightSide");

frontSide.addEventListener('click', () => {
  frontSide.style.display = "none";
  leftSide.style.display = "block";
  rightSide.style.display = "block";
  square.style.transform = "rotate3d(0,0,0,90deg)";
  document.title = "Login";
});

rightSide.addEventListener('click', () => {
  frontSide.style.display = "block";
  leftSide.style.display = "none";
  rightSide.style.display = "block";
  square.style.transform = "rotate3d(0,-1,0,90deg)";
  document.title = "Cadastro";
});

leftSide.addEventListener('click', () => {
  frontSide.style.display = "block";
  leftSide.style.display = "block";
  rightSide.style.display = "none";
  square.style.transform = "rotate3d(0,1,0,90deg)";
  document.title = "Recuperação de Conta";
});