import './App.css'
import {ConfigProvider} from '@/providers'
import ConfigConsumer from '@/components/ConfigConsumer/ConfigConsumer.jsx'

function App() {

  return (
    <ConfigProvider>
        <ConfigConsumer />
    </ConfigProvider>
  )
}

export default App
