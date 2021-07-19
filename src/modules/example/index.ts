import { ModuleInterface } from '@/interfaces'
import exampleRouters from './router'
import exampleStores from './store'
import exampleComponents from './components/common'

const exampleModule: ModuleInterface = {
  router: exampleRouters,
  stores: exampleStores,
  components: exampleComponents
}

export default exampleModule
