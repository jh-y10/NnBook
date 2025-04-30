import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 클라이언트에서는 /api 로 시작하는 모든 요청을
      // 아래 설정에 따라 알라딘 서버로 포워딩
      '/api': {
        target: 'https://www.aladin.co.kr',
        changeOrigin: true,
        // 요청 경로를 /api → /ttb/api 로 바꿔 줍니다.
        // 예: /api/ItemList.aspx → /ttb/api/ItemList.aspx
        rewrite: (path) => path.replace(/^\/api/, '/ttb/api'),
      },
    },
  },
})
