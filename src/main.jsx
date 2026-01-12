/**
 * [INPUT]: 依赖 react 的 StrictMode，依赖 react-dom/client 的 createRoot，依赖 ./index.css 的 Tailwind 样式，依赖 contexts/AuthContext 的 AuthProvider
 * [OUTPUT]: 对外无导出，副作用是挂载 React 应用到 #root DOM 节点
 * [POS]: src/ 的应用入口，唯一职责是初始化渲染，被 index.html 引用
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
