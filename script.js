let container = document.querySelector("#container");
let result = document.querySelector("#result");

const separateTextToLine = (element) => {
  const font = window.getComputedStyle(element).getPropertyValue("font");
  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, asperiores? Qui fuga delectus doloremque ab odit, dolor incidunt eius architecto. Incidunt ut, vitae eaque id soluta atque repellendus natus tenetur voluptas consequatur ab mollitia officiis adipisci ullam quae. Atque ex natus odio sapiente! Illo eveniet architecto voluptatum esse commodi est, aspernatur numquam fugiat veritatis illum deserunt quos magnam assumenda in facilis nihil qui inventore, eaque molestias, perferendis sint? Iste, esse porro. Velit odio odit dignissimos saepe tempore aut exercitationem cumque tempora ipsa dolore. Tenetur modi accusamus magni illo nisi deleniti enim quaerat itaque, asperiores nemo tempora rem praesentium fuga neque!";
  const elementWidth = element.offsetWidth;

  const getTextWidth = (text) => {
    const canvas =
      getTextWidth.canvas ||
      (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  };

  let textWidth = getTextWidth(text);

  if (textWidth > elementWidth) {
    const word = text.split("");
    console.log(word);

    while (textWidth > 0) {
      let lineWidth = 0;
      let counter = 0;
      let line = "";
      let spaceIndex;

      while (lineWidth < elementWidth && counter < word.length) {
        if (lineWidth + getTextWidth(word[counter]) > elementWidth) {
          counter--;
          break;
        }

        if (word[counter] === " ") spaceIndex = counter;

        line += word[counter];

        lineWidth = getTextWidth(line);

        counter++;
      }

      if (word[counter - 1] !== " " && counter !== word.length) {
        counter = spaceIndex;
      }

      let singleLine = word.splice(0, counter);

      result.innerHTML += `<p class="line">${singleLine.join("")}</p>`;

      textWidth = getTextWidth(word.join(""));
    }
  }

  return `textWidth: ${textWidth} and elementWidth: ${elementWidth}`;
};

console.log(separateTextToLine(container));
