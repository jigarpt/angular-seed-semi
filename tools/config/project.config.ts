import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
      'node_modules/font-awesome/fonts/**'
  ];

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      { src: 'font-awesome/css/font-awesome.min.css', inject: true },
      { src: 'ngx-toastr/toastr.css', inject: true }
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [
    {
      name: '@ngx-translate/core',
      path: 'node_modules/@ngx-translate/core/bundles/core.umd.js'
    }, {
      name: '@ngx-translate/http-loader',
      path: 'node_modules/@ngx-translate/http-loader/bundles/http-loader.umd.js'
    }, {
      name: 'lodash',
      path: 'node_modules/lodash/lodash.js'
    }, {
      name: 'ngx-progressbar',
      path: 'node_modules/ngx-progressbar/bundles/ngx-progressbar.umd.js'
    }, {
      name: 'ngx-toastr',
      path: 'node_modules/ngx-toastr/toastr.umd.js'
    }];

    this.addPackagesBundles(additionalPackages);

    this.ENABLE_SCSS = true;

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
