import React, { Suspense, useState, useEffect, useCallback } from 'react'

import Loader from 'components/Loader/Loader'
import Layout from 'components/Layout/Layout'
import Visualizer3D from 'components/Visualizer3D'
import Playlist from 'components/Audio/Playlist'

import TrackModel from 'models/track.model'

import store from 'store'

const App: React.FC = () => {
  const { tracks } = store
  const [trackIndex, setTrackIndex] = useState(0)
  const [useBloom, setUseBloom] = useState(true)
  const [currentTrack, setCurrentTrack] = useState<TrackModel>(
    tracks[trackIndex]
  )

  useEffect(() => {
    setCurrentTrack(tracks[trackIndex])
  }, [trackIndex])

  const [playing, setPlaying] = useState(false)
  const [timeline, setTimeline] = useState({ currentTime: 0, duration: 0 })

  const onTimelineChange = useCallback((currentTime: number, duration: number) => {
    setTimeline({ currentTime, duration })
  }, [])

  const onPlay = () => {
    if (playing) {
      setPlaying(false)
    } else {
      setPlaying(true)
    }
  }

  const onNextTrack = () => {
    setPlaying(false)
    setTrackIndex(trackIndex < store.tracks.length - 1 ? trackIndex + 1 : 0)
  }

  const onPreviousTrack = () => {
    setPlaying(false)
    setTrackIndex(trackIndex > 0 ? trackIndex - 1 : store.tracks.length - 1)
  }

  const onChangeTrack = (index: number) => {
    if (trackIndex === index) {
      setPlaying(!playing)
    } else {
      setPlaying(false)
      setTrackIndex(index)

      setTimeout(() => {
        setPlaying(true)
      }, 100)
    }
  }

  return (
    <>
      <Layout>
        <div style={{ flex: 1, position: 'relative' }}>
          <Suspense fallback={<Loader />}>
            <Visualizer3D
              url={currentTrack.url}
              prodUrl={currentTrack.prodUrl}
              playing={playing}
              useBloom={useBloom}
              onTimelineChange={onTimelineChange}
            />
          </Suspense>
        </div>

        <Playlist
          playing={playing}
          items={tracks}
          currentTrack={currentTrack}
          onChange={onChangeTrack}
          onPlay={onPlay}
          onNextTrack={onNextTrack}
          onPreviousTrack={onPreviousTrack}
          progress={timeline.duration ? (timeline.currentTime / timeline.duration) * 100 : 0}
        />
      </Layout>
    </>
  )
}

export default App
