import PianoKey from "./PianoKey";
import AudioPlayer from "./AudioPlayer";

export default function Keyboard() {

  const size = 2;
  const tone = 4;

  const audioPlayer = AudioPlayer()
  audioPlayer.setInstrument("acoustic_grand_piano")

  const setOfKeys = id => {
    return [
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "a" : ""}
        id={id}
        note={"C"}
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "w" : ""}
        id={id}
        note={"C#"}
        black
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "s" : ""}
        id={id}
        note={"D"}
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "e" : ""}
        id={id}
        note={"D#"}
        black
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "d" : ""}
        id={id}
        note={"E"}
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "f" : ""}
        id={id}
        note={"F"}
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "t" : ""}
        id={id}
        note={"F#"}
        black
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "g" : ""}
        id={id}
        note={"G"}
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "y" : ""}
        id={id}
        note={"G#"}
        black
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "h" : ""}
        id={id}
        note={"A"}
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "u" : ""}
        id={id}
        note={"A#"}
        black
      />,
      <PianoKey
        ac={audioPlayer}
        tone={tone}
        keyCode={id === 1 ? "j" : ""}
        id={id}
        note={"B"}
      />,
    ]
  }



  let keys = []
  for (let i = 0; i < size; i++) {
    keys.push(setOfKeys(i + 1))
  }

  return keys
}