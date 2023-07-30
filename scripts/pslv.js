function show1() {
    document.getElementById("topic").innerHTML = "Payload Fairing and Fourth Stage";
    document.getElementById('image_on_click').setAttribute('src', 'styles/images/PSLV - Copy.png');
    document.getElementById('details_about_part').innerHTML = `Capable of launching multiple payloads at different orbits, the fourth stage consists of two PS4 liquid engines and is responsible for the proper launching of satellites in desired orbits. Its max upthrust is 14.6kN.
    `
}

function show2() {
    document.getElementById("topic").innerHTML = "Third Stage";
    document.getElementById('image_on_click').setAttribute('src', 'styles/images/PSLV - Copy (2).png');
    document.getElementById('details_about_part').innerHTML = `The third stage consists of single HTPB based propellant. Its max upthust is 240kN.`
}

function show3() {
    document.getElementById("topic").innerHTML = "Second Stage";
    document.getElementById('image_on_click').setAttribute('src', 'styles/images/PSLV - Copy (3).png');
    document.getElementById('details_about_part').innerHTML = `The second stage consists of a single Vikas Liquid Engine that developed in the 1990s. Its max upthrust is 799kN.`;
}

function show4() {
    document.getElementById("topic").innerHTML = "First Stage";
    document.getElementById('image_on_click').setAttribute('src', 'styles/images/PSLV - Copy (4).png');
    document.getElementById('details_about_part').innerHTML = `The first stage uses 139 tons of HTPB propellant to provide the initial large amount of thrust needed for take-off using a S139 booster rocket. Its max upthrust is 4800kN.`;
}

function show5() {
    document.getElementById("topic").innerHTML = "Strap-on Boosters";
    document.getElementById('image_on_click').setAttribute('src', 'styles/images/PSLV - Copy (5).png');
    document.getElementById('details_about_part').innerHTML = `PSLV-XL uses 6 extended strap-ons of 12 tonnes each, the PSLV-CA (core alone version) does not use any strap-on motors, PSLV-DL uses 2 and PSLV QL uses 4.`;
}
