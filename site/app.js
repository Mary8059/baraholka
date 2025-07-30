'use strict';

const switcher = document.querySelector('.btn');

// === ФУНКЦИЯ: обновить текст кнопки ===
function updateButtonText(theme) {
  switcher.textContent = theme === 'dark-theme' ? 'Day' : 'Night';
}

// Загрузить сохранённую тему из localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(savedTheme);
  updateButtonText(savedTheme);
}  else {
  updateButtonText('light-theme'); // по умолчанию
}

// === СМЕНА ТЕМЫ ПРИ НАЖАТИИ ===
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const newTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
  localStorage.setItem('theme', newTheme); // Сохраняем выбранную тему

  updateButtonText(newTheme);
 
    console.log('current class name:' + className);

});


 document.addEventListener('DOMContentLoaded', () => {
  const polaroids = document.querySelectorAll('.polaroid');

  polaroids.forEach(card => {
    const angle = Math.floor(Math.random() * 8 - 4); // от -4 до +3
    card.style.setProperty('--random-rotation', `${angle}deg`);
  });
});

