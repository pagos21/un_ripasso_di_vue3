import { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import BaseCardVue from './components/ui/BaseCard.vue';
import BaseButtonVue from './components/ui/BaseButton.vue';
import BaseBadgeVue from './components/ui/BaseBadge.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia)

//questi componeneti vengino diachiarati qui ("globali") perchè devono essere usati in svariati posti
app.component('base-card', BaseCardVue)
app.component('base-button', BaseButtonVue)
app.component('base-badge', BaseBadgeVue)

app.mount('#app');
