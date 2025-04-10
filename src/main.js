import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { authService } from './js/auth/authService.js'
import { AccountRequests } from './js/bankAccount/requests.js';


const auth = authService;

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: "/", 
            component: () => import('./components/Home.vue'),
            beforeEnter: () => console.log("home enter")
        },
        { 
            path: "/account/:id", 
            component: () => import('./components/account/BankAccount.vue'),
            props: (to) => {
                // since this is a function call each time we create this component
                // `service` is like a "scoped" dependency
                // `auth`, since it's created outside of this function, is a "singleton"
                const service = new AccountRequests(`base/api`, auth);

                return {
                    // you don't have to do it this way - it's just an example of what you *can* do
                    getTransactions: service.getTransactions.bind(service, to.params.id),
                    id: to.params.id
                };
            }
        },
        { 
            path: "/about", 
            component: () => import('./components/About.vue'), 
            beforeEnterd: () => console.log("about enter"),
        },
        { 
            path: "/fun", 
            component: () => import('./components/Fun.vue') 
        },
    ]
});

createApp(App)
    .use(router)
    .mount('#app');
