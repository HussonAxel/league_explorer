import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import DataFetcher from '#services/data_fetcher'

@inject()
export default class HomeController {
  constructor(protected dataFetcher: DataFetcher) {}

  async index({ inertia }: HttpContext) {
    const champions = await DataFetcher.fetchChampionsData()

    return inertia.render('home', { champions })
  }
}
