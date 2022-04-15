import Image from "next/image";

import yx from "../public/yx.jpg";
import chris from "../public/chris.jpg";
import yl from "../public/yl.jpg";
import jx from "../public/jx.png";

const Team = () => {
	return (
		<section className="text-gray-600 body-font">
			<div className="container pb-6 mx-auto">
				<div className="flex flex-wrap w-full mb-6">
					<div className="w-full mb-6 lg:w-1/2 lg:mb-0">
						<h1 className="mb-2 text-xl font-medium text-gray-900 sm:text-xl title-font">
							Team ContractMe!
						</h1>
						<div className="w-20 h-1 bg-indigo-500 rounded"></div>
					</div>
				</div>
				<div className="flex flex-wrap -m-4">
					<div className="p-2 xl:w-1/4 md:w-1/2">
						<div className="p-6 bg-indigo-100 rounded-lg">
							<Image
								className="object-cover object-center w-full h-40 mb-6 rounded"
								src={yl}
								alt="yl"
								placeholder="blur"
							/>
							<h3 className="text-sm font-medium tracking-widest text-indigo-500 title-font">
								Liu Yongliang
							</h3>
						</div>
					</div>
					<div className="p-2 xl:w-1/4 md:w-1/2">
						<div className="p-6 bg-indigo-100 rounded-lg">
							<Image
								className="object-cover object-center w-full h-40 mb-6 rounded"
								src={yx}
								alt="yx"
								placeholder="blur"
							/>
							<h3 className="text-sm font-medium tracking-widest text-indigo-500 title-font">
								Lou Yun Xin
							</h3>
						</div>
					</div>
					<div className="p-2 xl:w-1/4 md:w-1/2">
						<div className="p-6 bg-indigo-100 rounded-lg">
							<Image
								height={485}
								className="object-cover object-center w-full h-40 mb-6 rounded"
								src={chris}
								alt="chris"
								placeholder="blur"
							/>
							<h3 className="text-sm font-medium tracking-widest text-indigo-500 title-font">
								Ng Ting You (Chris)
							</h3>
						</div>
					</div>
					<div className="p-2 xl:w-1/4 md:w-1/2">
						<div className="p-6 bg-indigo-100 rounded-lg">
							<Image
								className="object-cover object-center w-full h-40 mb-6 rounded"
								src={jx}
								alt="jx"
								placeholder="blur"
							/>
							<h3 className="text-sm font-medium tracking-widest text-indigo-500 title-font">
								Ong Jun Xiong
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
