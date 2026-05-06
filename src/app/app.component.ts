import { Component } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { ConhecimentosComponent } from './componentes/conhecimentos/conhecimentos.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    HeroComponent,
    SobreComponent,
    ProjetosComponent,
    ConhecimentosComponent,
    ContatoComponent,
    RodapeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portifolio';
}
