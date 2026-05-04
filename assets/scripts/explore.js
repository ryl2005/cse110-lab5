// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImg = document.querySelector('#explore img');
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedVoice = voices[voiceSelect.value];

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.addEventListener('start', () => {
      faceImg.src = 'assets/images/smiling-open.png';
      faceImg.alt = 'Open mouthed smiling face';
    });

    utterance.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
      faceImg.alt = 'Smiling face';
    });

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  });
}
