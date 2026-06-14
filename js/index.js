// meow!
console.log("Hey! The fuck are you in the console for?");

fetch("/assets/ascii/yuri.ascii")
  .then((r) => r.text())
  .then(console.log)
  .catch(console.error);

function loadArt() {
  fetch("/arch.ascii")
    .then(function (r) {
      return r.ok ? r.text() : "";
    })
    .then(function (t) {
      if (!t) return;
      var lines = t.replace(/\r/g, "").split("\n");
      if (lines[0] && lines[0].trim().charAt(0) === "{") lines.shift();
      lines = lines.map(function (l) {
        return l.replace(/\$\{c\d\}/g, "");
      });
      while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();
      archLines = lines;
    })
    .catch(function () {});
}
