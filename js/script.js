function goBack(){
    history.go(-1);
  }

var greeting = document.getElementById('greeting');

var typewriter = new Typewriter(greeting, {
    loop: false,
    delay: 128,
    cursor: '_',
    autoStart: true
});

typewriter
    .typeString('Hello World!')
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am a programmer')
    .pauseFor(500)
    .deleteChars(10)
    .typeString('Software Engineer.')
    .start()