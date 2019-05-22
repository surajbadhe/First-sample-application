import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  SampleApplicationSharedLibsModule,
  SampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [SampleApplicationSharedLibsModule, SampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: SampleApplicationSharedModule
    };
  }
}
