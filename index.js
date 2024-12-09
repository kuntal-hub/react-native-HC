/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import { AppRegistry } from 'react-native';
// import App from './App';
import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
// import App5 from './APP5';
// import App6 from './App6';
// import App7 from './App7';
// import App8 from './App8';
import App9 from './App9';
import { name as appName } from './app.json';
import { playbackService } from './musicPlayerServices';

AppRegistry.registerComponent(appName, () => App2);
TrackPlayer.registerPlaybackService(() => playbackService);
