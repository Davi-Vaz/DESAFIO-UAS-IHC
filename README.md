# Avaliação Final – Interação Humano-Computador (IHC)

## Identificação do Estudante

- **Nome:** Davi Vaz Moraes
- **Matrícula:** 22407051
- **Curso:** Ciência da Computação
- **Instituição:** Centro Universitário de Brasília (CEUB)
- **Data de entrega:** 23 de junho de 2026

---

## Descrição Geral

Este repositório reúne as atividades desenvolvidas durante a disciplina de Interação Humano-Computador (IHC), contemplando os desafios das Unidades de Aprendizagem UA1, UA2, UA3 e UA4. Cada desafio aborda conceitos e práticas relevantes em IHC, com o objetivo de demonstrar a aplicação de conhecimentos em cenários práticos e contextos reais.

---

## UA1 – Introdução à IHC e seus benefícios

### Objetivo

Analisar e propor melhorias em uma interface existente, demonstrando compreensão dos benefícios da Interação Humano-Computador na melhoria da usabilidade e experiência do usuário.

### Solução Desenvolvida

Elaboração de um protótipo com melhorias na interface de uma aplicação de gerenciamento de folha de pagamento, focando na reprogramação de uma janela de confirmação de exclusão de usuários. O documento aborda:

- Substituição de botões genéricos por rótulos de ação claros ("Confirmar" e "Cancelar")
- Feedback visual e hierarquia com uso de cores para destacar a criticidade da ação
- Personalização e contexto ao exibir o nome e ID reais do usuário
- Adição de controles de navegação intuitivos
- Melhoria da legibilidade e da experiência geral da interface

### Como Executar e Visualizar a Solução

#### 1. Ferramentas Necessárias

Para visualizar a solução, recomendamos o uso de um editor de código (como Visual Studio Code), navegador moderno ou leitor de PDF.

#### 2. Passo a Passo

1. **Localize os arquivos:** Na pasta `UNIDADE_1`, você encontrará os arquivos do desafio
2. **Visualize o HTML:** Abra o arquivo `Desafio_UA1.html` no seu navegador (Chrome, Edge ou Firefox)
3. **Leia o Relatório:** O arquivo `Desafio_da_UA_1_Davi.pdf` contém a análise teórica e justificativas das melhorias

### Arquivos Entregues

- `Desafio_da_UA_1_Davi.pdf` – Documento com a análise e justificativas das melhorias propostas
- `Desafio_UA1.html` – Protótipo em HTML da interface revisada

---

## UA2 – Interface, interação e Affordance

### Objetivo

Propor uma interface acessível e definir os equipamentos necessários para um sistema que atende usuários com deficiência visual, aplicando conceitos de affordance e design inclusivo.

### Solução Desenvolvida

Desenvolvimento de uma proposta detalhada para uma interface inclusiva de um gerenciador de cursos internos, acessível para funcionários com deficiência visual. O documento explora:

- **Tipo de Interface:** Interface gráfica acessível otimizada para leitores de tela, com navegação por teclado
- **Equipamentos Assistivos:** Software leitor de tela (como NVDA), teclado e fone de ouvido
- **Princípios de Affordance:** Design pensado para navegação através de Tab, Enter e setas de direção
- **Estratégias de Inclusão:** Garantir que pessoas cegas possam trabalhar normalmente sem depender do mouse ou da visão

### Como Visualizar a Solução

#### 1. Ferramentas Necessárias

Você precisará de um leitor de PDF (como Adobe Acrobat Reader) ou navegador moderno.

#### 2. Passo a Passo

1. **Localize a pasta:** Abra a pasta `UNIDADE_2` no seu computador
2. **Abra o documento:** Clique duplo no arquivo `Desafio_da_UA_2_Davi.pdf`
3. **Estude a proposta:** O documento está organizado para responder às questões sobre interface e equipamentos necessários

### Arquivos Entregues

- `Desafio_da_UA_2_Davi.pdf` – Proposta completa com recomendações de acessibilidade

---

## UA3 – Storyboarding e prototipação de interfaces

### Objetivo

Aplicar técnicas de storyboard e prototipação para desenvolver uma solução assistiva, envolvendo compreensão do usuário, exploração criativa e validação de ideias.

### Solução Desenvolvida

Desenvolvimento do processo de design para uma solução que auxilia Ricardo, um usuário com deficiência visual progressiva, a se locomover em ambientes desconhecidos. O documento aborda as fases de:

- **Compreensão do Problema:** Avaliação das necessidades específicas de Ricardo através de conversas diretas, criação de persona e mapeamento das dificuldades
- **Definição da Solução:** Criação de um aplicativo com navegação por voz para guiar Ricardo em ambientes desconhecidos
- **Prototipagem Evolutiva:** Desenvolvimento de protótipos simples que foram evoluídos progressivamente
- **Testes com o Usuário:** Validação do fluxo de interação diretamente com o usuário

