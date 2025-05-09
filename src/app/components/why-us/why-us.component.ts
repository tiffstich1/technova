import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reason {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="why-us section">
      <div class="container">
        <h2 class="section-title text-center">Pourquoi nous choisir ?</h2>
        <p class="section-subtitle text-center">
          Chez TechNova, nous ne nous contentons pas de livrer des solutions numériques :
          nous construisons des partenariats durables, sur mesure et qualité
        </p>
        
        <div class="reasons-grid">
          @for (reason of reasons; track reason.title) {
            <div class="reason-card">
              <div class="reason-icon">
                <i [class]="reason.icon"></i>
              </div>
              <h3>{{ reason.title }}</h3>
              <p>{{ reason.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-us {
      background-color: var(--gray-100);
      position: relative;
    }
    
    .section-title {
      margin-bottom: var(--space-2);
    }
    
    .section-subtitle {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: var(--space-5);
      color: var(--gray-600);
    }
    
    .reasons-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: var(--space-4);
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .reason-card {
      background-color: white;
      padding: var(--space-4);
      border-radius: var(--radius-md);
      text-align: center;
      box-shadow: var(--shadow-md);
      transition: transform var(--transition-normal) ease;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }
    
    .reason-card:hover {
      transform: translateY(-5px);
    }
    
    .reason-icon {
      width: 70px;
      height: 70px;
      background-color: var(--primary-color);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-3);
      font-size: 1.5rem;
    }
    
    .reason-card h3 {
      font-size: var(--font-size-lg);
      margin-bottom: var(--space-2);
      color: var(--secondary-dark);
    }
    
    .reason-card p {
      color: var(--gray-600);
      font-size: var(--font-size-sm);
    }
    
    @media (min-width: 768px) {
      .reasons-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 1024px) {
      .reasons-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `]
})
export class WhyUsComponent {
  reasons: Reason[] = [
    {
      title: 'Solution sur mesure',
      description: 'Chaque projet est unique et mérite une solution adaptée à vos besoins.',
      icon: 'fas fa-drafting-compass'
    },
    {
      title: 'Un client un service',
      description: 'Nous assignons une équipe dédiée pour chaque projet, assurant un suivi optimal.',
      icon: 'fas fa-user-friends'
    },
    {
      title: 'L\'humain au cœur',
      description: 'Nous plaçons vos préoccupations au centre de notre démarche.',
      icon: 'fas fa-heart'
    },
    {
      title: 'Transparence réel',
      description: 'Accès facile aux états des projets et documentation en temps réel.',
      icon: 'fas fa-eye'
    },
    {
      title: 'Suivi renforcé',
      description: 'Notre méthode garantit un développement rigoureux et fiable.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Agile complète',
      description: 'Flexibilité, adaptation et évolution selon vos besoins changeants.',
      icon: 'fas fa-sync'
    }
  ];
}