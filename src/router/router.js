import {createRouter, createWebHistory} from "vue-router";
import PostsPage from "../pages/PostsPage";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import PostsPageWithStore from "../pages/PostsPageWithStore";
import PostsPageCompositionAPI from "../pages/PostsPageCompositionAPI";
import Contact from "../pages/Contact";
import Work from "../pages/Work";

const routes = [
    {
        path: "/",
        component: PostsPage
    },
    {
        path: "/posts",
        component: PostsPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostsPageWithStore
    },
    {
        path: '/composition',
        component: PostsPageCompositionAPI
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/work",
        component: Work,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router