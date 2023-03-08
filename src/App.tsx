import React from "react";
import AssetCard from "./components/AssetCard";
import {
	binance,
	bitcoinSmall,
	bitcoinLarge,
	ethereumSmall,
	ethereumLarge,
	shibaInu,
	solanaLarge,
} from "./assets";

const App = () => {
	return (
		<>
			<div className="bg-primary h-screen flex flex-row justify-evenly items-center overflow-auto w-[100%] sm:flex-col lg:flex-row flex-wrap">
				<AssetCard
					assetIcon={bitcoinLarge}
					name="Bitcoin (BTC)"
					price="$32,912.80"
					pricePercentChange={+10}
					tvl="$60,000"
					pairings={[solanaLarge, ethereumLarge, binance]}
					gradient="bg-bitcoin"
				/>
				<AssetCard
					assetIcon={solanaLarge}
					name="Solana (SOL)"
					price="$32.83"
					pricePercentChange={-12.32}
					tvl="$60,000"
					pairings={[bitcoinLarge, solanaLarge, ethereumLarge]}
					gradient="bg-solana"
				/>
				<AssetCard
					assetIcon={ethereumLarge}
					name="Ehtereum (ETH)"
					price="$1466.45"
					pricePercentChange={-11.93}
					tvl="$60,000"
					pairings={[solanaLarge, bitcoinSmall, binance]}
					gradient="bg-ethereum"
				/>
				<AssetCard
					assetIcon={binance}
					name="Binance USD (BUSD)"
					price="$1.00"
					pricePercentChange={+0.26}
					tvl="$60,000"
					pairings={[solanaLarge, ethereumSmall, binance]}
					gradient="bg-binance"
				/>
				<AssetCard
					assetIcon={shibaInu}
					name="Shiba Inu(SHIB)"
					price="$0.001946"
					pricePercentChange={-8.1}
					tvl="$60,000"
					pairings={[solanaLarge, ethereumSmall, binance]}
					gradient="bg-shiba"
				/>
			</div>
		</>
	);
};

export default App;
