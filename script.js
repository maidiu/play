const jQuery = document.getElementById('jQuery')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const orange = document.getElementById('orange')
const rave = document.getElementById('lightswitch-rave')
const bodyColor = document.body.style
const buttons = document.querySelectorAll('button')

$('h1').css('color', 'purple')


for (let i = 0; i < (buttons.length - 1); i++) {
    buttons[i].addEventListener('click', function() {
    document.body.style.background = '';
    document.body.style.background = `${buttons[i].innerHTML}`
    //document.body.style.opacity = '0.5'
})}

/*let isDark = false;
let origColor = ''

function toBlack() {
    document.body.style.background = 'black'
}

function toWhite() {
    document.body.style.background = 'white'
}*/

let raving



function toggleRave() {
    document.body.style.background = '';
    document.body.classList.toggle('rave')
}

function raveTime() {
    raving = setInterval(toggleRave, 100)
}

function endRave() {
    clearInterval(raving)
}

rave.addEventListener('mousedown', raveTime)
rave.addEventListener('mouseup', endRave)

/*rave.addEventListener('click', ()=> {
    if (isDark === false) {
    toBlack()
    isDark = true;
    } else { toWhite()
             isDark = false
    }
})*/






jQuery.addEventListener('mouseover', () => {
    $('h1').css('color', 'red')
})

jQuery.addEventListener('mouseout', ()=> {
    $('h1').css('color', 'purple')
})

console.log($('img').attr('src'))
$('#logo').addClass('bear')

/*$('button').click(function(this) {
    $('h1').css('color', `${this.innerText}`)
})*/
let eichOne = document.getElementById('jQuery')

document.querySelectorAll('button').forEach((butt) => {
    butt.addEventListener('click', function() {
    eichOne.style.color = `dark${butt.innerText}`
})})

/*window.addEventListener('keydown', function(e) {

    if (e.keyCode === 32 && window.pageYOffset === 0) {
        e.preventDefault();
  }});*/
  

let pressed = []


$(document).keypress(function(event) {
    if (pressed.length === 0) {
        message = '';
        $('#jQuery').text('');
    }
    pressed.push(event.key)
    $('h1').text('you\'re typing')
})

let message = '';

$(document).on('keypress', function(event) {
    if (event.which === 13) {
        for (let i = 0; i < pressed.length - 1; i++) {
            message += pressed[i];
          }
        eichOne.innerText = `you typed: ${message}`;
        pressed = [];
    }})

$('h1').on('mouseover', function() {
    $('h1').text('you\'re hovering')
})

$('h1').on('mouseleave', function() {
    $('h1').text('you\ left')
})


let colorChange = document.querySelector('#color-change')

document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault();
    document.body.style.background = `${colorDropdown.value}`})

$('button').click(function(){
    $('h1').css('color')
})


const colorNames = [
    'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond',
    'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue',
    'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen',
    'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen',
    'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue',
    'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite',
    'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo',
    'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan',
    'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen',
    'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen',
    'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen',
    'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream',
    'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid',
    'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum',
    'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown',
    'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen',
    'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow',
    'YellowGreen'
  ];
  
  const colorDropdown = document.querySelector('#color-dropdown');
  
  colorNames.forEach(color => {
    const option = document.createElement('option');
    option.value = color.toLowerCase();
    option.textContent = color;
    colorDropdown.appendChild(option);
  });
  