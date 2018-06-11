import apisauce from 'apisauce'

export function api(config) {
  const api = apisauce.create({
    baseURL: 'https://reqres.in/',
    ...config
  })

  return {
    listUser: (params) => { return api.get('/api/users', params) }
  }

}