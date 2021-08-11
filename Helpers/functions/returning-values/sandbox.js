// retuning values

const calcArea = function (radius) {
 let area = 3.14 * radius ** 2;
 return area;
};

const area = calcArea(10);
console.log(area); //314

const calcVol = function (area, height) {
 let volume = area * height;
 return volume;
};
// passes the value of the calcArea function and mutiplies it by the height of the cylinder.
calcVol(area, 10);
const volume = calcVol(area, 10);
console.log(volume); //3140
