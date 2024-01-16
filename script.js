'use strict';

const form = document.querySelector('.my-form'),
      loginInput = form.querySelector('.username'),
      passwordInput = form.querySelector('.password'),
      confirmPasswordInput = form.querySelector('.confirm-password');

form.addEventListener('submit', (evt) => {
  // Отменяем действие по умолчанию
  evt.preventDefault();
  
  // Получаем значения полей формы
  const login = loginInput.value,
        password = passwordInput.value,
        confirmPassword = confirmPasswordInput.value;
  
  // Проверяем, что поля заполнены
  if (!login || !password || !confirmPassword) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  // Проверяем, что имя пользователя содержит только буквы и цифры
  if (!isValidLogin(login)) {
    alert('Логин может содержать только буквы на латинице и цифры');
    return;
  }
  
  // Проверяем, что пароль содержит хотя бы одну заглавную букву, одну строчную букву и одну цифру
  if (!isValidPassword(password)) {
    alert('Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру');
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

function isValidPassword(password) {
  // Проверка пароля регулярным выражением
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
  return pattern.test(password);
}

// === Toastr ===
