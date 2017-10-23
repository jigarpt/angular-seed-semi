import { TranslateModule } from '@ngx-translate/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, TranslateModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
