import router from '@adonisjs/core/services/router'
// import { middleware } from '#start/kernel'

const API_BASE_URL = 'api/v1'
const ChampionsController = () => import('#controllers/http/meraki/champions_controller')
const ItemsController = () => import('#controllers/http/meraki/items_controller')

router
  .group(() => {
    router.get('/items', [ItemsController, 'index'])
    router.get('/items/:itemId', [ItemsController, 'show'])
    router.get('/champions', [ChampionsController, 'index'])
    router.get('/champions/:championName', [ChampionsController, 'show'])
  })
  .prefix(API_BASE_URL)
//   .use(middleware.auth())
