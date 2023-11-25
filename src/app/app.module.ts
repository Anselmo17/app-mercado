import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalComponent } from './pages/produtos/modal/modal.component';
import { components } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
