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
                })
                skibidiRave.addEventListener('ended', endRave);
                hardcore.addEventListener('ended', endRave)

            }}
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
let dancing;
let pulsing;
let isPlaying = false;

function toggleRave(color) {
    document.body.style.background = color;
    document.body.classList.toggle('rave');
}
const ladybug = document.getElementById('ladybug')
function dance() {
    ladybug.classList.toggle('dance')
}
function pulse() {
    ladybug.classList.toggle('pulse')
}

let switchOn = false;
const songSwitch = document.querySelector('.switch')
songSwitch.addEventListener('click', toggleSwitch)
function toggleSwitch() {
    const switchElement = document.querySelector('.switch');
    switchOn = !switchOn;
    if (switchOn) {
        switchElement.classList.add('on');
    } else {
        switchElement.classList.remove('on');
    }
}

function raveTime(color) {
    if (!switchOn) {
    raving = setInterval(() => toggleRave(color), 70);
    setTimeout(()=> {
        dancing = setInterval(() => dance(), 220)
    }, 900)
    setTimeout(()=> {
        pulsing = setInterval(() => pulse(), 110)
    }, 3100)
    skibidiRave.currentTime = 0;
    skibidiRave.play();
    isPlaying = true;
    document.body.classList.add('go');
} else if (switchOn) {
    raving = setInterval(() => toggleRave(color), 70);
    setTimeout(()=> {
        dancing = setInterval(() => dance(), 220)
    }, 900)
    setTimeout(()=> {
        pulsing = setInterval(() => pulse(), 110)
    }, 3100)
    hardcore.currentTime = 0;
    hardcore.play();
    isPlaying = true;
    document.body.classList.add('go');

}}

function endRave() {
    clearInterval(raving);
    clearInterval(dancing)
    clearInterval(pulsing)
    ladybug.classList.remove('pulse')
    ladybug.classList.remove('dance')
    skibidiRave.pause();
    hardcore.pause();
    isPlaying = false;
    document.body.classList.remove('go');
}





/*function dance () {
    const ladybug = document.getElementById('ladybug')
    setTimeout((item) => {
        ladybug.style.transform = 'rotate(20deg)'
    }, 600)
    setTimeout((item) => {
        ladybug.style.transform = 'rotate(-20deg)'
    }, 1080)
    setTimeout((item) => {
        ladybug.style.transform = 'rotate(20deg)'
    }, 1560)
}*/

3740

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
        eichOne.innerText = `"${message}" --${randomResponse()}`;
        eichOne.style.fontSize = '2em'
        pressed = [];
    }})

$('h1').on('mouseover', function() {
    $('h1').text('stop hovering')
})

const responses = ['clever', 
                    'brilliant', 
                    'you don\'t say', 
                    'come up with that all on your own?', 
                    'go on', 
                    'who would have thought?', 
                    'go off, king', 
                    'the mind boggles', 
                    'bill shakespeare\'s got nothing on that',
                    'you do know this is all being logged and sent to your mother']


function randomResponse () {
    let selection = Math.floor(Math.random() * 10)
    return responses[selection]
}

$('h1').on('mouseleave', function() {
    $('h1').text('type, then press "enter"')
    $('h1').css('font-size', '3em')
})


let colorChange = document.querySelector('#color-change')

document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault();
    document.body.style.background = `${colorDropdown.value}`})
$('button').click(function(){
    $('h1').css('color')
})

let messaged = false;
let scolded = false;
let scold = document.createElement('div')

$(document).on("click", "button", function(event) {
    event.preventDefault();
    if (event.shiftKey) {
    let numberOfButtons = document.querySelectorAll('button').length;
    if (numberOfButtons <= 18) {
        scold.style.display = 'none'
    }}
});

addColor.addEventListener('click', function(e) {
    e.preventDefault();
    let butts = document.querySelectorAll('button');
    if (butts.length <= 17) {
        messaged = false;
        scolded = false;
        scold.style.display = 'none';
        $('button:first').before(`<button class='deleteable'>${colorDropdown.value.toLowerCase()}</button>`)
        addButtons();
    
    } else if (butts.length > 17 && messaged === false) {
        
        scold.innerText = 'that\'s probably enough eh; delete some first ffs'
        $("form").before(scold)
        scold.style.display = 'flex'
        messaged = true;
        return
    } else if ((messaged === true) & (scolded === false)) {
        scold.innerText = '"coachable" not your strong suit i see'
        let scolded = true;
        return 
    } else if ((messaged === true) && (scolded === true)) { return }
    
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
  