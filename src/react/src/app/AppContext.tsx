import {createContext, Dispatch, SetStateAction} from 'react'

export type AppContext = {
  user: {
    accessToken?: string
  }
}

export const defaultAppState: AppContext = {
  user: {},
}

export const appContext = createContext<
  [AppContext, Dispatch<SetStateAction<AppContext>>]
>([defaultAppState, x => x])
