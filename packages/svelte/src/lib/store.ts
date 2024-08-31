import type { Page } from '@jamesst20/inertia-core'
import { writable } from 'svelte/store'
import type { ResolvedComponent } from './types'

interface Store {
  component: ResolvedComponent | null
  page: Page | null
  key?: number | null
}

const store = writable<Store>({
  component: null,
  page: null,
  key: null,
})

export default store
