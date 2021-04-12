import { NgModule } from '@angular/core';

import { CoreCommonModule } from '@core/common.module';

import { MenuComponent } from '@components/common/menu/menu.component';
import { VerticalMenuModule } from '@modules/vertical-menu.module';
import { HorizontalMenuModule } from '@modules/horizontal-menu.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CoreCommonModule, VerticalMenuModule, HorizontalMenuModule],
  exports: [MenuComponent]
})
export class MenuModule {}
