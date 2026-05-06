import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Projeto {
  nome: string;
  imagem: string;
  descricao: string;
  stack: string;
  githubLink?: string;
  demoLink?: string;
  expandido?: boolean;
}

@Component({
  selector: 'app-projetos',
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css',
})
export class ProjetosComponent {
  projetos: Projeto[] = [
    {
      nome: 'Landing Page Responsiva',
      imagem: 'assets/images/projeto-partnership.png',
      descricao:
        'Desenvolvimento de uma landing page destinada a arquitetos, engenheiros, designers e consultores para que possam acumular pontos através de compras realizadas na loja de consultores.',
      stack: 'JS – TS – CSS',
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com',
      expandido: false
    },
    {
      nome: 'Brazilian Hands',
      imagem: 'assets/images/projeto-brazilianhands.png',
      descricao:
        'Plataforma cooperativa de serviços de qualidade que conecta prestadores de serviços especializados a clientes que buscam excelência e confiabilidade no mercado.',
      stack: 'TypeScript – PHP – Docker',
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com',
      expandido: false
    },
  ];

  toggleExpandir(projeto: Projeto, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    projeto.expandido = !projeto.expandido;
  }
}
