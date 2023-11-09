export function aos(className: string) {
  const $cards = document.querySelectorAll(className);
  console.log(className);
  const observer = new IntersectionObserver((entries) => {
    // 감지한 모든 .card 요소의 정보를 entries 배열로 전달받습니다.
    // entries 배열을 순회해, isIntersecting 조건이 참일 경우 "visible" 이라는 클래스명을 추가합니다.
    entries.forEach((entry) => {
      // 요소가 화면에 나타났다면
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // 옵저버 객체의 unobserve 메서드로 요소의 감지를 해제합니다
        observer.unobserve(entry.target);
      }
    });
  });

  $cards.forEach((card) => {
    // 모든 .card 요소의 인터섹션을 감지합니다.
    observer.observe(card);
  });
}
