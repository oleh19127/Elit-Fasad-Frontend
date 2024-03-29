import { Component } from '@angular/core';
import { IntroComponent } from '../../blocks/intro/intro.component';
import { AboutComponent } from '../../blocks/about/about.component';
import { ServicesComponent } from '../../blocks/services/services.component';
import { OurNewsComponent } from '../../blocks/our-news/our-news.component';
import { VideoComponent } from '../../blocks/video/video.component';
import { ContactUsComponent } from '../../blocks/contact-us/contact-us.component';
import { StandardsComponent } from '../../blocks/standards/standards.component';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
