import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgSelectModule } from '@ng-select/ng-select'

import { CoreCommonModule } from '@core/common.module'
import { ContentHeaderModule } from '@modules/content-header.module'

import { AuthenticationModule } from '@modules/authentication.module'
import { MiscellaneousModule } from '@modules/miscellaneous.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    AuthenticationModule,
    MiscellaneousModule
  ],

  providers: []
})
export class PagesModule {}
