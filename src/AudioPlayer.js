import SoundFontPlayer from "soundfont-player";

const NullSoundFontPlayerNoteAudio = {
  stop() {},
};

const NullSoundFontPlayer = {
  play() {
    return NullSoundFontPlayerNoteAudio
  },
};

const AudioPlayer = () => {

  const audioContext = window.AudioContext && new window.AudioContext()

  let soundPlayer = NullSoundFontPlayer
  
  //setInstrument
  const Player = {
    setInstrument(instrumentName) {
      SoundFontPlayer.instrument(audioContext, instrumentName)
        .then(soundfontPlayer => {
          soundPlayer = soundfontPlayer
        })
        .catch(e => {
          soundPlayer = NullSoundFontPlayer
        })
    },
    playNote(note) {
      soundPlayer.play(note)
    },
  }
  return Player
};

export default AudioPlayer;
