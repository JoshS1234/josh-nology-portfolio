const aboutMeImage = document.querySelector(".about-me__image");

if (!aboutMeImage) {
  throw new Error("Issue with about-me image");
}

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const handleImageClick = (e) => {
  if (e.target.classList.contains("about-me__image--rotating")) {
    e.target.classList.remove("about-me__image--rotating");
  } else {
    e.target.classList.add("about-me__image--rotating");
    sleep(700)
      .then(() => {
        e.target.classList.remove("about-me__image--rotating");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

aboutMeImage.addEventListener("click", handleImageClick);
