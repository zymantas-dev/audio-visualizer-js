const createAudio = async (url: string) => {
  // Fetch audio data and create a buffer source
  const res = await fetch(url)
  const buffer = await res.arrayBuffer()
  const context = new (window.AudioContext || window.webkitAudioContext)()
  let clicked = false
  let offset = 0
  let startedAt = 0
  const source = context.createBufferSource()
  source.buffer = await new Promise<AudioBuffer>((res) =>
    context.decodeAudioData(buffer, res)
  )
  source.loop = true
  // source.start(0)
  // This is why it doesn't run in Safari 🍏🐛. Start has to be called in an onClick event
  // which makes it too awkward for a little demo since you need to load the async data first
  // Create gain node and an analyser
  const gain = context.createGain()
  const analyser = context.createAnalyser()
  analyser.fftSize = 256
  source.connect(analyser)
  analyser.connect(gain)
  // The data array receive the audio frequencies
  const data = new Uint8Array(analyser.frequencyBinCount)

  return {
    context,
    source,
    gain,
    data,
    duration: source.buffer.duration,

    getCurrentTime: () => {
      if (!clicked || context.state !== 'running') return offset
      return (offset + context.currentTime - startedAt) % source.buffer!.duration
    },

    play: () => {
      if (!clicked) {
        source.start(0)
        clicked = true
        startedAt = context.currentTime
      }

      context.resume()
    },
    stop: () => {
      if (clicked && context.state === 'running') {
        offset = (offset + context.currentTime - startedAt) % source.buffer!.duration
        startedAt = context.currentTime
      }
      context.suspend()
    },
    // This function gets called every frame per audio source
    update: () => {
      // let now = Date.now()

      analyser.getByteFrequencyData(data)

      // Calculate a frequency average
      // const avg = data.reduce((prev, cur) => prev + cur / data.length, 0)
      return data.reduce((prev, cur) => prev + cur / data.length, 0)
    },
  }
}

export default createAudio
