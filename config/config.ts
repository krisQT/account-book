import { IConfig } from 'umi-types';
import path from 'path';
import slash from 'slash2';
import themeSettings from './themeSettings';

// ref: https://umijs.org/config/
const config: IConfig =  {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  hash: true,
  targets: {
    android: 5,
    ios: 7,
    chrome: 58,
    ie: 9,
  },
  theme: {
    'brand-primary': themeSettings.primaryColor,
    'brand-primary-tap': themeSettings.brandPrimaryTap
  },
  treeShaking: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      _: string,
      localName: string,
    ) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.mobile.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
          .map((a: string) => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  routes: [
    {
      path: '/user',
      component: '../layouts/loginLayout',
      routes: [
        { path: '/user/login', component: '../pages/login' }
      ]
    },
    {
      path: '/',
      component: '../layouts/basicLayout',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'account-book',
      dll: true,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ], 
      },
    }],
  ],
}

export default config;
