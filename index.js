/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatlistScroll from './src/FlatlistScroll';
import DotShare from './src/DotShare';
import Homes from './src/Homes';
import PleaseShare from './src/PleaseShare';
import Eject from './src/Eject';

AppRegistry.registerComponent(appName, () => Eject);
