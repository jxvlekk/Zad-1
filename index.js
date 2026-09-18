//zad 1
let o = prompt('Podaj pierwszą wartość:');
document.write(o + '<br>');
let p = prompt('Podaj drugą wartość:');
document.write(p + '<br>');
let q = prompt('Podaj trzecią wartość:');
document.write(q + '<br>');
let r=parseInt(o) + parseInt(p) + parseInt(q);
document.write(+ o + '+' + p + '+' + q + '=' + r + '<br>');
// zad 2
let v = (parseInt(o) + parseInt(p) + parseInt(q)) / 3;
document.write('srednia' + '='  + v + '<br>');
// zad 3
document.write(o + '<br>');
let c = parseInt(o) + parseInt(p); // Suma dwóch liczb
document.write(o + '+' + p + '=' + c + '<br>');
c = o - p; // Różnica liczb
document.write(o +'-' + p + '=' + c + '<br>');
c = o * p; // Iloczyn liczb
document.write(o + '*' + p + '=' + c + '<br>');
// zad 4
document.write(Math.sqrt(o) + '<br>');
// zad 5
b = o * o
document.write("pole kwadratu wynosi " + b + '<br>')
// zad 6
d = 2 * (o * p + o * q + p * q)
document.write("pole prostopadloscianu wynosi " + d + '<br>')
// zad 7
h = 3.14 * (o * o)
document.write("pole koła wynosi " + h + '<br>')
j = 2 * 3.14 * o
document.write("obwód koła wynosi " + j + '<br>')
// zad 8
let cena = parseFloat(prompt('Wprowadz obecną cenę benzyny za litr: '));
let trasa = 360;
let spalanie = 8;
let litry = trasa * spalanie / 100;
let koszt = litry * cena;
document.write("trasa: " + trasa + ' km<br>');
document.write("Spalanie: " + spalanie + ' 1/100 km<br>');
document.write("Potrzebna ilość benzyny: " + litry + ' l<br>');
document.write("koszt przejazdu:  " + koszt + ' zł<br>');
// zad 9
let trasakm = parseFloat(prompt('Wprowadz długość trasy w km: '));
let spalaniefury = parseFloat(prompt('Wprowadz spalanie samochodu: '));
let iloscPaliwa = trasakm * spalaniefury / 100;
let kosztPrzejazdu = iloscPaliwa * cena;
document.write("ilość potrzebnego paliwa: " + iloscPaliwa + ' zł<br>');
document.write("koszt przejazdu:  " + kosztPrzejazdu + ' zł<br>');
// zad 10
let kwota2 = parseFloat(prompt('Wprowadź kwotę lokaty:'));
let oprocentowanie = 0.08;
let podatekBelki = 0.19;
let odsetki = kwota2 * oprocentowanie;
let podatek = odsetki * podatekBelki;
let zysk = odsetki - podatek;
document.write('Kwota lokaty: ' + kwota2 + ' zł<br>');
document.write('Odsetki przed opodatkowaniem: ' + odsetki + ' zł<br>');
document.write('Podatek Belki: ' + podatek + ' zł<br>');
document.write('Zysk z lokaty: ' + zysk + ' zł<br>');