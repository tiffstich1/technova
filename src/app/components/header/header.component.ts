import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="isScrolled" [class.menu-open]="isMenuOpen">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <h1>TechNova</h1>
          </div>
          
          <nav class="desktop-nav">
            <ul>
              <li><a href="#" class="active">Accueil</a></li>
              <li><a href="#services">Nos Services</a></li>
              <li><a href="#realisations">Nos Réalisations</a></li>
            </ul>
          </nav>
          
          <button class="contact-btn btn btn-primary">Contacter</button>
          
          <button class="mobile-menu-btn" (click)="toggleMenu()">
            <span [class.open]="isMenuOpen"></span>
          </button>
        </div>
      </div>
      
      <div class="mobile-nav" [class.open]="isMenuOpen">
        <ul>
          <li><a href="#" (click)="closeMenu()">Accueil</a></li>
          <li><a href="#services" (click)="closeMenu()">Nos Services</a></li>
          <li><a href="#realisations" (click)="closeMenu()">Nos Réalisations</a></li>
          <li><button class="btn btn-primary" (click)="closeMenu()">Contacter</button></li>
        </ul>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: var(--space-3) 0;
      transition: all var(--transition-normal) ease;
      background-color: transparent;
    }
    
    header.scrolled {
      background-color: white;
      box-shadow: var(--shadow-md);
      padding: var(--space-2) 0;
    }
    
    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo h1 {
      font-size: var(--font-size-xl);
      font-weight: 700;
      margin: 0;
      color: var(--primary-color);
    }
    
    .desktop-nav ul {
      display: flex;
      list-style: none;
      gap: var(--space-4);
      margin: 0;
      padding: 0;
    }
    
    .desktop-nav a {
      color: var(--secondary-color);
      font-weight: 500;
      padding: var(--space-1) 0;
      position: relative;
    }
    
    .desktop-nav a:hover, .desktop-nav a.active {
      color: var(--primary-color);
    }
    
    .desktop-nav a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width var(--transition-fast) ease;
    }
    
    .desktop-nav a:hover::after, .desktop-nav a.active::after {
      width: 100%;
    }
    
    .contact-btn {
      padding: var(--space-1) var(--space-3);
    }
    
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      width: 30px;
      height: 30px;
      position: relative;
    }
    
    .mobile-menu-btn span, .mobile-menu-btn span::before, .mobile-menu-btn span::after {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: var(--secondary-color);
      transition: all var(--transition-fast) ease;
    }
    
    .mobile-menu-btn span {
      top: 50%;
      transform: translateY(-50%);
    }
    
    .mobile-menu-btn span::before, .mobile-menu-btn span::after {
      content: '';
      left: 0;
    }
    
    .mobile-menu-btn span::before {
      top: -8px;
    }
    
    .mobile-menu-btn span::after {
      bottom: -8px;
    }
    
    .mobile-menu-btn span.open {
      background-color: transparent;
    }
    
    .mobile-menu-btn span.open::before {
      top: 0;
      transform: rotate(45deg);
    }
    
    .mobile-menu-btn span.open::after {
      bottom: 0;
      transform: rotate(-45deg);
    }
    
    .mobile-nav {
      display: none;
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      height: 0;
      background-color: white;
      overflow: hidden;
      transition: height var(--transition-normal) ease;
      box-shadow: var(--shadow-md);
    }
    
    .mobile-nav.open {
      height: calc(100vh - 60px);
    }
    
    .mobile-nav ul {
      list-style: none;
      padding: var(--space-4);
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }
    
    .mobile-nav a {
      color: var(--secondary-color);
      font-size: var(--font-size-lg);
      font-weight: 500;
      display: block;
    }
    
    .mobile-nav button {
      width: 100%;
      margin-top: var(--space-3);
    }
    
    @media (max-width: 768px) {
      .desktop-nav, .contact-btn {
        display: none;
      }
      
      .mobile-menu-btn {
        display: block;
      }
      
      .mobile-nav {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;
  
  constructor() {
    window.addEventListener('scroll', this.checkScroll.bind(this));
  }
  
  checkScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }
  
  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}