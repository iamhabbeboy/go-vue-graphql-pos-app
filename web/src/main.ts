import {createApp} from 'vue'
import App from './App.vue'
import "./index.css"
import {createStore, stateSymbol} from './store/store';

createApp(App)
    .provide(stateSymbol, createStore())
    .mount('#app')