### Ferramentas Utilizadas

- Técnicas de Storyboarding
- Persona Design
- Prototipagem Evolutiva
- Validação com Usuário

### Como Visualizar a Solução

#### 1. Ferramentas Necessárias

Você precisará de um leitor de PDF.

#### 2. Passo a Passo

1. **Acesse a pasta:** Abra a pasta `UNIDADE_3` no seu computador
2. **Abra o Relatório:** Clique duplo no arquivo `Desafio_da_UA_3_Davi.pdf`
3. **Analise o Design:** No PDF, você encontrará a persona (Ricardo), o storyboard e as etapas de prototipação

### Arquivos Entregues

- `Desafio_da_UA_3_Davi.pdf` – Relatório do processo de design, incluindo persona e estratégia de prototipação

---

## UA4 – TypeScript

### Objetivo

Desenvolver uma aplicação prática utilizando TypeScript, demonstrando conhecimento de tipos, classes e funcionalidades de programação orientada a objetos para simular um carrinho de compras.

### Funcionalidades Implementadas

- **Classe Produto:** Representa um produto com atributos `nome`, `descricao`, `preco`, `marca` e `categoria`
- **Classe Venda:** Recebe um array de produtos e possui o método `totalVenda()` que calcula o valor total da compra
- **Simulação de Venda:** Demonstração prática com produtos reais e cálculo automático do total
- **Validação de Tipos:** Utilização do sistema de tipagem do TypeScript para segurança de tipos

### Tecnologias Utilizadas

- **TypeScript** – Linguagem principal com tipagem estática
- **Node.js** – Ambiente de execução
- **Sistema de Tipos TypeScript** – Para segurança e confiabilidade do código

### Como Executar o Projeto

#### Pré-requisitos

- Node.js (versão 14 ou superior) instalado
- npm ou yarn
- TypeScript instalado globalmente (`npm install -g typescript`)

#### Instalação

```bash
npm install
```

#### Compilação

Para compilar o arquivo TypeScript:

```bash
tsc desafio.ts
```

Isso gera um arquivo `desafio.js` correspondente.

#### Execução

Para executar o projeto:

```bash
node desafio.js
```

**Resultado Esperado:**

```
Resumo do Carrinho
Notebook Ultrabook - R$ 3200.00
Mouse Gamer RGB - R$ 180.00
Total: R$ 3380.00
```

**Dica:** Você também pode usar `ts-node` para rodar diretamente sem compilar:

```bash
npm install -g ts-node
ts-node desafio.ts
```

### Exemplos de Uso

O arquivo `desafio.ts` demonstra:

```typescript
// Criação de produtos
const produto1 = new Produto("Notebook Ultrabook", "Notebook de alta performance", 3200.00, "Dell", "Eletrônicos");
const produto2 = new Produto("Mouse Gamer RGB", "Mouse com iluminação RGB", 180.00, "Logitech", "Periféricos");

// Criação da venda
const venda = new Venda([produto1, produto2]);

// Cálculo e exibição do total
console.log(`Total: R$ ${venda.totalVenda().toFixed(2)}`);
```

### Arquivos Entregues

- `Desafio_da_UA_4_Davi.pdf` – Documentação técnica com a descrição do desafio
- `desafio.ts` – Código-fonte TypeScript com implementação completa

---

## Estrutura do Repositório

```
DESAFIO-UAS-IHC/
├── UNIDADE_1/
│   ├── Desafio_da_UA_1_Davi.pdf
│   └── Desafio_UA1.html
├── UNIDADE_2/
│   └── Desafio_da_UA_2_Davi.pdf
├── UNIDADE_3/
│   └── Desafio_da_UA_3_Davi.pdf
├── UNIDADE_4/
│   ├── Desafio_da_UA_4_Davi.pdf
│   └── desafio.ts
└── README.md
```

---

## Considerações Finais

A realização dessas atividades proporcionou uma visão holística sobre a Interação Humano-Computador, desde os conceitos fundamentais (UA1) até a aplicação prática em projetos reais. Os principais aprendizados incluem:

- A importância do design centrado no usuário para criar interfaces eficazes
- A necessidade de acessibilidade e inclusão no desenvolvimento de software
- A aplicação prática de técnicas de storyboarding, prototipação e validação
- O uso de TypeScript para criar aplicações robustas e type-safe

Cada atividade contribuiu para o desenvolvimento de habilidades essenciais em design de interfaces e desenvolvimento de software, reforçando a importância de considerar a experiência do usuário em todas as etapas de um projeto.

---

## Declaração de Autoria

Declaro que este trabalho foi desenvolvido por mim, **Davi Vaz Moraes**, respeitando as normas acadêmicas e de integridade estabelecidas pela instituição Centro Universitário de Brasília (CEUB).

Todos os materiais apresentados neste repositório são resultado do meu trabalho individual e/ou colaborativo, conforme indicado em cada atividade.
