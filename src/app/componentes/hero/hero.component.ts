import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  textoOriginal = 'Desenvolvedor FullStack.';
  textoDigitado = '';

  ngOnInit() {
    this.digitar();
  }

  digitar() {
    let index = 0;
    // Pequeno atraso inicial antes de começar a digitar
    setTimeout(() => {
      const intervalo = setInterval(() => {
        if (index < this.textoOriginal.length) {
          this.textoDigitado += this.textoOriginal.charAt(index);
          index++;
        } else {
          clearInterval(intervalo);
        }
      }, 100);
    }, 500);
  }
}
