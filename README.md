This is an **semi-advance** seed project for Angular apps based on [Minko Gechev's](https://github.com/mgechev) [angular-seed](https://github.com/mgechev/angular-seed).

An advance version of angular-seed is already available [angular-seed-advanced](https://github.com/NathanWalker/angular-seed-advanced)

This angular seed is aimed at providing common dependencies / packages required for application development. 

#### Currenlty planning to integrate following packages:
- [ngx-translate/core](https://github.com/ngx-translate/core) i18n support. - Done.
- [ngx-translate/http-loader](https://github.com/ngx-translate/http-loader) loading language files using http. - Done.
- Font Awesome based on [this article] (https://github.com/mgechev/angular-seed/wiki/Add-external-fonts) and (https://github.com/mgechev/angular-seed/issues/541).
- SCSS support based on [this article](https://github.com/mgechev/angular-seed/wiki/Working-with-SASS). - Done
- [lodash](https://lodash.com/)
- [ngx-progressbar] (https://github.com/MurhafSousli/ngx-progressbar)
- [ngx-toastr](https://github.com/scttcper/ngx-toastr) - use tostr.service.ts  whereever required.
- [ng2-validation](https://github.com/yuyang041060120/ng2-validation) - AOT build is not working, hence not implemented yet. 
- [http-wrapper](https://github.com/NColey/angular-http-wrapper) - included but not tested yet. Used interceptor for common request auth and error handling. 

#Issue (Contribution is welcome and appreciated)
- serve.prod.aot doesn't work - due to "translate" directive it gives runtime javascript error. 
- lodash: rollup aot build not working. Same issue as described [here](https://github.com/mgechev/angular-seed/issues/1790) 
- Not unit tested. In order to support unit test, respective karma config needs to be updated.
- Not tested with yarn.

Feel free to suggest and contribute for any such package which is in day to day use for enterprise application development. 
