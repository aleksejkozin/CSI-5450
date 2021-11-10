import React, {useState} from 'react'
import {Router} from './features/router/Router'
import {QueryClient, QueryClientProvider} from 'react-query'
import {appContext, AppContext, defaultAppState} from './app/AppContext'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <appContext.Provider value={useState<AppContext>(defaultAppState)}>
      <div className='App'>
        <header className='App-header'>
          <Router />
        </header>
      </div>
    </appContext.Provider>
  </QueryClientProvider>
)

export default App
