import "bootstrap/dist/css/bootstrap.css"
import "@/styles/icons.css"
import {createApp} from 'vue'
import App from './App'

import components from '@/components/UI'
import router from '@/router/router';
import store from "./store";
import directives from '@/directives/';

const app = createApp(App)

// глобальная регистрация компонент
components.forEach(component => {
  app.component(component.name, component)
})

// глобальная регистрация директив
directives.forEach(directive => {
  app.directive(directive.name, directive);
})

app
  .use(router)
  .use(store)
  .mount('#app')

import "bootstrap/dist/js/bootstrap.min"