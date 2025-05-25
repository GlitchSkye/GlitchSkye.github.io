  // const greetingElement = document.getElementById("greeting");
  // const now = new Date();
  // const hour = now.getHours();

  // let greetingText = "Hello";

  // if (hour >= 4 && hour < 12) {
  //   greetingText = "Good Morning";
  // } else if (hour >= 12 && hour < 18) {
  //   greetingText = "Good Afternoon";
  // } else {
  //   greetingText = "Good Evening";
  // }
  // greetingElement.innerHTML = greetingText;

  window.onload = () => {
  const greetingElement = document.getElementById("greeting");
  const now = new Date();
  const hour = now.getHours();

  let greetingText = "Hello";

  if (hour >= 4 && hour < 12) {
    greetingText = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    greetingText = "Good Afternoon";
  } else {
    greetingText = "Good Evening";
  }

  // The full sentence to type out
  const fullText = `${greetingText}, my name is Skye 👾`;
  let i = 0;

  function typeWriter() {
    if (i < fullText.length) {
      greetingElement.innerHTML += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 75); // You can tweak speed here
    }
  }

  // Start typing after a short delay (optional)
  setTimeout(typeWriter, 200);
};
