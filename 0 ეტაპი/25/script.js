const points = [20, 10, 11, 25, 45, 7];
points.sort(function(a, b){return a - b});
document.getElementById("test").innerHTML = points;