import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreSidebarModule } from '@core/components';
import { CoreCommonModule } from '@core/common.module';

import { NavbarModule } from '@modules/navbar.module';
import { ContentModule } from '@modules/content.module';
import { MenuModule } from '@modules/menu.module';
import { FooterModule } from '@modules/footer.module';

import { HorizontalLayoutComponent } from '@components/layout/horizontal/horizontal-layout.component';

@NgModule({
  declarations: [HorizontalLayoutComponent],
  imports: [
    RouterModule,
    CoreCommonModule,
    CoreSidebarModule,
    NavbarModule,
    ContentModule,
    MenuModule,
    FooterModule,
  ],
  exports: [HorizontalLayoutComponent],
})
export class HorizontalLayoutModule {}
