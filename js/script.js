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
  greetingElement.innerHTML = greetingText;