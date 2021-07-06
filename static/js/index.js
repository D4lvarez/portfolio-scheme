document.onscroll = () => {
  const body = document.querySelector("body");
  const navbar = document.querySelector(".navbar");
  let positionScroll = body.getBoundingClientRect().y;

  if (positionScroll < -10) {
    navbar.classList.add("navbar-active");
  } else {
    navbar.classList.remove("navbar-active");
  }
};
