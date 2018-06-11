import Axios from 'axios'

export default class API {

  constructor(header) {
    this.api = Axios.create({
      baseURL: 'https://reqres.in/',
      timeout: 60 * 1000,
      headers: header
    })
  }

  get(url, config, success, error) {
    this.api.get(url, config)
      .then(resp => { return success(resp) })
      .catch(err => { console.error(err); return error(err) })
  }
}
