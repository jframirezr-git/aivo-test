import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule } from '@core/components';

import { NavbarModule } from '@modules/navbar.module';
import { ContentModule } from '@modules/content.module';
import { MenuModule } from '@modules/menu.module';
import { FooterModule } from '@modules/footer.module';

import { VerticalLayoutComponent } from '@components/layout/vertical/vertical-layout.component';

@NgModule({
  declarations: [VerticalLayoutComponent],
  imports: [RouterModule, CoreCommonModule, CoreSidebarModule, NavbarModule, MenuModule, ContentModule, FooterModule],
  exports: [VerticalLayoutComponent]
})
export class VerticalLayoutModule {}
