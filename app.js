const accordions = document.getElementsByClassName("accordion");

function handleShowAccordion() {
  // 향상된 for문 사용시 let accordion = this; 작성 필요
  // let accordion = this;
  this.classList.toggle("active");

  // nextElementSibling: 현 element의 다음 element만 가져옴
  // nextSibling : 현 element의 다음 모든 것(element, text)를 상관 없이 가져옴
  let panel = this.nextElementSibling;

  // 숨겨진 글 보여주기 1 - 딱딱하게 생성
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

for (let accordion of accordions) {
  accordion.addEventListener("click", handleShowAccordion);
}
