import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact section">
      <div class="wave-top"></div>
      <div class="container">
        <div class="contact-container">
          <h2 class="section-title text-center">Contactez-nous</h2>
          
          <form class="contact-form" (submit)="onSubmit($event)">
            <div class="form-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Nom*" 
                required 
                [(ngModel)]="formData.name"
              >
            </div>
            
            <div class="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email*" 
                required 
                [(ngModel)]="formData.email"
              >
            </div>
            
            <div class="form-group">
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Téléphone*" 
                [(ngModel)]="formData.phone"
              >
            </div>
            
            <div class="form-group full-width">
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Votre message..." 
                required 
                [(ngModel)]="formData.message"
              ></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background-color: var(--primary-color);
      position: relative;
      padding-top: var(--space-8);
      padding-bottom: var(--space-8);
    }
    
    .wave-top {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="%23f5f5f5" /></svg>');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transform: rotate(180deg);
    }
    
    .contact-container {
      background-color: white;
      border-radius: var(--radius-lg);
      padding: var(--space-5);
      box-shadow: var(--shadow-lg);
      max-width: 700px;
      margin: 0 auto;
    }
    
    .section-title {
      margin-bottom: var(--space-4);
      color: var(--secondary-dark);
    }
    
    .contact-form {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: var(--space-3);
    }
    
    .form-group {
      position: relative;
    }
    
    .form-group.full-width {
      grid-column: 1 / -1;
    }
    
    .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: var(--space-3);
      border: 1px solid var(--gray-300);
      border-radius: var(--radius-md);
      font-family: var(--font-family);
      font-size: var(--font-size-md);
      transition: border-color var(--transition-fast) ease, box-shadow var(--transition-fast) ease;
    }
    
    .contact-form input:focus,
    .contact-form textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(245, 167, 66, 0.2);
    }
    
    .contact-form textarea {
      resize: vertical;
    }
    
    .contact-form button {
      padding: var(--space-3) var(--space-4);
      font-size: var(--font-size-md);
      width: 100%;
      margin-top: var(--space-2);
    }
    
    @media (min-width: 768px) {
      .contact-form {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted:', this.formData);
    // In a real application, you would submit this to your backend
    alert('Merci pour votre message. Nous vous contacterons rapidement !');
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}