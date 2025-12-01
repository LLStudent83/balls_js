import { NavLink, Outlet } from 'react-router';
import { authRoutes, gameRoutes, rulesRoutes } from 'shared/config/routes/routes.config';
import clsx from 'clsx';

export function Layout() {
  const getClassesForLink = ({ isActive }: { isActive: boolean }) => {
    return clsx({ 'font-bold': isActive }, 'hover:underline');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-6 flex justify-between items-center">
        <div className="flex h-14 items-center gap-3">
          <NavLink className={getClassesForLink} to={rulesRoutes.withSlash.rules}>
            Правила игры
          </NavLink>
          <NavLink className={getClassesForLink} to={gameRoutes.withSlash.game}>
            Играть
          </NavLink>
        </div>
        <div>
          <NavLink className={getClassesForLink} to={authRoutes.withSlash.register}>
            Вход/Регистрация
          </NavLink>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
