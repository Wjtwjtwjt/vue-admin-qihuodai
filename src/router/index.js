import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  // { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   name: 'Dashboard',
  //   hidden: true,
  //   children: [{
  //     path: 'dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //   }]
  // },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页',breadcrumb: false,icon:"dashboard"}
      }
    ]
  },
  // 系统设置
  {
    path: '/system',
    component: Layout,
    redirect: '/system/argument',
    name: 'System',
    meta: { title: '系统设置',icon:"system"},
    children: [
      {
        path: 'argument',
        name: 'argument',
        component: () => import('@/views/system/argument'),
        meta: { title: '参数设置'},
      },
      {
        path: 'deal',
        name: 'deal',
        component: () => import('@/views/system/deal'),
        meta: { title: '协议类型管理' },
      },
      {
        path: 'protocol',
        name: 'protocol',
        component: () => import('@/views/system/protocol'),
        meta: { title: '协议管理' },
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import('@/views/system/notice'),
        meta: { title: '公告管理' },
      },
      {
        path: 'customer',
        name: 'customer',
        component: () => import('@/views/system/customer'),
        meta: { title: '客服管理' },
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/system/news'),
        meta: { title: '短信管理' },
      },
      {
        path: 'administrator',
        name: 'administrator',
        component: () => import('@/views/system/administrator'),
        meta: { title: '管理员管理' },
      },
      {
        path: 'control',
        name: 'control',
        component: () => import('@/views/system/control'),
        meta: { title: '权限管理' },
      },
      {
        path: 'operation ',
        name: 'operation ',
        component: () => import('@/views/system/operation'),
        meta: { title: '管理员操作日志' },
      },
    ]
  },
// 合约管理
{
  path: '/contract',
  component: Layout,
  redirect: '/contract/list',
  name: 'Contract',
  meta: { title: '合约管理',icon:"contract"},
  children: [
    {
      path: 'list',
      name: 'list',
      component: () => import('@/views/contract/list'),
      meta: { title: '合约列表' },
    },
    {
      path: 'addlist',
      name: 'addlist',
      component: () => import('@/views/contract/addlist'),
      hidden:true,
      meta: { title: '添加合约' },
    },
    {
      path: 'group',
      name: 'group',
      component: () => import('@/views/contract/group'),
      meta: { title: '合约分组列表' },
    },
    {
      path: 'addgroup',
      name: 'addgroup',
      component: () => import('@/views/contract/addgroup'),
      hidden:true,
      meta: { title: '添加合约组别' },
    },
    {
      path: 'editgroup',
      name: 'editgroup',
      component: () => import('@/views/contract/editgroup'),
      hidden:true,
      meta: { title: '修改合约组别' },
    },
    {
      path: 'bourse',
      name: 'bourse',
      component: () => import('@/views/contract/bourse'),
      meta: { title: '交易所管理' },
    },
    {
      path: 'currency',
      name: 'currency',
      component: () => import('@/views/contract/currency'),
      meta: { title: '币种管理' },
    },
    {
      path: 'editcurrency',
      name: 'editcurrency',
      component: () => import('@/views/contract/editcurrency'),
      hidden:true,
      meta: { title: '添加币种' },
    },
  ]
},
// 用户管理
{
  path: '/users',
  component: Layout,
  redirect: '/users/userlist',
  name: 'Users',
  meta: { title: '用户管理',icon:"users"},
  children: [
    {
      path: 'userlist',
      name: 'userlist',
      component: () => import('@/views/users/userlist'),
      meta: { title: '用户列表' },
    },
    {
      path: 'authentication',
      name: 'authentication',
      component: () => import('@/views/users/authentication'),
      meta: { title: '实名认证' },
    },
    {
      path: 'userevent',
      name: 'userevent',
      component: () => import('@/views/users/userevent'),
      meta: { title: '用户事件管理' },
    },
    {
      path: 'feedback',
      name: 'feedback',
      component: () => import('@/views/users/feedback'),
      meta: { title: '意见反馈管理' },
    },
  ]
},
// 代理管理
{
  path: '/agency',
  component: Layout,
  redirect: '/agency/agencylist',
  name: 'Agency',
  meta: { title: '代理管理',icon:"agency"},
  children: [
    {
      path: 'agencylist',
      name: 'agencylist',
      component: () => import('@/views/agency/agencylist'),
      meta: { title: '代理列表' },
    },
    {
      path: 'clientlist',
      name: 'clientlist',
      component: () => import('@/views/agency/clientlist'),
      meta: { title: '客户列表' },
    },
  ]
},
// 交易管理
{
  path: '/deal',
  component: Layout,
  redirect: '/deal/inventory',
  name: 'Deal',
  meta: { title: '交易管理',icon:"deal"},
  children: [
    {
      path: 'inventory',
      name: 'inventory',
      component: () => import('@/views/deal/inventory'),
      meta: { title: '持仓列表' },
    },
    {
      path: 'qoute',
      name: 'qoute',
      component: () => import('@/views/deal/qoute'),
      meta: { title: '手动平仓报价审核列表' },
    },
    {
      path: 'bargain',
      name: 'bargain',
      component: () => import('@/views/deal/bargain'),
      meta: { title: '成交历史' },
    },
  ]
},
// 资金管理
{
  path: '/capital',
  component: Layout,
  redirect: '/capital/backstage',
  name: 'Capital',
  meta: { title: '资金管理',icon:"capital"},
  children: [
    {
      path: 'backstage',
      name: 'backstage',
      component: () => import('@/views/capital/backstage'),
      meta: { title: '后台入金记录' },
    },
    {
      path: 'thirdparty ',
      name: 'thirdparty ',
      component: () => import('@/views/capital/thirdparty'),
      meta: { title: '第三方入金记录' },
    },
    {
      path: 'bank',
      name: 'bank',
      component: () => import('@/views/capital/bank'),
      meta: { title: '银行转账记录' },
    },
    {
      path: 'withdraw',
      name: 'withdraw',
      component: () => import('@/views/capital/withdraw'),
      meta: { title: '出金审核' },
    },
    {
      path: 'record',
      name: 'record',
      component: () => import('@/views/capital/record'),
      meta: { title: '出金记录' },
    },
  ]
},
// 营销管理
{
  path: '/market',
  component: Layout,
  redirect: '/market/information',
  name: 'Market',
  meta: { title: '营销管理',icon:"market"},
  children: [
    {
      path: 'information',
      name: 'information',
      component: () => import('@/views/market/information'),
      meta: { title: '资讯管理' },
    },
    {
      path: 'banner',
      name: 'banner',
      component: () => import('@/views/market/banner'),
      meta: { title: 'Banner管理' },
    },
    {
      path: 'brand',
      name: 'brand',
      component: () => import('@/views/market/brand'),
      meta: { title: '品牌管理' },
    },
  ]
},
// 其他设置
{
  path: '/sett',
  component: Layout,
  redirect: '/market/sett',
  name: 'Sett',
  meta: { title: '其他设置',icon:"sett"},
  children: [
    {
      path: 'guide',
      name: 'guide',
      component: () => import('@/views/sett/guide'),
      meta: { title: '新手指引' },
    },
    {
      path: 'backcard',
      name: 'backcard',
      component: () => import('@/views/sett/backcard'),
      meta: { title: '银行卡管理' },
    },
  ]
},
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
