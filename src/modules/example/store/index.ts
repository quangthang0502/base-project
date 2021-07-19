import { Module } from 'vuex'
import example from './example'

const authStores: Record<string, Module<any, any>> = {
  example
}

export default authStores
