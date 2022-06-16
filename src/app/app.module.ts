import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main-component/home/home.component';
import { NotfoundComponent } from './main-component/notfound/notfound.component';
import { HomeMainShowComponent } from './sub-component/home-main-show/home-main-show.component';
import { HomeTrendingComponent } from './sub-component/home-news/home-trending.component';
import { HomeCoronaViursComponent } from './sub-component/home-corona-viurs/home-corona-viurs.component';
import { HomeBusinessEnergyComponent } from './sub-component/home-business-energy/home-business-energy.component';
import { HomeOpinionComponent } from './sub-component/home-opinion/home-opinion.component';
import { NewsComponent } from './main-component/News/news.component';
import { BusinessComponent } from './main-component/Business/business.component';
import { EnergyComponent } from './main-component/Energy/energy.component';
import { OpinionComponent } from './main-component/Opinion/opinion.component';
import { OpinionMainShowComponent } from './sub-component/opinion-main-show/opinion-main-show.component';
import { RecentelyPublishedComponent } from './sub-component/recentely-published/recentely-published.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToggleButtonComponent } from './header/toggle-button/toggle-button.component';
import { NewsShowingComponent } from './sub-component/news-showing/news-showing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    BusinessComponent,
    EnergyComponent,
    OpinionComponent,
    NotfoundComponent,
    HomeMainShowComponent,
    HomeTrendingComponent,
    HomeCoronaViursComponent,
    HomeBusinessEnergyComponent,
    HomeOpinionComponent,
    OpinionMainShowComponent,
    RecentelyPublishedComponent,
    ToggleButtonComponent,
    NewsShowingComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
