document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Your code here
    console.log(
      "Document is ready! jQuery is working."
    );
    const textLabels =
      document.querySelectorAll("a");
    const iconImages =
      document.querySelectorAll("svg");
    iconImages.forEach((icon) =>
      icon.addEventListener("click", () => {
        textLabels.forEach((label) => {
          if (icon.id === label.id) {
            if (
              label.style.display &&
              label.style.display.toString() ==
                "inline"
            ) {
              label.style.display = "none";
            } else {
              label.style.display = "inline";
            }
            console.log(label.style.display);
          }
        });
      })
    );
  }
);
