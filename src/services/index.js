import { multi, method } from '@ebflat9/fp'
import * as LocalStorageService from './LocalStorageService'
export * as APIService from './APIService'

export const strategy = multi(
  method(
    (key) => key === 'user' || key === 'token' || key === 'theme',
    () => LocalStorageService,
  ),
)
