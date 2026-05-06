import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  telefoneCopiado = false;
  emailCopiado = false;

  copiarNumero(numero: string, event: Event) {
    event.preventDefault();
    navigator.clipboard.writeText(numero).then(() => {
      this.telefoneCopiado = true;
      setTimeout(() => {
        this.telefoneCopiado = false;
      }, 2000);
    });
  }

  copiarEmail(email: string, event: Event) {
    event.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      this.emailCopiado = true;
      setTimeout(() => {
        this.emailCopiado = false;
      }, 2000);
    });
  }
}
