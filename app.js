
const audioClips = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const App = () => {

  const [volume, setVolume] = React.useState(1)

  return (
    <div className="container-fluid min-vh-100 text-white" style={{backgroundColor: '#30336b'}} id="drum-machine">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center justify-content-center">
        <h1 className="text-info my-5" id="display" style={{height: '50px'}}></h1>
          {audioClips.map(clip => {
            return (
              <Pad key={clip.id} clip={clip} volume={volume}/>
            )
          })}
          <br />
          <h2>Volume</h2>
          <input className="w-50"type="range" step="0.01" onChange={(e) => setVolume(e.target.value)} value={volume} min="0" max="1"/>
        </div>
      </div>
    </div>
  )
}

const Pad = ({clip, volume}) => {

  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
  },)

  const handleKeyPress = (e) => {
    if(e.keyCode === clip.keyCode) playSound()
  }

  const playSound = () => {
    document.getElementById('display').innerHTML = clip.id
    const currClip = document.getElementById(clip.keyTrigger)
    setActive(true)
    setTimeout(() => setActive(false), 200)
    currClip.volume = volume
    currClip.currentTime = 0
    currClip.play()
  }

  return (
    <div id={clip.id} onClick={playSound} className={`drum-pad btn btn-outline-secondary btn-lg col-3 m-2 ${active && 'btn-warning'}`}>
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      <h1 className="text-white">{clip.keyTrigger}</h1>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)