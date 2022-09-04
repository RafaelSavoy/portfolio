import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ClientContext, GraphQLClient } from 'graphql-hooks';

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": '4c8d9f68dd9e89f92bf4e807371d18',
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
