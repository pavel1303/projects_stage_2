import './scss/style.scss';
import { App } from './ts/App';
import { storeData } from './ts/data';
import { Filters } from './ts/Filters';

const app = new App();
app.start(storeData);

const filters = new Filters();
filters.drawFilters();
