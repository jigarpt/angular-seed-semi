import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TostrService {
  constructor(private toastr: ToastrService,
    private translate: TranslateService) { }

  success(message: string, title?: string) {
    this.translate.get(message).subscribe((res: any) =>
      this.toastr.success(res, title));
  }

  error(message: string, title?: string) {
    this.translate.get(message).subscribe((res: any) =>
      this.toastr.error(res, title));
  }

  info(message: string, title?: string) {
    this.translate.get(message).subscribe((res: any) =>
      this.toastr.info(res, title));
  }

  warning(message: string, title?: string) {
    this.translate.get(message).subscribe((res: any) =>
      this.toastr.success(res, title));
  }

}
