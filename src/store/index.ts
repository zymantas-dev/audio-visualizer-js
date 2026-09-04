import TrackModel from 'models/track.model'

import higherUrl from 'assets/audio/Hoober_Higher.mp3'
import graveUrl from 'assets/audio/Abandoned_Out_of_the_Grave.mp3'
import royaltyUrl from 'assets/audio/Egzod_Royalty.mp3'
import nobodyElseUrl from 'assets/audio/Abstrakt_Nobody_Else.mp3'
import xxiUrl from 'assets/audio/QR_XXI.mp3'

export interface Store {
  tracks: TrackModel[]
}

const store: Store = {
  tracks: [
    {
      artist: 'Hoober',
      trackName: 'Higher',
      url: 'Hoober_Higher.mp3',
      // prodUrl: 'https://audio-exp.kodeo.lt/audio_files/Hoober_Higher.mp3',
      prodUrl: higherUrl,
      attributionText: `Song: Hoober - Higher (feat. Vanessa Campagna) [NCS Release]
      Music provided by NoCopyrightSounds
      Free Download/Stream: http://ncs.io/HHigher
      Watch: http://youtu.be/RBPuDWzZUiA`,
    },
    {
      artist: 'Abandoned',
      trackName: 'Out of the Grave',
      url: 'Abandoned_Out_of_the_Grave.mp3',
      prodUrl: graveUrl,
      // prodUrl: 'https://audio-exp.kodeo.lt/audio_files/Abandoned_Out_of_the_Grave.mp3',
      attributionText: `Song: Abandoned - Out of the Grave (Feat. ENROSA) [NCS Release]
      Music provided by NoCopyrightSounds
      Free Download/Stream: http://ncs.io/OutOfTheGrave
      Watch: http://youtu.be/dWOj02nPyxk`,
    },
    {
      artist: 'Egzod, Maestro Chives, Neoni',
      trackName: 'Royalty',
      url: 'Egzod_Royalty.mp3',
      prodUrl: royaltyUrl,
      // prodUrl: 'https://audio-exp.kodeo.lt/audio_files/Egzod_Royalty.mp3.mp3',
      attributionText: `Song: Egzod, Maestro Chives, Neoni - Royalty [NCS Release]
      Music provided by NoCopyrightSounds
      Free Download/Stream: http://ncs.io/Royalty
      Watch: http://youtu.be/C5fLxtJH2Qs`,
    },
    {
      artist: 'Abstrakt',
      trackName: 'Nobody Else',
      url: 'Abstrakt_Nobody_Else.mp3',
      prodUrl: nobodyElseUrl,
      // prodUrl: 'https://audio-exp.kodeo.lt/audio_files/Abstrakt_Nobody_Else.mp3',
      attributionText: `Song: Abstrakt - Nobody Else [NCS Release]
      Music provided by NoCopyrightSounds
      Free Download/Stream: http://NCS.io/NobodyElse
      Watch: http://youtu.be/bNXMlIogpXc`,
    },
    {
      artist: 'QR',
      trackName: 'XXI',
      url: 'QR_XXI.mp3',
      prodUrl: xxiUrl,
      // prodUrl: 'https://audio-exp.kodeo.lt/audio_files/QR_XXI.mp3',
      attributionText: `Song: QR - XXI [NCS Release]
      Music provided by NoCopyrightSounds
      Free Download/Stream: http://NCS.io/XXI
      Watch: http://youtu.be/gR2irrU9Xeo`,
    }
  ],
}

export default store
