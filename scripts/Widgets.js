// Поиск
function performSearch() {
    const query = document.querySelector('.search-input').value.trim();
    if (query) {
        // Выполнение поиска
        console.log(`Поисковый запрос: ${query}`);
        // Например, редирект на страницу поиска
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
    } else {
        alert('Пожалуйста, введите запрос.');
    }
}

const searchBar = document.querySelector('.header__widgets-search-bar');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
  
    // Добавляем обработчик клика на кнопку
    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('active'); // Переключаем класс "active"
        if (searchBar.classList.contains('active')) {
            searchInput.focus(); // Фокусируем поле ввода
        } else {
            searchInput.value = ''; // Очищаем поле, если оно свернулось
        }
    }
);
  
    // Закрытие поля при клике вне его области
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target)) {
            searchBar.classList.remove('active');
            searchInput.value = ''; // Очищаем поле
        }
    }
);

document.addEventListener('DOMContentLoaded', () => {
    const visuallyImpairedButton = document.querySelector('.header__widgets-visually-impaired button');
    const widgetContainer = document.querySelector('.header__widgets-visually-impaired');
  
    if (visuallyImpairedButton && widgetContainer) {
      visuallyImpairedButton.addEventListener('click', () => {
        widgetContainer.classList.toggle('active');
      });
    }
});

document.addEventListener('click', (e) => {
    const visuallyImpairedButton = document.querySelector('.header__widgets-visually-impaired button');
    const widgetContainer = document.querySelector('.header__widgets-visually-impaired');

    // Проверяем, был ли клик вне кнопки или виджета
    if (widgetContainer && !widgetContainer.contains(e.target) && !visuallyImpairedButton.contains(e.target)) {
        widgetContainer.classList.remove('active');  // Убираем активный класс
        // Если нужно, можно очистить или сбросить какие-то другие элементы
    }
});