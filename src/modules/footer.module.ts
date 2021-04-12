import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';

import { FooterComponent } from '@components/common/footer/footer.component';
import { ScrollTopComponent } from '@components/common/footer/scroll-to-top/scroll-top.component';

@NgModule({
  declarations: [FooterComponent, ScrollTopComponent],
  imports: [RouterModule, CoreCommonModule],
  exports: [FooterComponent]
})
export class FooterModule {}
