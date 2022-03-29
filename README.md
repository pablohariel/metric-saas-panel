# Painel de Métricas SaaS

Página de painel de administração responsável por exibir as métricas dos serviços SaaS da agil.net.


## Rodar Localmente

Clone o projeto

```bash
  git clone https://github.com/pablohariel/metric-saas-panel
```

Vá para o diretório do projeto

```bash
  cd metric-saas-panel
```

Instale as dependências

```bash
  npm install
```

Inicie o projeto

```bash
  npm run dev
```


## Variáveis de Ambiente

Para rodar este projeto, você precisa adicionar a seguinte variável de ambiente no seu arquivo .env contendo o token de sessão da API

`VITE_API_TOKEN`

Caso queira trocar o endereço de conexão padrão da API, basta criar outra variável de ambiente contendo a URL desejada

`VITE_API_URL`
