import Vue from 'vue'
import Router from 'vue-router'
import layout from "../layout";
import HelloWorld from "@/components/HelloWorld";
import task from "@/components/task";
import myTask from "@/components/myTask";
import manageUser from "@/components/manageUser";


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: () => import('@/components/login'),
            meta: {title: '拓扑自动化系统', noCache: true},
            hidden: true
        },
        {
            path: '/dashboard',
            // redirect: '/dashboard',
            component: layout,
            children: [
                {
                    path: '/dashboard',
                    component: HelloWorld,
                    name: '主页',
                },
                {
                    path: '/task',
                    component: task,
                    name: '任务管理',
                },
                {
                    path: '/myTask',
                    component: myTask,
                    name: '我的任务',
                },
                {
                    path: '/manageUser',
                    component: manageUser,
                    name: '用户管理',
                }
            ]
        },
    ]
})
