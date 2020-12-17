import Login from "../views/pages/login/Login";

const components = {
    login : {
        component: Login,
        path:'/login',
        name:'login'
    }
}



const allowPages = {
    guest:{
        routes : [components.login],
        redirect: components.login.path
    },
    user: {
        routes : [],
        redirect:'/'
    }
}


export default allowPages