const menu = document.querySelector(".container");

function myFunction(x) {
  // 기존의 class를 유지한 채로 class를 추가 및 삭제

  menu.classList.toggle("change");
}

menu.addEventListener("click", myFunction);
