import { Link, Outlet } from 'react-router';
import { authRoutes, gameRoutes, rulesRoutes } from 'shared/config/routes/routes.config';

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-6 flex justify-between items-center">
        <div className="flex h-14 items-center gap-3">
          <Link to={rulesRoutes.withSlash.rules}>Правила игры</Link>
          <Link to={gameRoutes.withSlash.game}>Играть</Link>
        </div>
        <div>
          <Link to={authRoutes.withSlash.register}>Вход/Регистрация</Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
