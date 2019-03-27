import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './services/theme.service';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme: Observable<boolean>;
  status: boolean;
  overlay: HTMLElement;

  constructor(
    private route: Router,
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer,
  ) {
    this.overlay = overlayContainer.getContainerElement();
    this.overlay.classList.add('custom-theme');
   }

  OnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
    if (this.overlay.classList.contains('dark-theme')) {
      this.overlay.classList.remove('dark-theme');
      this.overlay.classList.add('custom-theme');
    } else if (this.overlay.classList.contains('custom-theme')) {
      this.overlay.classList.remove('custom-theme');
      this.overlay.classList.add('dark-theme');
  } else {
      this.overlay.classList.add('custom-theme');
  }
  }

  home() {
    this.route.navigateByUrl('home');
  }

  profile() {
    this.route.navigateByUrl('profile');
  }
}
