import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text animate-slideUp">
            <h1>Votre partenaire numérique</h1>
            <p>Des technologies digitales intelligentes. Réalisations selon vos besoins, pour une expérience utilisateur optimale.</p>
          </div>
          
          <div class="hero-shapes">
            <div class="shape circle"></div>
            <div class="shape square"></div>
            <div class="shape triangle"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding-top: 120px;
      padding-bottom: var(--space-6);
      position: relative;
      overflow: hidden;
      background-color: white;
    }
    
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 10;
    }
    
    .hero-text {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .hero-text h1 {
      font-size: var(--font-size-5xl);
      margin-bottom: var(--space-3);
      color: var(--secondary-dark);
    }
    
    .hero-text p {
      font-size: var(--font-size-lg);
      color: var(--gray-600);
      margin-bottom: var(--space-5);
    }
    
    .hero-shapes {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
    
    .shape {
      position: absolute;
      opacity: 0.2;
    }
    
    .circle {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: var(--primary-color);
      top: 5%;
      left: 5%;
      animation: float 6s ease-in-out infinite;
    }
    
    .square {
      width: 100px;
      height: 100px;
      background-color: var(--accent-color);
      bottom: 10%;
      right: 5%;
      transform: rotate(15deg);
      animation: float 5s ease-in-out infinite 1s;
    }
    
    .triangle {
      width: 0;
      height: 0;
      border-left: 60px solid transparent;
      border-right: 60px solid transparent;
      border-bottom: 100px solid var(--primary-light);
      top: 10%;
      right: 15%;
      animation: float 7s ease-in-out infinite 2s;
    }
    
    @keyframes float {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(5deg);
      }
      100% {
        transform: translateY(0px) rotate(0deg);
      }
    }
    
    @media (max-width: 768px) {
      .hero {
        padding-top: 100px;
      }
      
      .hero-text h1 {
        font-size: var(--font-size-3xl);
      }
      
      .hero-text p {
        font-size: var(--font-size-md);
      }
      
      .circle {
        width: 100px;
        height: 100px;
      }
      
      .square {
        width: 70px;
        height: 70px;
      }
      
      .triangle {
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 70px solid var(--primary-light);
      }
    }
  `]
})
export class HeroComponent {}