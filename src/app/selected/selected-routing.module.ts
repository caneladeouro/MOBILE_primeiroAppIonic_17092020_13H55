import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedPage } from './selected.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedPageRoutingModule {}
