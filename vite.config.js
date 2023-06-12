import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const fs = require('fs');
// const googleCredentials = JSON.parse(fs.readFileSync('./google-credentials.json'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // pluginOptions: {
  //   google: {
  //     apiKey: googleCredentials.apiKey,
  //     clientId: googleCredentials.clientId,
  //     discoveryDocs: googleCredentials.discoveryDocs,
  //     scope: googleCredentials.scope
  //   }
  // }
})

