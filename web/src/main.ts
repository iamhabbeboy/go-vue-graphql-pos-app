import {createApp} from 'vue'
import App from './App.vue'
import "./index.css"
import {createStore, stateSymbol} from './store/store';

import { library } from "@fortawesome/fontawesome-svg-core";
import {faCheckCircle, faEdit, faSearch, faShoppingCart, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { createRouter, createWebHashHistory } from 'vue-router';

library.add(faEdit);
library.add(faTimesCircle);
library.add(faShoppingCart)
library.add(faSearch)
library.add(faCheckCircle)

const routes = [
    { 
        path: '/', 
        component: import( "./pages/Login.vue"), 
        meta: {
            hideGlobalComponent: true
        } 
    },
    { path: '/sale', component: import( "./pages/Home.vue") },
    { path: '/inventory', component: import( "./pages/Inventory.vue") },
    { path: '/transaction', component: import( "./pages/Transaction.vue") },
    { path: '/:pathMatch(.*)*', component: import( "./pages/404.vue") },
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

createApp(App)
    .component("icon", FontAwesomeIcon)
    .provide(stateSymbol, createStore())
    .use(router)
    .mount('#app')