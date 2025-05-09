import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials section">
      <div class="container">
        <div class="testimonial-content text-center">
          <h2>Leurs entreprises ont enfin trouvé un foyer tout-en-un avec nous</h2>
          <p class="testimonial-text">
            More than 150,000 entrepreneurs – including creators, coaches, consultants, and many more – grow their business on Podia.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      background-color: white;
      padding: var(--space-5) 0;
    }
    
    .testimonial-content {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .testimonial-content h2 {
      font-size: var(--font-size-2xl);
      margin-bottom: var(--space-3);
      color: var(--secondary-dark);
    }
    
    .testimonial-text {
      font-size: var(--font-size-lg);
      color: var(--gray-600);
    }
    
    @media (max-width: 768px) {
      .testimonial-content h2 {
        font-size: var(--font-size-xl);
      }
      
      .testimonial-text {
        font-size: var(--font-size-md);
      }
    }
  `]
})
export class TestimonialsComponent {}