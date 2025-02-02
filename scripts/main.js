// import Header from './Header.js'
// import Widgets from './Widgets.js'

// new Header()
// new Widgets()

// defineScrollBarWidthCSSVar()

// Поиск
function performSearch() {
    const query = document.querySelector('.search-input').value.trim();
    if (query) {
        console.log(`Поисковый запрос: ${query}`);
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
    } else {
        alert('Пожалуйста, введите запрос.');
    }
  }
  
  // Получение элементов
  const searchBar = document.querySelector('.header__widgets-search-bar');
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');
  
  // Открытие/закрытие поля при клике на кнопку
  searchButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Предотвращаем всплытие события
      searchBar.classList.toggle('active'); // Переключаем класс active
      if (searchBar.classList.contains('active')) {
          searchInput.focus(); // Устанавливаем фокус в поле
      } else {
          searchInput.value = ''; // Очищаем поле при закрытии
      }
  });
  
  // Закрытие поля при клике вне области
  document.addEventListener('click', (e) => {
      if (!searchBar.contains(e.target)) {
          searchBar.classList.remove('active'); // Убираем класс active
          searchInput.value = ''; // Очищаем поле
      }
  });
  
  // Выполнение поиска при нажатии Enter
  searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
          performSearch();
      }
  });
  

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

// Кнопка вернуться к началу страницы
document.addEventListener("DOMContentLoaded", function () {
    const sBackToTopButton = document.getElementById("BackToTop");
  
    // Показать кнопку, если прокрутка больше 300px
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            BackToTop.classList.add("show");
        } else {
            BackToTop.classList.remove("show");
        }
    });
  
    // Прокрутка наверх при нажатии на кнопку
    BackToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// Раскрытие важных ссылок
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.important-links__button');
    const linksContent = document.querySelector('.important-links__carousel');
    const arrow = document.querySelector('.icon--checkmark');
  
    toggleButton.addEventListener('click', () => {
        arrow.classList.toggle('rotate'); // Поворачиваем стрелку
        linksContent.classList.toggle('open'); // Открываем/закрываем меню
    });
});


// Скролл
document.addEventListener('DOMContentLoaded', function () {
    const scrollContainers = document.querySelectorAll('.scrollbar-container');
  
    scrollContainers.forEach(scrollContainer => {
      const scrollSpeedMultiplier = 4; // Увеличивает длину прокрутки
  
      // Обработка события колесика мыши
      scrollContainer.addEventListener('wheel', function (event) {
        event.preventDefault(); // Предотвращает стандартную вертикальную прокрутку
  
        const scrollAmount = event.deltaY * scrollSpeedMultiplier;
  
        // Плавная прокрутка
        scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth' // Плавная прокрутка
        });
      });
    });
  });
  
// burger-menu
const burgerButton = document.querySelector('.burger-button');
const headerOverlay = document.querySelector('.header__overlay');

burgerButton.addEventListener('click', () => {
  headerOverlay.classList.toggle('is-active'); // Добавление/удаление класса для overlay
  burgerButton.classList.toggle('is-active'); // Добавление/удаление класса для самой кнопки
});

// НСГК в цифрах
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".statistics__text");

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const startAnimation = (el) => {
        const text = el.textContent.trim();
        const targetValue = parseFloat(text.replace(/[^0-9.]/g, ''));
        const isPercentage = text.includes('%');
        const isGreater = text.includes('>');

        el.textContent = isGreater ? '> 0' : (isPercentage ? '0%' : '0');

        const duration = 2500; // Длительность анимации (в миллисекундах)
        const frameRate = 60; // Количество кадров в секунду
        const totalFrames = Math.round((duration / 1000) * frameRate);
        const increment = targetValue / totalFrames;

        let currentValue = 0;
        let frame = 0;

        const countUp = () => {
            frame++;
            currentValue += increment;

            if (frame >= totalFrames) {
                currentValue = targetValue;
            }

            el.textContent = isGreater
                ? `> ${Math.round(currentValue)}`
                : (isPercentage
                    ? `${Math.round(currentValue)}%`
                    : Math.round(currentValue));

            if (frame < totalFrames) {
                requestAnimationFrame(countUp);
            }
        };

        el.classList.add('visible');
        countUp();
    };

    const handleScroll = () => {
        elements.forEach(el => {
            if (isElementInViewport(el) && !el.classList.contains('animated')) {
                startAnimation(el);
                el.classList.add('animated'); // Добавляем класс, чтобы избежать повторного запуска
            }
        });
    };

    // Сразу проверяем при загрузке страницы
    handleScroll();

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);
});


// Смена SVG при наведении курсором
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.all-links');

    buttons.forEach(button => {
        const iconUse = button.querySelector('.icon use');

        // Иконки для смены
        const icon1 = 'sprite.svg#icon-arrow-right_1';
        const icon2 = 'sprite.svg#icon-arrow-right_2';

        // Слушаем событие на ховер
        button.addEventListener('mouseenter', () => {
            iconUse.setAttribute('href', ''); // Убираем иконку
            setTimeout(() => {
                iconUse.setAttribute('href', icon2); // Меняем на вторую иконку через секунду
            }, 200);
        });

        // Слушаем событие на убирание курсора
        button.addEventListener('mouseleave', () => {
            iconUse.setAttribute('href', ''); // Убираем иконку
            setTimeout(() => {
                iconUse.setAttribute('href', icon1); // Возвращаем на первую иконку через секунду
            }, 150);
        });
    });
});


// Отключение скролла основной страницы при открытом Бургер-меню
const menu = document.querySelector(".header__overlay"); // Ваш бургер-меню
const body = document.body;

function toggleMenu() {
    menu.classList.toggle("open");
    body.classList.toggle("no-scroll"); // Отключает/включает прокрутку
}

document.querySelector(".burger-button").addEventListener("click", toggleMenu);