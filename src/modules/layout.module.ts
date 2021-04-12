import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomBreakPointsProvider } from '@components/layout/custom-breakpoints';
import { VerticalLayoutModule } from '@modules/vertical-layout.module';
import { HorizontalLayoutModule } from '@modules/horizontal-layout.module';

@NgModule({
  imports: [
    FlexLayoutModule.withConfig({ disableDefaultBps: true }),
    VerticalLayoutModule,
    HorizontalLayoutModule,
  ],
  providers: [CustomBreakPointsProvider],
  exports: [VerticalLayoutModule, HorizontalLayoutModule],
})
export class LayoutModule {}
