import { Layout } from "shared/ui/layout/Layout";
import { BallsWidget } from "widgets/Balls";

export function GamePage() {
  return <Layout>{<BallsWidget />}</Layout>;
}
