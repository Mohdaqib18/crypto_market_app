import React from "react";

type Props = {
	assetIcon: string;
	name: String;
	price: String;
	pricePercentChange: Number;
	tvl: String;
	pairings: Array<string>;
	gradient: String;
};

const AssetCard = ({
	assetIcon,
	name,
	price,
	pricePercentChange,
	tvl,
	pairings,
	gradient,
}: Props) => {
	return (
		<>
			<div className="w-[290px] h-[350px] bg-gradient border border-solid border-[#2E3149] backdrop-sepia-0 rounded-[20px] flex flex-col justify-between items-center font-[tomorrow] relative">
				<div className="w-[100px] h-[50px] absolute border  border-[#2E3149] rounded-br-[90px] border-t-0 top-[-1px] rounded-bl-[90px] bg-primary"></div>
				<div
					className={`w-[85px] h-[85px] absolute  rounded-[50%] ${gradient} top-[-45px] flex justify-center items-center`}
				>
					<img src={assetIcon} className="h-10 w-10" />
				</div>

				<div className="w-[290px] h-[280px] flex flex-col justify-between items-center mt-[60px] ">
					<p className="text-center  text-[#737BAE] text-[12px] ">{name}</p>

					<div className="w-[242px] h-[40px] radius-[17px] bg-[#14172B] rounded-[17px] text-center text-[16px]  text-[#ECF0FF] flex justify-center items-center">
						<p className="ml-[70px]">{price}</p>
						<span
							className={` ${
								pricePercentChange < 0 ? "text-red-500" : "text-green-500"
							}  text-[10px] ml-7 `}
						>
							<>{pricePercentChange}%</>
						</span>
					</div>

					<p className="text-center  text-[#5A5F7D] text-[12px] ">Price</p>

					<div className="w-[242px] h-[40px] radius-[17px] bg-[#14172B] rounded-[17px] text-center text-[16px]  text-[#ECF0FF] flex justify-center items-center">
						<p>{tvl}</p>
					</div>

					<p className="text-center  text-[#5A5F7D] text-[12px] ">TVL </p>

					<div className="w-[122px] h-[40px] radius-[17px] bg-[#14172B] rounded-[29.5px] text-center text-[16px]  text-[#ECF0FF] flex justify-between items-center px-3">
						{pairings.map((asset) => {
							return (
								<div>
									<img src={asset} className="w-[22px] h-[22px]" />
								</div>
							);
						})}
					</div>
					<p className="text-center text-[#5A5F7D] text-[12px] ">
						Popular Pairs
					</p>
				</div>
			</div>
		</>
	);
};

export default AssetCard;
