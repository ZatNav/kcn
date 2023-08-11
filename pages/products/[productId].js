import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import styles from "../../styles/home.module.css";
import Hero from "@/components/Hero";
import Whyus from "@/components/Whyus";
import Cta from "@/components/reuseable/Cta";
import TopSection from "@/components/TopSection";
import ProductDetailsTab from "@/components/ProductDetailsTab";

export default function ProductDetails() {
	const router = useRouter();
	const productId = router.query.productId;
	const productText =
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique cumque tempora rerum eius quos illo maiores, unde laudantium optio vitae animi, voluptatem, ratione officiis fugit dicta nulla cupiditate magni consequatur reiciendis! Aspernatur facere consequuntur voluptatum eaque odit corporis tenetur, libero aliquam fuga quod, magni quo eos quasi modisequi, impedit recusandae neque.";
	const tabData = [
		{
			key: "details",
			title: "Details",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		},
		{
			key: "technical",
			title: "Technical Specs",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		},
		{
			key: "documents",
			title: "Documents",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		},
		// Add more tab data as needed
	];
	return (
		<div>
			<Head>
				<title>KCN WEBSITE</title>
				<meta name="description" content="KCN Telecommunications Group" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<TopSection heading={productId} text={productText} />
				<ProductDetailsTab tabData={tabData} />
				<Cta />
			</main>
		</div>
	);
}
