import './scss/style.scss';
import { App } from './ts/App';
import { storeData } from './ts/data';

const app = new App();
app.start(storeData);
