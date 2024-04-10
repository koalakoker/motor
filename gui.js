document.addEventListener("keydown", keypressed);
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mousemove", mouseMove);
document.addEventListener("mouseup", mouseUp);

let PWM1Button = document.querySelector('input[name="option"][value="PWM1"]');
let PWM2Button = document.querySelector('input[name="option"][value="PWM2"]');

function handleRadioButtonChange() {
  if (PWM1Button.checked) {
    pwm.output.mode = 0;
  } else if (PWM2Button.checked) {
    pwm.output.mode = 1;
  }
}

PWM1Button.addEventListener("change", handleRadioButtonChange);
PWM2Button.addEventListener("change", handleRadioButtonChange);

let ARR = document.getElementById("ARR");
ARR.value = 186;
let ARRInput = new InputCtrl(ARR, counter);

let CCR = document.getElementById("Compare");
CCR.value = 186 / 4;
let CCRInput = new InputCtrl(CCR, compare);

let Duty = document.getElementById("Duty");
Duty.value = 1 - 1 / 4;
let DutyInput = new InputCtrl(Duty, pwm, 0.01);
