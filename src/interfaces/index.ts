import { VueConstructor } from 'vue'
import { RouteConfig } from 'vue-router'
import { Module } from 'vuex'

export interface ModuleInterface {
  stores?: Record<string, Module<any, any>>
  router: RouteConfig[]
  components?: Record<string, VueConstructor<Vue>>
}
