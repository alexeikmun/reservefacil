import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import i18n (needs to be bundled ;))
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import reportWebVitals from './reportWebVitals';

import global_es from './Translations/es/global.json';
import global_en from './Translations/en/global.json';

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql
} from '@apollo/client';
const client = new ApolloClient({
	uri: 'https://flyby-gateway.herokuapp.com/',
	cache: new InMemoryCache()
});

i18next.init({
	interpolation: { escapeValue: false },
	lng: localStorage.getItem('lng') || 'en',
	resources: {
		es: {
			global: global_es
		},
		en: {
			global: global_en
		}
	}
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<I18nextProvider i18n={i18next}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</I18nextProvider>
		</React.StrictMode>
	</ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
