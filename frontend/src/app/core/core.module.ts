import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule, ToastrService } from "ngx-toastr";

import { AlertComponent, AlertService } from "./components/index";
import { AuthGuard } from "./guards/index";
import { JwtInterceptorProvider, ErrorInterceptorProvider } from "./helpers/index";
import { LayoutModule } from "./layout/layout.module";
import { UserService } from "./services";
import { NumberOnlyDirective } from "./directives/number-only.directive";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    LayoutModule
  ],
  declarations: [AlertComponent, NumberOnlyDirective],
  exports: [AlertComponent, ToastrModule, LayoutModule, NumberOnlyDirective]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [AuthGuard, UserService, AlertService, JwtInterceptorProvider, ErrorInterceptorProvider, ToastrService]
    };
  }
}
