const x = new MovingTitle(document.title, 300, 10)
x.init();

function MovingTitle(writeText, interval, visibleLetters) {
    var _instance = {};

    var _currId = 0;
    var _numberOfLetters = writeText.length;

    function updateTitle() {
        _currId += 1;
        if(_currId > _numberOfLetters - 1) {
            _currId = 0; 
        }

        var startId = _currId;
        var endId = startId + visibleLetters;
        var finalText;
        if(endId < _numberOfLetters - 1) {
            finalText = writeText.substring(startId, endId);
        } else {
            var cappedEndId = _numberOfLetters;
            endId = endId - cappedEndId;

            finalText = writeText.substring(startId, cappedEndId) +     writeText.substring(0, endId);
        }

        document.title = finalText; 
    }

    _instance.init = function() {
        setInterval(updateTitle, interval);
    };

    return _instance;
}

// Slideshow
const images = [
    './assets/MBTI/ENFJ.svg',
    './assets/MBTI/ENFP.svg',
    './assets/MBTI/ENTJ.svg',
    './assets/MBTI/ENTP.svg',
    './assets/MBTI/ESFJ.svg',
    './assets/MBTI/ESFP.svg',
    './assets/MBTI/ESTJ.svg',
    './assets/MBTI/ESTP.svg',
    './assets/MBTI/INFJ.svg',
    './assets/MBTI/INFP.svg',
    './assets/MBTI/INTJ.svg',
    './assets/MBTI/INTP.svg',
    './assets/MBTI/ISFJ.svg',
    './assets/MBTI/ISFP.svg',
    './assets/MBTI/ISTJ.svg',
    './assets/MBTI/ISTP.svg'
];
const time = 3000;
let i = 0;

function changeImg() {
    document.slide.src = images[i];

    if( i < images.length) {
        i++;
    } else {
        i = 0;
        changeImg();
    }

    setTimeout('changeImg()', time);
}
window.onload=changeImg;

// display MBTI type
const submit = document.getElementById('submitType')
const selectedValue = document.getElementById('selectType').value;

const displayType = submit.addEventListener('submit', selection = (event) => {

    switch(selectedValue) {
        case 'ISTJ':
            event.preventDefault();
            document.getElementById('ISTJ').focus();
            break;
        case 'ISFJ':
            event.preventDefault();
            document.getElementById('ISFJ').focus();
            break;
        case 'INTJ':
            event.preventDefault();
            document.getElementById('INTJ').focus();
            break;
        case 'INFJ':
            event.preventDefault();
            document.getElementById('INFJ').focus();
            break;
        case 'ESTJ':
            event.preventDefault();
            document.getElementById('ESTJ').focus();
            break;
        case 'ESFJ':
            event.preventDefault();
            document.getElementById('ESFJ').focus();
            break;
        case 'ENTJ':
            event.preventDefault();
            document.getElementById('ENTJ').focus();
            break;
        case 'ENFJ':
            event.preventDefault();
            document.getElementById('ENFJ').focus();
            break;
        case 'INTP':
            event.preventDefault();
            document.getElementById('INTP').focus();
            break;
        case 'INFP':
            event.preventDefault();
            document.getElementById('INFP').focus();
            break;
        case 'ENTP':
            event.preventDefault();
            document.getElementById('ENTP').focus();
            break;
        case 'ENFP':
            event.preventDefault();
            document.getElementById('ENFP').focus();
            break;
        case 'ISTP':
            event.preventDefault();
            document.getElementById('ISTP').focus();
            break;
        case 'ISFP':
            event.preventDefault();
            document.getElementById('ISFP').focus();
            break;
        case 'ESTP':
            event.preventDefault();
            document.getElementById('ESTP').focus();
            break;
        case 'ESFP':
            event.preventDefault();
            document.getElementById('ESFP').focus();
            break;
        default:
            event.preventDefault();
            console.log(value);
            break;
    }
})


