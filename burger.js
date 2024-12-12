const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");

burgerMenu.addEventListener("click", () => {
  menu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});

document
  .getElementById("call-icon")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showPanel("call");
  });

document
  .getElementById("chat-icon")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showPanel("chat");
  });

function showPanel(panelId) {
  // Скрыть все панели
  document.querySelectorAll(".panel").forEach(function (panel) {
    panel.style.display = "none";
  });

  // Показать выбранную панель
  document.getElementById(`${panelId}-panel`).style.display = "block";
}

function closePanel(panelId) {
  document.getElementById(`${panelId}-panel`).style.display = "none";
}

let isBurgerOpen = false;

document.getElementById("burger-menu").addEventListener("click", function () {
  isBurgerOpen = !isBurgerOpen;
  document.body.classList.toggle("burger-open", isBurgerOpen);
  if (isBurgerOpen) {
    // Закрыть все панели при открытии бургера
    document.querySelectorAll(".panel").forEach(function (panel) {
      panel.style.display = "none";
    });
  }
});

document
  .getElementById("call-icon")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (!isBurgerOpen) {
      // Панель открывается только если бургер не открыт
      showPanel("call");
    }
  });

document
  .getElementById("chat-icon")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (!isBurgerOpen) {
      // Панель открывается только если бургер не открыт
      showPanel("chat");
    }
  });

function showPanel(panelId) {
  // Скрыть все панели
  document.querySelectorAll(".panel").forEach(function (panel) {
    panel.style.display = "none";
  });

  // Показать выбранную панель
  document.getElementById(`${panelId}-panel`).style.display = "block";
}

function closePanel(panelId) {
  document.getElementById(`${panelId}-panel`).style.display = "none";
}


