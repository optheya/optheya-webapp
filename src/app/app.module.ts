import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { ForgotpassComponent } from './components/pages/forgotpass/forgotpass.component';
import { EmailsenhaComponent } from './components/pages/emailsenha/emailsenha.component';
import { RedefinirsenhaComponent } from './components/pages/redefinirsenha/redefinirsenha.component';
import { TermosusoComponent } from './components/pages/termosuso/termosuso.component';
import { PoliticasprivacidadeComponent } from './components/pages/politicasprivacidade/politicasprivacidade.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ForgotpassComponent,
    EmailsenhaComponent,
    RedefinirsenhaComponent,
    TermosusoComponent,
    PoliticasprivacidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
