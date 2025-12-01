import { AuthPage } from 'pages/authPage';
import { GamePage } from 'pages/gamePage';
import { GameRules } from 'pages/gameRules';
import { LoginPage } from 'pages/loginPage';
import { createBrowserRouter } from 'react-router';
import { routesAsConst } from 'shared/config/routes';
import { Layout } from 'shared/ui/layout';

const { authRoutes, gameRoutes, rulesRoutes } = routesAsConst;

export const router = createBrowserRouter([
  {
    path: authRoutes.withSlash.register,
    Component: AuthPage,
  },
  {
    path: authRoutes.withSlash.login,
    Component: LoginPage,
  },
  {
    path: '/',
    Component: Layout,
    children: [
      { path: gameRoutes.game, Component: GamePage },
      { path: rulesRoutes.rules, Component: GameRules },
    ],
  },
]);
