import clsx from "clsx";
import { useTranslation } from "react-i18next";

const IndexPage = () => {
	const { t } = useTranslation();

	return (
		<div data-testid="IndexPage" className={clsx("Page flex flex-col")}>
			<h1 className="title-page">{t("Page Index")}</h1>
			<div>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ad reiciendis
				officiis, voluptatem expedita nam ipsam optio voluptas, dicta, aperiam ipsa unde
				praesentium? Quaerat dicta ad quae quos, facilis sapiente!
			</div>
		</div>
	);
};
export default IndexPage;
