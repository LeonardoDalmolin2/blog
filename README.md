# Blog IA

## Descrição

Projeto de blog 100% gerado por IA, desenvolvido com **Nuxt.js (frontend)**, **Node.js + Express + MongoDB (backend)** e integração com a **Google Gemini API** para geração automática de temas e posts diários sobre tecnologia.

## Funcionalidades

- Página inicial com posts recentes
- Página de todos os posts com carregamento progressivo
- Página individual para cada post
- Geração de temas automatizada pela Gemini API
- Geração diária de posts com base nos temas salvos

## Tecnologias utilizadas

- Nuxt 3
- Node.js
- Express
- MongoDB + Mongoose
- Google Gemini API
- Tailwind CSS

## Como rodar localmente

### Pré-requisitos

- Node.js v18+
- MongoDB Atlas ou local
- Conta na Google Cloud com a API Gemini ativada

### Clone o projeto


git clone https://github.com/LeonardoDalmolin2/blog.git
cd blog-ia

Backend
cd blog-ia-backend
npm install
# Configure as variáveis de ambiente (Mongo URI e Gemini API Key)
npm run dev

Frontend
Em outro terminal:
cd blog-ia-frontend
npm install
npm run dev