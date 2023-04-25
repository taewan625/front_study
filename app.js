const accordions = document.getElementsByClassName("accordion");

function handleShowAccordion() {
  // 향상된 for문 사용시 let accordion = this; 작성 필요
  // let accordion = this;
  this.classList.toggle("active");

  // nextElementSibling: 현 element의 다음 element만 가져옴
  // nextSibling : 현 element의 다음 모든 것(element, text)를 상관 없이 가져옴
  let panel = this.nextElementSibling;

  // 숨겨진 글 보여주기 2 - transition 적용
  if (panel.style.maxHeight) {
    // maxHeight: element 내용영역 높이의 최대값 지정
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    // scrollHeight: 스크롤 할 수 있는 최대 길이
  }
}

for (let accordion of accordions) {
  accordion.addEventListener("click", handleShowAccordion);
}
