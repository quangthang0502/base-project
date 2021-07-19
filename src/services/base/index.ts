export interface BaseRepositoryInterface {
  prefix: string
}

export interface DefaultRespositoryInterface<T> extends BaseRepositoryInterface {
  all(payload?: Record<string, any>): Promise<Array<T>>
  findById(id: string | number): Promise<T | undefined>
  create(payload?: Record<string, any>): Promise<T>
  update(id: string | number, payload?: Record<string, any>): Promise<T>
  delete(id: string | number): Promise<boolean>
}
