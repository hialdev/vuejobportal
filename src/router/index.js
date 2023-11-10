import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home.vue"
import FindJobView from "../views/FindJob.vue"
import CompaniesView from "../views/Companies.vue"
import MyProfileView from "../views/MyProfile.vue"

const routes = [
    {path:'', component: HomeView},
    {path:'/find-job', component: FindJobView},
    {path:'/company', component: CompaniesView},
    {path:'/profile', component: MyProfileView}
]

let router = createRouter({
    history: createWebHistory(),
    routes
})

export default router