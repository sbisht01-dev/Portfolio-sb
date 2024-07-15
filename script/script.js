let circles = document.querySelectorAll(".circle");
circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});
window.addEventListener("mousemove", function (e) {
  let circleBG = [
    "#fd0900",
    "#fa1300",
    "#f81c00",
    "#f52500",
    "#f32f00",
    "#f03800",
    "#ee4200",
    "#eb4b00",
    "#e95400",
    "#e65e00",
  ];
  console.log(e.clientX, e.clientY);
  let y = e.clientY;
  let x = e.clientX;
  circles.forEach(function (circle, index) {
    circle.style.top = y - 12 + "px";
    circle.style.left = x - 12 + "px";
circle.style.backgroundColor= circleBG[index];
    circle.style.scale = (circles.length - index) / circles.length;
    circle.x = x;
    circle.y = y;
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
});
