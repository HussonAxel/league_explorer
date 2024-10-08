import { HttpContext } from '@adonisjs/core/http'
import DataFetcher from '#services/data_fetcher'

export default class ItemsController {
  async index({ response }: HttpContext) {
    try {
      const data = await DataFetcher.fetchItemsData()
      return response.json(data)
    } catch (error) {
      return response.status(500).json({ error: 'Failed to fetch items data' })
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const data = await DataFetcher.fetchItemsData()
      const itemId = params.itemId

      if (data[itemId]) {
        return response.json(data[itemId])
      } else {
        return response.status(404).json({ error: 'Item not found' })
      }
    } catch (error) {
      return response.status(500).json({ error: 'Failed to fetch item data' })
    }
  }
}
