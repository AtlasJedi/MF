import { NgModule } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    TestComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
