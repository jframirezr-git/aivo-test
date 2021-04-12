import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';

import { ContentComponent } from '@components/common/content/content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [RouterModule, CoreCommonModule],
  exports: [ContentComponent]
})
export class ContentModule {}
