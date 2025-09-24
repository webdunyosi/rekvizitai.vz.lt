import { JoinDirectory } from "../Auth/JoinDirectory";
import { ExchangeCurrency } from "../Currency/ExchangeCurrency";
import { MenuBar } from "../Navigation/MenuBar";
import Raw from "../Navigation/Raw";
import Stock from "../Navigation/Stock";

export const Sidebar = () => {
  return (
    <div className="grid h-fit gap-4 p-4 pr-0">
      <JoinDirectory />
      <MenuBar />
      <ExchangeCurrency />
      <Stock />
      <Raw />
    </div>
  );
};
