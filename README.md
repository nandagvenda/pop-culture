<div align="center">

  <img width="280" height="180" alt="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ptbpdCX4zekoRWGFFvqhgZ6bjaQRdLJoYw&s"/>
  <h1 align="center"><strong>POP CULTURE</strong></h1>
  <p align="center">
    O objetivo do projeto é apresentar a evolução da cultura pop ao longo das décadas, explorando acontecimentos marcantes, tendências, entretenimento, música, cinema, tecnologia e curiosidades dos anos 1950 até os anos 2020.
  </p>

</div>

<br />

## Tecnologias

Este projeto utiliza as seguintes tecnologias: <br><br>
[![My Skills](https://skillicons.dev/icons?i=html,css,javascript,bootstrap,cypress,git,github,azure&theme=dark)](https://skillicons.dev) 

<br>

## Descrição do Projeto


O site foi desenvolvido com o tema **Cultura Pop (Pop Culture)**, apresentando uma linha do tempo interativa com páginas dedicadas aos períodos mais marcantes da cultura popular.<br>
Além do desenvolvimento frontend, o projeto aplica conceitos de versionamento, integração contínua (CI) e entrega contínua (CD), utilizando GitHub Actions, testes automatizados com Cypress e análise de qualidade de código com Sonar.

O usuário pode navegar pelas diferentes décadas e conhecer informações relevantes sobre:

* Música
* Tecnologia
* Personalidades marcantes

Além disso, o projeto conta com um quiz interativo para testar com qual época você se parece mais.

<br> 

## Arquivos 

- **index.html** - Página inicial do projeto
- **1950s.html até 2020s.html** - Páginas dedicadas a cada década (1950s, 1960s, 1970s, 1980s, 1990s, 2000s, 2010s, 2020s)
- **quiz.html** - Página interativa do quiz sobre pop culture
- **quiz.js** - Lógica do quiz (perguntas, respostas e pontuação)
- **script.js** - Scripts gerais do projeto
- **cypress.config.js** - Configurações dos testes automatizados
- **package.json** - Gerencia as dependências e scripts do projeto

<br>

## Recursos 

* **Navegação por Décadas**:  
  Explore a cultura pop de cada era com informações detalhadas sobre 1950s até 2020s.

* **Conteúdo Temático**:  
  Cada década possui uma página dedicada com artistas, filmes, músicas e eventos marcantes do período.

* **Quiz Interativo**:  
  Teste seu conhecimento sobre pop culture com perguntas envolventes e pontuação em tempo real.

* **Design Responsivo**:  
  Interface amigável e adaptável para diferentes dispositivos e tamanhos de tela.

* **Testes Automatizados**:  
  Suite de testes com Cypress para garantir qualidade e funcionalidade.

* **Navegação Intuitiva**:  
  Menu e estrutura clara para fácil acesso às diferentes seções do site.

<br>

## DevOps & CI/CD

O projeto utiliza **GitHub Actions** para automação de CI/CD e **Azure** para hospedagem da infraestrutura.

### **Pipeline de Integração Contínua (CI)**

**Arquivo**: `.github/workflows/ci.yaml`

Executa na branch `dev`:
1. **Checkout** do código
2. **Análise SonarQube** - Verifica qualidade, segurança e bugs
3. **Relatório** - Envia resultados para SonarQube no Azure

```yaml
name: ci
on:
  push:
    branches: [dev]

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: SonarSource/sonarqube-scan-action@v6
```
<br>

## **Pipeline de Entrega Contínua (CD)**

**Arquivo**: `.github/workflows/deployment.yaml`

Executa quando há PR para `main`:

1. **Docker Build & Push** → Constrói imagem e envia para Docker Hub
2. **Azure Deploy** → Deploy da imagem para Azure WebApps
3. **Testes E2E** → Executa testes Cypress após deploy bem-sucedido

```yaml
name: continuous-deployment
on:
  pull_request:
    branches:
      - main
```
<br>

## **SonarQube Hospedado no Azure**

Infraestrutura configurada no Azure:

```
Azure Portal
  ├─ App Service: pop-culture (SonarQube)
  ├─ Database: PostgreSQL (popculture-postgres)
  └─ URL: https://pop-culture.azurewebsites.net
```

**Configuração do SonarQube:**
- **Host**: `https://pop-culture.azurewebsites.net`
- **Database**: PostgreSQL Azure (`popculture-postgres.postgres.database.azure.com`)
- **Autenticação**: Token SONAR_TOKEN (GitHub Secrets)
- **Container**: Docker (nginx + SonarQube)

<br>

## Integrantes

- Gabriele Larena
- João Wagner Bonfim
- Julia Borges
- Maria Fernanda Venda

<br>

## Disciplina

**Programação Frontend e DevOps**

Projeto acadêmico desenvolvido com foco em desenvolvimento web moderno, automação de testes, integração contínua e entrega contínua utilizando práticas DevOps.
<br>
**Professor:** Fernando Domeneghetti
