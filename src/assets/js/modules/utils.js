const passwordShowBtn = () => {
  const passwordBtn = document.getElementsByClassName("password-btn")[0];

  if (passwordBtn) {
    passwordBtn.addEventListener("click", () => {
      const passwordInput = document.getElementById("password-input");
      const eyeOffIcon = document.querySelector(".password-btn svg.feather-eye-off");
      const eyeIcon = document.querySelector(".password-btn svg.feather-eye");

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeOffIcon.setAttribute("class", "feather feather-eye-off d-none");
        eyeIcon.setAttribute("class", "feather feather-eye");
      } else {
        passwordInput.type = "password";
        eyeOffIcon.setAttribute("class", "feather feather-eye-off");
        eyeIcon.setAttribute("class", "feather feather-eye d-none");
      }
    })
  }
}

// only for demo
const switchDateToPeriod = () => {
  const periodInput = document.getElementById("periodInput");
  const dateRadio = document.getElementById("dateRadio");

  if (periodInput) {
    dateRadio.checked ? periodInput.style.display = 'none' :  periodInput.style.display = 'block';
  }
}

const initialize = () => {
  passwordShowBtn();
  switchDateToPeriod();

  const dateRadios = document.querySelectorAll("input[name='radios-date']");
  if (dateRadios.length) {
    dateRadios.forEach((input) => {
      input.addEventListener('change', switchDateToPeriod);
    });
  }
}

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => initialize());
