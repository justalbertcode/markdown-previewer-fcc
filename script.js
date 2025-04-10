marked.setOptions({
    gfm: true,          // Включение поддержки GitHub Flavored Markdown
    breaks: true,       // Перевод строк в новый абзац (для GitHub-стиля)
    smartLists: true,   // Умные списки
  });
  
 
 // Функция для обновления вывода в реальном времени
 const textarea = document.getElementById('editor');
 const output = document.getElementById('preview');

 // Обработчик на изменение текста в textarea
 textarea.addEventListener('input', function() {
     // Преобразуем Markdown в HTML и выводим результат
     const markdownText = textarea.value;
     output.innerHTML = marked.parse(markdownText);  // Используем marked.parse()
 });

 // Инициализация с начальным содержимым
 output.innerHTML = marked.parse(textarea.value);  // Используем marked.parse()