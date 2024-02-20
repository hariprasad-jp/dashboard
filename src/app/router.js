import {Routes, Route} from 'react-router-dom';
import { DashboardPage } from './pages/Dashboard';
import { SignInPage } from './pages/SignIn';
import { ProductsPage } from './pages/Products';
import { OrdersPage } from './pages/Orders';
import { SettingsPage } from './pages/Settings';

export function Router(){
    return ( <Routes>
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage/>} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="login" element={<SignInPage />} />
    </Routes>
    );
}