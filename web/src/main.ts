import {createApp} from 'vue'
import App from './App.vue'
import "./index.css"
import {createStore, stateSymbol} from './store/store';

import { library } from "@fortawesome/fontawesome-svg-core";
import {faCheckCircle, faEdit, faSearch, faShoppingCart, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faEdit);
library.add(faTimesCircle);
library.add(faShoppingCart)
library.add(faSearch)
library.add(faCheckCircle)

createApp(App)
    .component("icon", FontAwesomeIcon)
    .provide(stateSymbol, createStore())
    .mount('#app')