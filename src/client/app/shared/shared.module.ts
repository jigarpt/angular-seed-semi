import { HttpService } from './http/http.service';
import { HttpErrorHandlerService } from './http/http-error-handler.service';
import { CsrfService } from './http/csrf.service';
import { TokenService } from './http/token.service';
import { TostrService } from './common/tostr.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NameListService } from './name-list/name-list.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [ToolbarComponent, NavbarComponent],
  exports: [
    ToolbarComponent
    , NavbarComponent
    , CommonModule
    , FormsModule
    , RouterModule
    , TranslateModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService
                  , TranslateService
                  , TostrService
                  , HttpService
                  , TokenService
                  , CsrfService
                  , HttpErrorHandlerService]
    };
  }
}
