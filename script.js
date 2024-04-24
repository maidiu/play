const jQuery = document.getElementById('jQuery')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const orange = document.getElementById('orange')
const rave = document.getElementById('lightswitch-rave')
const bodyColor = document.body.style
let buttons = document.querySelectorAll('button')
const addColor = document.getElementById('add')
const skibidiRave = document.getElementById('skibidi-rave')

$('h1').css('color', 'purple')

function addButtons() {
    buttons = document.querySelectorAll('button')
        {
            buttons.forEach((button) => {
                if (button.classList.contains('deleteable')) {
                const startingColor = button.innerText;
                button.addEventListener('click', function() {
                    document.body.style.background = '';
                    document.body.style.background = `${startingColor}`
        //document.body.style.opacity = '0.5'
                    })
                button.addEventListener('dblclick', () => {
                    if (isPlaying) {
                        endRave();
                    } else {
                        raveTime(startingColor);
                    }
                })}}
        )}}



addButtons()

/*let isDark = false;
let origColor = ''

function toBlack() {
    document.body.style.background = 'black'
}

function toWhite() {
    document.body.style.background = 'white'
}*/


let raving;
let isPlaying = false;

function toggleRave(color) {
    document.body.style.background = color;
    document.body.classList.toggle('rave');
}

function raveTime(color) {
    raving = setInterval(() => toggleRave(color), 70);
    skibidiRave.currentTime = 0;
    skibidiRave.play();
    isPlaying = true;
    document.body.classList.add('go');
}

function endRave() {
    clearInterval(raving);
    skibidiRave.pause();
    isPlaying = false;
    document.body.classList.remove('go');
}

/*buttons.forEach((button) => {
    const startingColor = button.innerText;

    if (button.classList.contains('deleteable')) {
        button.addEventListener('dblclick', () => {
            if (isPlaying) {
                endRave();
            } else {
                raveTime(startingColor);
            }
        });
    }
});*/





/*buttons.forEach((button) => {
    let raving
    let isPlaying = false;

    function toggleRave() {
    let startingColor = button.innerText
    document.body.style.background = startingColor;
    document.body.classList.toggle('rave')
    }
    function raveTime() {
        raving = setInterval(toggleRave, 70)
        if (!isPlaying) {
            skibidiRave.currentTime = 0;
            skibidiRave.play();
            isPlaying = true;
          }
          document.body.classList.add('go')
    }
    function endRave() {
        clearInterval(raving)
        if (isPlaying) {
            skibidiRave.pause();
            isPlaying = false;
          }
          document.body.classList.remove('go')
    }
        if (button.classList.contains('deleteable')) {
            if (document.body.classList.contains('go')) {
                button.addEventListener('dblclick', endRave)
            } else if (!document.body.classList.contains('go')) {   
            button.addEventListener('dblclick', raveTime)
            } 
            } else { return }})
    /*else if (button.classList.contains('lightswitch-rave')) {
        button.addEventListener('mousdown', raveTime('white'))
        button.addEventListener('mouseup', endRave)*/
       

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

addColor.addEventListener('click', function(e) {
    e.preventDefault();
    $('button:first').before(`<button class='deleteable'>${colorDropdown.value.toLowerCase()}</button>`)
    addButtons();
})

$(document).on('click', 'button.deleteable', function(event) {
    event.preventDefault();
    if (event.shiftKey) {
    $(event.target).remove();}
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
  