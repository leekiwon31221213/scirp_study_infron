console.log("aaa");

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  //const dateFormat = inputYear +'-'+ inputMonth +'-'+ inputDate //지역변수
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`; //템플릿 리터럴
  //백틱은 문자열 안에서 변수 창조가능

  return dateFormat;
  //console.log(inputYear, inputMonth , inputDate);
};

const counterMaker = function () {
  const messageContainer = document.querySelector("#d-day-message");
  messageContainer.textContent = "D-Day를 입력해 주세요.";
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  // 만약 remaining이 0이라면 타이머가 종료되었습니다 출력
  /* console.log(isNaN(remaining), remaining); */
  if (remaining <= 0) {
    console.log("타이머가 종료 되었습니다");
  } else if (isNaN(remaining)) {
    console.log("유효한 시간대가 아닙니다.");
  }
  //만약 잘못된 날짜가 들어 왔다면 유효한 시간대가 아닙니다. 출력

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMin = Math.floor(remaining / 60) % 60; //분
  const remainingSec = Math.floor(remaining) % 60; //초

  console.log(remainingDate, remainingHours, remainingMin, remainingSec);
};
//값을 가져올때는 .value를 꼭 입력해줘야함
//const remainingDate에 Math.floor()메서드는 소숫점 이하의 수를 내림해줌
