import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services section">
      <div class="container">
        <h2 class="section-title text-center">Nos Services</h2>
        
        <div class="services-grid">
          @for (service of services; track service.title) {
            <div class="service-card" [style.background-color]="service.color">
              <div class="service-content">
                <i [class]="service.icon"></i>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background-color: var(--gray-100);
      position: relative;
      overflow: hidden;
    }
    
    .section-title {
      margin-bottom: var(--space-5);
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: var(--space-4);
    }
    
    .service-card {
      border-radius: var(--radius-lg);
      min-height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: var(--space-4);
      transition: transform var(--transition-normal) ease, box-shadow var(--transition-normal) ease;
      box-shadow: var(--shadow-md);
      transform: rotate(-2deg);
    }
    
    .service-card:hover {
      transform: rotate(0) scale(1.03);
      box-shadow: var(--shadow-lg);
    }
    
    .service-card:nth-child(even) {
      transform: rotate(2deg);
    }
    
    .service-card:nth-child(even):hover {
      transform: rotate(0) scale(1.03);
    }
    
    .service-content {
      color: white;
    }
    
    .service-content i {
      font-size: 2.5rem;
      margin-bottom: var(--space-3);
    }
    
    .service-content h3 {
      font-size: var(--font-size-xl);
      margin-bottom: var(--space-2);
      color: white;
    }
    
    .service-content p {
      font-size: var(--font-size-md);
    }
    
    @media (min-width: 768px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 1024px) {
      .services-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `]
})
export class ServicesComponent {
  services: ServiceCard[] = [
    {
      title: 'Développement mobile',
      description: 'Applications natives et hybrides pour iOS et Android, optimisées pour une performance maximale.',
      icon: 'fas fa-mobile-alt',
      color: '#F87171'
    },
    {
      title: 'Développement Web/Mobile',
      description: 'Sites web responsifs, applications web progressives et interfaces utilisateur modernes.',
      icon: 'fas fa-laptop-code',
      color: '#334155'
    },
    {
      title: 'Data Science & IA',
      description: 'Systèmes intelligents, analyse de données et solutions d\'intelligence artificielle sur mesure.',
      icon: 'fas fa-brain',
      color: '#38BDF8'
    }
  ];
}