import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectsIndex from './pages/ProjectsIndex.vue';
import ProjectsShow from './pages/ProjectsShow.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'AppHome',
component: AppHome,
},
{
path: '/projects',
name: 'ProjectsIndex',
component: ProjectsIndex,
},
{
path: '/projects/:id',
name: 'ProjectsShow',
component: ProjectsShow
},
{
path: '/404',
name: '404-not-found',
component: Error404
},
]
});
export { router };