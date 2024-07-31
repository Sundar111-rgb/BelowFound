/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatlistScroll from './src/FlatlistScroll';
import DotShare from './src/DotShare';

AppRegistry.registerComponent(appName, () => DotShare);
