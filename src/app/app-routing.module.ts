import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { EmailsenhaComponent } from './components/pages/emailsenha/emailsenha.component';
import { ForgotpassComponent } from './components/pages/forgotpass/forgotpass.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PoliticasprivacidadeComponent } from './components/pages/politicasprivacidade/politicasprivacidade.component';
import { RedefinirsenhaComponent } from './components/pages/redefinirsenha/redefinirsenha.component';
import { TermosusoComponent } from './components/pages/termosuso/termosuso.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: 'emailsenha', component: EmailsenhaComponent },
  { path: 'redefinirsenha', component: RedefinirsenhaComponent },
  { path: 'termosuso', component: TermosusoComponent },
  { path: 'politicasprivacidade', component: PoliticasprivacidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
