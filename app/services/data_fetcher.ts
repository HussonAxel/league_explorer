import axios from 'axios'

export default class DataFetcher {
  private static championsCache: any = null
  private static itemsCache: any = null

  static async fetchChampionsData() {
    if (!this.championsCache) {
      try {
        const { data } = await axios.get(
          'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json'
        )
        this.championsCache = data
      } catch (error) {
        console.error('Error fetching champions data:', error)
        throw new Error('Failed to fetch champions data')
      }
    }
    return this.championsCache
  }

  static async fetchItemsData() {
    if (!this.itemsCache) {
      try {
        const { data } = await axios.get(
          'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/items.json'
        )
        this.itemsCache = data
      } catch (error) {
        console.error('Error fetching items data:', error)
        throw new Error('Failed to fetch items data')
      }
    }
    return this.itemsCache
  }
}
