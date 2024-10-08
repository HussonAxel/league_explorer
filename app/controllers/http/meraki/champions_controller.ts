import { HttpContext } from '@adonisjs/core/http'
import DataFetcher from '#services/data_fetcher'

export default class ChampionsController {
  async index({ response }: HttpContext) {
    try {
      const data = await DataFetcher.fetchChampionsData()
      return response.json(data)
    } catch (error) {
      return response.status(500).json({ error: 'Failed to fetch champions data' })
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const data = await DataFetcher.fetchChampionsData()
      const championName =
        params.championName.charAt(0).toUpperCase() + params.championName.slice(1).toLowerCase()

      if (data[championName]) {
        return response.json(data[championName])
      } else {
        return response.status(404).json({ error: 'Champion not found' })
      }
    } catch (error) {
      return response.status(500).json({ error: 'Failed to fetch champion data' })
    }
  }
}
