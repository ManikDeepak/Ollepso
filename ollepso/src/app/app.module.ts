import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 import { MatSidenavModule} from '@angular/material/sidenav';
 import { MatGridListModule} from '@angular/material/grid-list';
 import { MatMenuModule} from '@angular/material/menu';
 import { MatButtonModule} from '@angular/material/button';
 import { MatCardModule} from '@angular/material/card';
 import { MatIconModule} from '@angular/material/icon';
 import { MatExpansionModule} from '@angular/material/expansion';
 import { MatListModule} from '@angular/material/list';
 import { MatToolbarModule} from '@angular/material/toolbar';
 import { MatTableModule} from '@angular/material/table';
 import { MatBadgeModule} from '@angular/material/badge';
 import { MatSnackBarModule} from '@angular/material/snack-bar';
    
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { ProductHeaderComponent } from './product-header/product-header.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,

    ProductHeaderComponent,
     FiltersComponent,
     ProductBoxComponent,
     CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
