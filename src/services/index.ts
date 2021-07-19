import ExampleRepository from './modules/example/repositories/example.respository'

export { fetchResource, IAxiosCallBack } from './base/request'

export function getRepo(type: 'example', prefix: string): ExampleRepository | undefined {
  if (type === 'example') {
    return new ExampleRepository(prefix)
  }
  return undefined
}

export { ExampleRepository }
