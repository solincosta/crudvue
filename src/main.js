import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

// ESTO EN NUEVO
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

// ESTO EN NUEVO
import Button from "primevue/button"
import Slider from 'primevue/slider';
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import ToggleSwitch from 'primevue/toggleswitch';

const app = createApp(App).use(router)
app.use(VueAxios, axios)

// ESTO EN NUEVO (Multi-word)
app.component('ButtonPrime', Button);
app.component('SliderPrime', Slider);
app.component('RatingPrime', Rating);
app.component('TextArea', Textarea);

app.component('DataTable', DataTable);
app.component('ColumnTable', Column);

app.component('DialogPrime', Dialog);
app.component('InputText', InputText);
app.component('ToggleSwitch', ToggleSwitch);


// ESTO EN NUEVO
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app');
export {app};






