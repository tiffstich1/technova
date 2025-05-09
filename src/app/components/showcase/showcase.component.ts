import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="realisations" class="showcase section">
      <div class="container">
        <div class="showcase-content">
          <div class="showcase-image">
            <img src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg" alt="Project Showcase" />
            <div class="showcase-badge">
              <span>web / mobile / desktop</span>
            </div>
          </div>
          
          <div class="showcase-info">
            <div class="showcase-header">
              <h3>Customize without compromise</h3>
            </div>
            <p>
              Nous ne faisons pas de compromis - nous créons des solutions sur mesure selon vos partenariats et besoins.
            </p>
            <a href="#" class="btn btn-primary">Voir le projet</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .showcase {
      background-color: var(--gray-100);
    }
    
    .showcase-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
      align-items: center;
    }
    
    .showcase-image {
      position: relative;
      width: 100%;
      max-width: 600px;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }
    
    .showcase-image img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform var(--transition-normal) ease;
    }
    
    .showcase-image:hover img {
      transform: scale(1.05);
    }
    
    .showcase-badge {
      position: absolute;
      top: var(--space-3);
      right: var(--space-3);
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: var(--space-1) var(--space-2);
      border-radius: var(--radius-full);
      font-size: var(--font-size-xs);
    }
    
    .showcase-info {
      max-width: 500px;
      text-align: center;
    }
    
    .showcase-header {
      margin-bottom: var(--space-3);
    }
    
    .showcase-header h3 {
      font-size: var(--font-size-2xl);
      margin-bottom: var(--space-2);
    }
    
    .showcase-info p {
      margin-bottom: var(--space-4);
      color: var(--gray-600);
    }
    
    @media (min-width: 1024px) {
      .showcase-content {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      
      .showcase-image {
        flex: 1;
      }
      
      .showcase-info {
        flex: 1;
        text-align: left;
      }
    }
  `]
})
export class ShowcaseComponent {}