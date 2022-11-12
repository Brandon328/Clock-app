window.addEventListener('load', () => {
  tictac();
});

const hours_minutes_span = document.getElementById('hours-minutes');
const seconds_span = document.getElementById('seconds');
const background = document.getElementById('bg');
const day_time_span = document.getElementById('day-time');
const day_icon = document.getElementById('day-icon');

const epochs = {
  'early_morning': {
    'background': './imgs/early_morning.jpeg',
    'phrase':'GOOD MORNING, IT\'S CURRENTLY',
    'icon': './imgs/sun.svg',
  },
  'morning': {
    'background': './imgs/morning.jpeg',
    'phrase':'GOOD MORNING, IT\'S CURRENTLY',
    'icon': './imgs/sun.svg',
  },
  'afternoon': {
    'background': './imgs/afternoon.png',
    'phrase':'GOOD AFTERNOON, IT\'S CURRENTLY',
    'icon': './imgs/sun.svg',
  },
  'evening': {
    'background': './imgs/evening.jpeg',
    'phrase':'GOOD EVENING, IT\'S CURRENTLY',
    'icon': './imgs/sun.svg',
  },
  'night': {
    'background': './imgs/night.jpeg',
    'phrase':'GOOD NIGHT, IT\'S CURRENTLY',
    'icon': './imgs/moon.svg',
  }
}

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
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      background.style.backgroundImage = "url('" + epochs.morning.background + "')";
      day_time_span.textContent = epochs.morning.phrase;
      day_icon.src=epochs.morning.icon;
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      background.style.backgroundImage = "url('" + epochs.afternoon.background + "')";
      day_time_span.textContent = epochs.afternoon.phrase;
      day_icon.src=epochs.afternoon.icon;
      break;
    case 16:
    case 17:
    case 18:
      background.style.backgroundImage = "url('" + epochs.evening.background + "')";
      day_time_span.textContent = epochs.evening.phrase;
      day_icon.src=epochs.evening.icon;
      break;
    default:
      background.style.backgroundImage = "url('" + epochs.night.background + "')";
      day_time_span.textContent = epochs.night.phrase;
      day_icon.src=epochs.night.icon;
      break;
  }
  
  setTimeout("tictac()",1000)
}