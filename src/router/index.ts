import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue'
import HelloWorld from '@/pages/HelloWorld.vue';
import EventList from '@/pages/EventList.vue';
import EventDay from '@/pages/EventDay.vue';
import EventAdd from '@/pages/EventAdd.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/EventDay',
    name: 'EventDay',
    component: EventDay,
    children: [
      {
        path: 'List',
        name: 'EventList',
        component: EventList,
      },
      {
        path: 'Add',
        name: 'EventAdd',
        component: EventAdd,
      }
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
