import { StrictMode } from 'react'
import { UseEffect } from './components/hooks/useEffect/UseEffect.jsx';
import { createRoot } from 'react-dom/client'
import { Challenge } from './components/hooks/useEffect/EffectChallenge.jsx';
import { HowFetchAPI } from './components/hooks/useEffect/HowFetchAPI.jsx'
import { UseRef } from './components/hooks/useRef/UseRef.jsx';
import { UseId } from './components/hooks/useId/UseId.jsx';
import { ParentComponent } from './components/PropDrilling.jsx';
import { DarkLight,ThemeProvider } from './projects/DarkLight.jsx';
import { UseReducer } from './components/hooks/useReducer/UseReducer.jsx';
import { ReactMemo } from './components/hooks/Memo/ReactMemo.jsx';
import { UseMemo } from './components/hooks/Memo/UseMemo.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UseEffect/> */}
    {/* <Challenge/> */}
    {/* <HowFetchAPI/> */}
    {/* <UseRef/> */}
    {/* <UseId/> */}
    {/* <ParentComponent/> */}

    {/* <ThemeProvider>
      <DarkLight/>
    </ThemeProvider> */}
    {/* <UseReducer/> */}
    {/* <ReactMemo/> */}
    <UseMemo/>

  </StrictMode>
)
