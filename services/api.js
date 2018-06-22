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

export function resolveGetAction(config, resolve) {
  if (config && config.action === 'refresh')
    return resolve[0]
  else if (config && config.action === 'next')
    return resolve[1]
  else
    return resolve[2]
}