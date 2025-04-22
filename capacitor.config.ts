import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wsmm.miniapp.news',
  appName: 'wsmm-news-mini-app',
  webDir: 'www',
  server: {
    cleartext: true
  },
  bundledWebRuntime: false
};

export default config;
