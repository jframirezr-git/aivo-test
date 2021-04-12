import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';

import { CoreCommonModule } from '@core/common.module';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';

import { NavbarComponent } from '@components/common/navbar/navbar.component';
import { NavbarBookmarkComponent } from '@components/common/navbar/navbar-bookmark/navbar-bookmark.component';
import { NavbarSearchComponent } from '@components/common/navbar/navbar-search/navbar-search.component';

import { NavbarNotificationComponent } from '@components/common/navbar/navbar-notification/navbar-notification.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarSearchComponent,
    NavbarBookmarkComponent,
    NavbarNotificationComponent,
  ],
  imports: [
    RouterModule,
    NgbModule,
    CoreCommonModule,
    PerfectScrollbarModule,
    CoreTouchspinModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
