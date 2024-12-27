import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

createApp(App).mount('#app')
createApp(Menu).mount('#menu')
createApp(Footer).mount('#footer')
createApp(Header).mount('#header')