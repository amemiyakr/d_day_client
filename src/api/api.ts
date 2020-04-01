import MEAxios from '@/axios/MEAxiosInterceptors'

// API Menu
export const apiMenu = () => MEAxios.get('menu').then(r => { return r })
