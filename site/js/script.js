document.body.innerHTML = "<h1>Урок 3. Основы JavaScript</h1>";
document.write('<text> Задание: Создать страницу, которая спрашивает имя у пользователя и выводит его с помощью функции. </text>');

function outputName(name) {
    alert(name);
}
let username = prompt("Как ваше имя", "имя");
outputName(username);