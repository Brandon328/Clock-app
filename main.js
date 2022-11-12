window.addEventListener('load', () => {
  tictac();
  btn_refresh_phrase.click();
});

const hours_minutes_span = document.getElementById('hours-minutes');
const seconds_span = document.getElementById('seconds');
const background = document.getElementById('bg');
const day_time_span = document.getElementById('day-time');
const day_icon = document.getElementById('day-icon');
const favicon = document.getElementById('favicon');
const title = document.getElementById('web-title');
const btn_refresh_phrase = document.getElementById('refresh-phrase-button');
const phrase_span = document.getElementById('txtphrase');
const author_span = document.getElementById('author');
let phrase_index;

const epochs = {
  'early_morning': {
    'background': './imgs/early_morning.jpeg',
    'phrase':'GOOD MORNING, IT\'S CURRENTLY',
    'icon': './imgs/sunrise.svg',
    'title': 'GOOD MORNING'
  },
  'morning': {
    'background': './imgs/morning.jpeg',
    'phrase':'GOOD MORNING, IT\'S CURRENTLY',
    'icon': './imgs/sun.svg',
    'title': 'GOOD MORNING'
  },
  'afternoon': {
    'background': './imgs/afternoon.png',
    'phrase':'GOOD AFTERNOON, IT\'S CURRENTLY',
    'icon': './imgs/sun.svg',
    'title': 'GOOD AFTERNOON'
  },
  'evening': {
    'background': './imgs/evening.jpeg',
    'phrase':'GOOD EVENING, IT\'S CURRENTLY',
    'icon': './imgs/sun.svg',
    'title': 'GOOD EVENING'
  },
  'night': {
    'background': './imgs/night.jpeg',
    'phrase':'GOOD NIGHT, IT\'S CURRENTLY',
    'icon': './imgs/night-moon.svg',
    'title': 'GOOD NIGHT'
  }
}

const phrases = [
  {
    'phrase': 'Be water. My friend',
    'author': 'Bruce Lee'
  },
  {
    'phrase': 'The people who are crazy enough to think they can change the world are the ones who do.',
    'author': 'Steve Jobs'
  },
  {
    'phrase': 'If you want to conquer fear, don\'t sit home and think about it. Go out and get busy.',
    'author': 'Dale Carnegie'
  },
  {
    'phrase': 'Mistakes al always forgivable, if one has the courage to admit them.',
    'author': 'Bruce Lee'
  },
  {
    'phrase': 'Action beats perfection.',
    'author': 'Mario Luna'
  },
  {
    'phrase': 'The only person you are destined to become, is the person you decide to be.',
    'author': 'Ralph Waldo Emerson'
  },
  {
    'phrase': 'Nothing tires more than mediocrity.',
    'author': 'Mario Luna'
  },
  {
    'phrase': 'When you have exhausted all possibilities, remember this: you haven\'t.',
    'author': 'Thomas Edison'
  },
]

btn_refresh_phrase.addEventListener('click', () => {
  phrase_index = phrase_index == undefined ? 0 : phrase_index+1;
  if (phrase_index >= phrases.length) phrase_index = 0;
  phrase_span.textContent = phrases[phrase_index].phrase;
  author_span.textContent = phrases[phrase_index].author;
});

function tictac() {
  let current_time = new Date();
  let hours = current_time.getHours();
  let minutes = current_time.getMinutes();
  let seconds = current_time.getSeconds();

  let hours_text = hours.toString().length == 1 ? `0${hours}` : hours;
  let minutes_text = minutes.toString().length == 1 ? `0${minutes}` : minutes;
  let seconds_text = seconds.toString().length == 1 ? `0${seconds}` : seconds;
  
  hours_minutes_span.textContent = hours_text + ':' + minutes_text;
  seconds_span.textContent = ':'+seconds_text

  switch (hours) {
    case 5:
    case 6:
      background.style.backgroundImage = "url('" + epochs.early_morning.background + "')";
      day_time_span.textContent = epochs.early_morning.phrase;
      day_icon.src=epochs.early_morning.icon;
      title.textContent=epochs.early_morning.title;
      favicon.setAttribute('href',epochs.early_morning.icon)
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      background.style.backgroundImage = "url('" + epochs.morning.background + "')";
      day_time_span.textContent = epochs.morning.phrase;
      day_icon.src=epochs.morning.icon;
      title.textContent=epochs.morning.title;
      favicon.setAttribute('href',epochs.morning.icon)
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      background.style.backgroundImage = "url('" + epochs.afternoon.background + "')";
      day_time_span.textContent = epochs.afternoon.phrase;
      day_icon.src=epochs.afternoon.icon;
      title.textContent=epochs.afternoon.title;
      favicon.setAttribute('href',epochs.afternoon.icon)
      break;
    case 16:
    case 17:
    case 18:
      background.style.backgroundImage = "url('" + epochs.evening.background + "')";
      day_time_span.textContent = epochs.evening.phrase;
      day_icon.src=epochs.evening.icon;
      title.textContent=epochs.evening.title;
      favicon.setAttribute('href',epochs.evening.icon)
      break;
    default:
      background.style.backgroundImage = "url('" + epochs.night.background + "')";
      day_time_span.textContent = epochs.night.phrase;
      day_icon.src=epochs.night.icon;
      title.textContent=epochs.night.title;
      favicon.setAttribute('href',epochs.night.icon)
      break;
  }
  
  setTimeout("tictac()",1000)
}