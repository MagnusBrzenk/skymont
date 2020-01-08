import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { materialModules } from './material-modules';

// Import font-awesome assets into bundle
import './font-awesome';

@NgModule({
  declarations: [],
  imports: [...[materialModules], CommonModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ...[materialModules]
  ],
  entryComponents: []
})
export class SharedModule { }
