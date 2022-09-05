const numberForm = document.querySelector("#number_form");
function play(event) {
  const maxNumber = document.querySelector("#max_number").value;
  const userNumber = document.querySelector("#user_number").value;
  const setting = document.querySelector("#setting");
  const result = document.querySelector("#result");
  const machineNumber =
    Math.floor(Math.random() * maxNumber) + Math.round(Math.random());
  if (maxNumber < 0 || userNumber < 0) {
    alert("숫자는 0이상으로 입력해주세요.");
  }
  if (setting.innerText !== "") {
    setting.innerText = "";
    result.innerText = "";
  }
  setting.innerText = `You chose: ${userNumber}, the machine chose: ${machineNumber}.`;
  event.preventDefault();
  if (machineNumber === userNumber) {
    result.innerText = "You won!";
  } else if (machineNumber !== userNumber) {
    result.innerText = "You lose!";
  }
}
numberForm.addEventListener("submit", play);
