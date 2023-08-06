import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { SidebarProvider } from './context/sidebarContext.js';
import { MealProvider } from './context/mealContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<SidebarProvider>
			<MealProvider>
				<App />
			</MealProvider>
		</SidebarProvider>
	</React.StrictMode>
);
