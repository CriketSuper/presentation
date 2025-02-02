
// Бургер-меню
document.addEventListener('DOMContentLoaded', function() {
  const menus = document.querySelectorAll('.menu');
  menus.forEach(function(menu) {
      menu.addEventListener('click', function() {
          this.classList.toggle('active');
      });
  });
});

// Кнопка вернуться к началу страницы
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");

  // Показать кнопку, если прокрутка больше 300px
  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          scrollToTopButton.classList.add("show");
      } else {
          scrollToTopButton.classList.remove("show");
      }
  });

  // Прокрутка наверх при нажатии на кнопку
  scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  });
});

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

// Раскрытие важных ссылок
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.title-links');
  const linksContent = document.querySelector('.links');
  const arrow = document.querySelector('.link-checkmark');

  toggleButton.addEventListener('click', () => {
      arrow.classList.toggle('rotate'); // Поворачиваем стрелку
      linksContent.classList.toggle('open'); // Открываем/закрываем меню
  });
});

// Скрол специальностей и важных ссылок
document.addEventListener('DOMContentLoaded', function () {
  const scrollContainers = document.querySelectorAll('.container_specialties, .carousel-container');

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

document.querySelectorAll('.dropdown').forEach((dropdown) => {
  const content = dropdown.querySelector('.dropdown-content');

  // Показываем меню при наведении на кнопку или меню
  dropdown.addEventListener('mouseenter', () => {
      content.style.display = 'block';
  });

  // Прячем меню только если курсор покинул всю область dropdown
  dropdown.addEventListener('mouseleave', () => {
      content.style.display = 'none';
  });
});

// НСГК в цифрах
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".numbers-text");

  elements.forEach((el) => {
      const text = el.textContent.trim();
      const targetValue = parseFloat(text.replace(/[^0-9.]/g, ''));
      const isPercentage = text.includes('%');
      const isGreater = text.includes('>');
      
      // Устанавливаем начальное значение
      el.textContent = isGreater ? '> 0' : (isPercentage ? '0%' : '0');

      const duration = 2500; // Длительность анимации (в миллисекундах)
      const frameRate = 60; // Количество кадров в секунду
      const totalFrames = Math.round((duration / 1000) * frameRate);
      const increment = targetValue / totalFrames;

      let currentValue = 0;
      let frame = 0;

      // Функция анимации отсчета
      const countUp = () => {
          frame++;
          currentValue += increment;

          if (frame >= totalFrames) {
              currentValue = targetValue; // Устанавливаем конечное значение
              el.textContent = isGreater
                  ? `> ${Math.round(currentValue)}`
                  : (isPercentage
                      ? `${Math.round(currentValue)}%`
                      : Math.round(currentValue));
              return; // Прекращаем анимацию
          }

          el.textContent = isGreater
              ? `> ${Math.round(currentValue)}`
              : (isPercentage
                  ? `${Math.round(currentValue)}%`
                  : Math.round(currentValue));

          requestAnimationFrame(countUp);
      };

      // Задержка для появления элемента
      setTimeout(() => {
          el.classList.add('visible'); // Добавляем класс для плавного появления
          countUp();
      }, Math.random() * 300); // Случайная задержка для естественного эффекта
  });
});