import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

import { CoreCommonModule } from '@core/common.module'

import { ContentHeaderModule } from '@modules/content-header.module'

import { SeriesComponent } from './series.component'
import { MoviesComponent } from './movies.component'
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";

const routes = [
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  }
]

@NgModule({
  declarations: [SeriesComponent, MoviesComponent],
    imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule, NgbDatepickerModule],
  exports: [SeriesComponent, MoviesComponent]
})
export class SampleModule {}
