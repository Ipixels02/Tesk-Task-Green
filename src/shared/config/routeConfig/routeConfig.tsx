import { type RouteProps } from 'react-router-dom'
import { PageIndex } from '../../../pages/MainPage/index'
import { LoginPage } from '../../../pages/LoginPage/LoginPage';

export enum AppRoutes {
    MAIN = 'main',
    LOGIN = 'login',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.LOGIN]: '/',
    [AppRoutes.MAIN]: '/main'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <PageIndex/>
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage/>
    }
}
