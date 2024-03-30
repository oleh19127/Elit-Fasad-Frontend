import { Component } from '@angular/core';
import { IntroComponent } from '../../blocks/intro/intro.component';
import { AboutComponent } from '../../blocks/about/about.component';
import { ServicesComponent } from '../../blocks/services/services.component';
import { OurNewsComponent } from '../../blocks/our-news/our-news.component';
import { VideoComponent } from '../../blocks/video/video.component';
import { ContactUsComponent } from '../../blocks/contact-us/contact-us.component';
import { StandardsComponent } from '../../blocks/standards/standards.component';
import { HotTopComponent } from '../../blocks/hot-top/hot-top.component';
import { HowToFindUsComponent } from '../../blocks/how-to-find-us/how-to-find-us.component';
import { FooterComponent } from '../../blocks/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroComponent,
    AboutComponent,
    ServicesComponent,
    OurNewsComponent,
    VideoComponent,
    ContactUsComponent,
    StandardsComponent,
    HotTopComponent,
    HowToFindUsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
