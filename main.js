const aboutMeImage = document.querySelector(".about-me__image");

if (!aboutMeImage) {
  throw new Error("Issue with about-me image");
}

const handleImageClick = (e) => {
  if (e.target.classList.contains("about-me__image--rotating")) {
    e.target.classList.remove("about-me__image--rotating");
  } else {
    e.target.classList.add("about-me__image--rotating");
  }
};

aboutMeImage.addEventListener("click", handleImageClick);
