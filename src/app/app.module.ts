import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directive';

@NgModule({
  declarations: [
    MaskDirective,
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
