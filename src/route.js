
import LoginPage from './pages/login.vue';
import RegistrationPage from './pages/registration.vue';
import DashboardPage from './pages/admin/dashboard.vue';

function guardMyroute(to, from, next){
    var isAuthenticated= false;
    if(localStorage.getItem('accessToken')){
        isAuthenticated = true;
    }else{
        isAuthenticated= false;
    }
    if(isAuthenticated){
        next(); // allow to enter route
    }
    else{
        next('/login'); // go to '/login';
    }
}
export const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/registration',
        name: 'registration',
        component: RegistrationPage,
    },
    {
        name: 'dashboard',
        path: '/',
        beforeEnter : guardMyroute,
        component: DashboardPage
    },
];

