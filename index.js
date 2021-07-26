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