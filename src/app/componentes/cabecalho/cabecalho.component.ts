import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  imports: [CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {
  menuOpen = signal(false);
  isScrolled = signal(false);
  lightMode = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  toggleTheme() {
    this.lightMode.update((v) => !v);
    document.body.classList.toggle('light-mode', this.lightMode());
  }
}
