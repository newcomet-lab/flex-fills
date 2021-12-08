import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NumberWithSpacePipe } from './pipes/number-with-space/number-with-space.pipe';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    NumberWithSpacePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopNavComponent,
    SideNavComponent,
    NumberWithSpacePipe
  ]
})
export class SharedModule { }
