// 登录相关的页面
import request from '@/utils/request'
// 登录界面
export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
// 获取用户列表
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
// 登出界面
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
