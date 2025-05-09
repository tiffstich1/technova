import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-company">
            <h3>TechNova</h3>
            <div class="social-icons">
              <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
              <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
              <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div class="footer-links">
            <div class="footer-column">
              <h4>Nos Services</h4>
              <ul>
                <li><a href="#">Développement mobile</a></li>
                <li><a href="#">Développement web</a></li>
                <li><a href="#">Data Science & IA</a></li>
                <li><a href="#">Cloud & DevOps</a></li>
              </ul>
            </div>
            
            <div class="footer-column">
              <h4>Nos coordonnées</h4>
              <ul>
                <li><i class="fas fa-map-marker-alt"></i> TechNova SA Pléiades 8</li>
                <li><i class="fas fa-phone"></i> +33 70 10 01 02</li>
                <!-- <li><i class="fas fa-envelope"></i> contact@technova.fr</li> -->
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 TechNova. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--secondary-dark);
      color: white;
      padding-top: var(--space-6);
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-5);
    }
    
    .footer-company h3 {
      color: var(--primary-color);
      font-size: var(--font-size-xl);
      margin-bottom: var(--space-3);
    }
    
    .social-icons {
      display: flex;
      gap: var(--space-3);
      margin-top: var(--space-3);
    }
    
    .social-icons a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: white;
      transition: background-color var(--transition-fast) ease;
    }
    
    .social-icons a:hover {
      background-color: var(--primary-color);
      color: white;
    }
    
    .footer-links {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }
    
    .footer-column h4 {
      color: var(--gray-200);
      font-size: var(--font-size-md);
      margin-bottom: var(--space-3);
    }
    
    .footer-column ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-column li {
      margin-bottom: var(--space-2);
    }
    
    .footer-column a {
      color: var(--gray-400);
      transition: color var(--transition-fast) ease;
    }
    
    .footer-column a:hover {
      color: var(--primary-color);
    }
    
    .footer-column i {
      margin-right: var(--space-1);
      color: var(--primary-color);
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: var(--space-5);
      padding: var(--space-3) 0;
      text-align: center;
      color: var(--gray-400);
    }
    
    @media (min-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
      }
      
      .footer-links {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 1024px) {
      .footer-content {
        grid-template-columns: 1fr 2fr;
      }
    }
  `]
})
export class FooterComponent {}