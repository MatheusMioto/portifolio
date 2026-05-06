import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  nome: string;
  descricao: string;
  iconUrl: string;
  iconAlt: string;
}

@Component({
  selector: 'app-conhecimentos',
  imports: [CommonModule],
  templateUrl: './conhecimentos.component.html',
  styleUrl: './conhecimentos.component.css',
})
export class ConhecimentosComponent {
  skills: Skill[] = [
    {
      nome: 'Java',
      descricao:
        'Linguagem de programação orientada a objetos, robusta e amplamente utilizada no desenvolvimento corporativo e back-end.',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      iconAlt: 'Java logo',
    },
    {
      nome: 'Angular',
      descricao:
        'Framework front-end para a construção de aplicações web dinâmicas e escaláveis em formato de Single Page Application.',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      iconAlt: 'Angular logo',
    },
    {
      nome: 'Spring Boot',
      descricao:
        'Framework baseado em Java que simplifica a criação de aplicações web e microsserviços de forma ágil e segura.',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      iconAlt: 'Spring Boot logo',
    },
    {
      nome: 'REST APIs',
      descricao:
        'Desenvolvimento e integração de APIs seguindo a arquitetura REST para comunicação eficiente entre sistemas.',
      iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTRiOGE2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iMTYgMTggMjIgMTIgMTYgNiI+PC9wb2x5bGluZT48cG9seWxpbmUgcG9pbnRzPSI4IDYgMiAxMiA4IDE4Ij48L3BvbHlsaW5lPjwvc3ZnPg==',
      iconAlt: 'REST API logo',
    },
    {
      nome: 'MySQL',
      descricao:
        'Sistema de gerenciamento de banco de dados relacional (RDBMS), amplamente utilizado por sua rapidez e confiabilidade.',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      iconAlt: 'MySQL logo',
    },
    {
      nome: 'PostgreSQL',
      descricao:
        'Poderoso sistema de banco de dados relacional open source, conhecido por sua robustez, extensibilidade e conformidade.',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      iconAlt: 'PostgreSQL logo',
    },
  ];
}
