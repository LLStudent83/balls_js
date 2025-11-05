import { Button } from "@shadcn/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@shadcn/components/ui/navigation-menu";
import { Link, Outlet } from "react-router";

export function Layout() {
	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
				<div className="container flex h-14 items-center">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Навигация</NavigationMenuTrigger>
								<NavigationMenuContent>
									<NavigationMenuItem>
										<Link to="/dashboard">
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Дашборд
											</NavigationMenuLink>
										</Link>
									</NavigationMenuItem>
									{/* Добавьте другие пункты */}
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<div className="ml-auto flex items-center space-x-4">
						<Button variant="ghost">Профиль</Button>
					</div>
				</div>
			</header>

			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	);
}
