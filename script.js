'use strict';

const form = document.querySelector('.my-form'),
  loginInput = form.querySelector('.username'),
  emailInput = form.querySelector('.email'),
  passwordInput = form.querySelector('.password'),
  confirmPasswordInput = form.querySelector('.confirm-password'),
  phoneInput = form.querySelector('.phone');

form.addEventListener('submit', (evt) => {
  // Отменяем действие по умолчанию
  evt.preventDefault();

  // Получаем значения полей формы
  const login = loginInput.value,
    email = emailInput.value,
    password = passwordInput.value,
    confirmPassword = confirmPasswordInput.value,
    phone = phoneInput.value;

  // Проверяем, что поля заполнены
  if (!login || !email || !password || !confirmPassword || !phone) {
    alert('Пожалуйста, заполните все поля');
    return;
  }

  // Проверяем, что имя пользователя содержит только буквы и цифры
  if (!isValidLogin(login)) {
    alert('Логин может содержать только буквы на латинице и цифры');
    return;
  }

  /* 
  Проверяем, что электронная почта содержит: 
    > название, состоящее из одного или более символов, но начинается именно с буквы латинского алфавита; 
    > знак собаки (@);
    > доменное имя почтового сервера, состоящее из одного или более символов;
    > точка (.);
    > доменное имя первого уровня, длиной от двух до тринадцати букв; 
  */
  if (!isValidEmail(email)) {
    alert(`Электронная почта должна содержать: 
    > название, состоящее из одного или более символов, но начинается именно с буквы латинского алфавита; 
    > знак собаки (@);
    > доменное имя почтового сервера, состоящее из одного или более символов;
    > точка (.);
    > доменное имя первого уровня, длиной от двух до тринадцати букв;`);
    return;
  }

  // Проверяем, что пароль содержит хотя бы одну заглавную букву, одну строчную букву и одну цифру
  if (!isValidPassword(password)) {
    alert('Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру');
    return;
  }

 // Проверяем, что номер телефона начинается с цифры или плюса. И заканчивается цифрой. В середине разрешаем использовать скобки, пробел и знак дефиса, от 4 до 14 символов.
  if (!isValidPhone(phone)) {
    alert('Телефонный номер введён некорректно. Проверьте, пожалуйста, правильность ввода.');
    return;
  }

  // Проверяем, что пароли совпадают
  if (password !== confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }

  // Если всё в порядке, отправляем форму
  form.submit();
});

function isValidLogin(login) {
  // Проверка имени регулярным выражением
  const pattern = /^[a-zA-Z0-9]+$/;
  return pattern.test(login);
}

function isValidEmail(email) {
  // Проверка электронной почты регулярным выражением
  const pattern = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,13}$/i;
  return pattern.test(email);
}

function isValidPassword(password) {
  // Проверка пароля регулярным выражением
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
  return pattern.test(password);
}

function isValidPhone(phone) {
  // Проверка телефонного номера регулярным выражением
  const pattern = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  return pattern.test(phone);
}
// === Toastr ===
