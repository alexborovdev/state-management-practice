import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import storeRedux from './redux/app/store.ts'
import storeRTK from './rtk/app/store.ts'
import AppRedux from './redux/app/App.tsx'
import AppRTK from './rtk/app/App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <Provider store={storeRedux}>
        <AppRedux />
      </Provider>
    </div>
    <div>
      <Provider store={storeRTK}>
        <AppRTK />
      </Provider>
    </div>
  </StrictMode>
)