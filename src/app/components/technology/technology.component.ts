import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  logo: string;
  color: string;
}

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="technology section">
      <div class="container">
        <h2 class="section-title text-center">Les technologies que nous maîtrisons</h2>
        <p class="section-subtitle text-center">Les stacks, frameworks et solutions que nous intégrons dans nos projets chaque jour</p>
        
        <div class="tech-grid">
          @for (tech of technologies; track tech.name) {
            <div class="tech-card" [style.border-color]="tech.color">
              <div class="tech-logo" [style.color]="tech.color">
                <i [class]="tech.logo"></i>
              </div>
              <div class="tech-name">{{ tech.name }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .technology {
      background-color: white;
    }
    
    .section-title {
      margin-bottom: var(--space-2);
    }
    
    .section-subtitle {
      text-align: center;
      color: var(--gray-600);
      margin-bottom: var(--space-5);
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-4);
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .tech-card {
      display: flex;
      align-items: center;
      padding: var(--space-3);
      border-radius: var(--radius-lg);
      background-color: var(--gray-50);
      box-shadow: var(--shadow-md);
      transition: transform var(--transition-normal) ease;
      border-left: 4px solid;
    }
    
    .tech-card:hover {
      transform: translateY(-5px);
    }
    
    .tech-logo {
      font-size: 2rem;
      margin-right: var(--space-3);
    }
    
    .tech-name {
      font-weight: 500;
      color: var(--secondary-dark);
    }
    
    @media (min-width: 768px) {
      .tech-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (min-width: 1024px) {
      .tech-grid {
        grid-template-columns: repeat(5, 1fr);
      }
    }
  `]
})
export class TechnologyComponent {
  technologies: Technology[] = [
    {
      name: 'Angular',
      logo: 'fab fa-angular',
      color: '#DD0031'
    },
    {
      name: 'React',
      logo: 'fab fa-react',
      color: '#61DAFB'
    },
    {
      name: 'Laravel',
      logo: 'fab fa-laravel',
      color: '#FF2D20'
    },
    {
      name: 'Python/Django',
      logo: 'fab fa-python',
      color: '#306998'
    },
    {
      name: 'Spring Boot',
      logo: 'fas fa-leaf',
      color: '#6DB33F'
    }
  ];
}