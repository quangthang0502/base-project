import { DefaultRespositoryInterface } from './../../../base/index'
import { ExampleEntity } from '../entities/example.entity'
import exampleData from '../mockup/data'
import { find } from 'lodash'
import request from '@/services/base/request'

export default class ExampleRepository implements DefaultRespositoryInterface<ExampleEntity> {
  prefix: string

  constructor(prefix: string) {
    this.prefix = prefix
  }

  async all(payload?: Record<string, any>): Promise<ExampleEntity[]> {
    try {
      console.log('request', request.defaults)
      const data = await request.get('user', {
        params: {
          page: 1,
          limit: 10
        }
      })
      return Promise.resolve(data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  findById(id: string): Promise<ExampleEntity | undefined> {
    try {
      const result = find(exampleData, value => value.id === id)
      return Promise.resolve(result || undefined)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  create(payload?: Record<string, any>): Promise<ExampleEntity> {
    throw new Error('Method not implemented.')
  }
  update(id: string, payload?: Record<string, any>): Promise<ExampleEntity> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
