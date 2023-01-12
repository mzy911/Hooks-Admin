import { Layout } from "antd";
import AvatarIcon from "./components/AvatarIcon";
import CollapseIcon from "./components/CollapseIcon";
import BreadcrumbNav from "./components/BreadcrumbNav";
import AssemblySize from "./components/AssemblySize";
import Language from "./components/Language";
import Theme from "./components/Theme";
import Fullscreen from "./components/Fullscreen";
import "./index.less";

const LayoutHeader = () => {
	const { Header } = Layout;

	return (
		<Header>
			<div className="header-lf">
				{/* 切换展开、收缩的图标  */}
				<CollapseIcon />

				{/* 面包屑 */}
				<BreadcrumbNav />
			</div>
			<div className="header-ri">
				{/* 动态调整button大小 */}
				<AssemblySize />

				{/* 国际化 */}
				<Language />

				{/* 主题配置/ */}
				<Theme />

				{/* 全屏 */}
				<Fullscreen />
				<span className="username">Hooks</span>

				{/* 个人信息 */}
				<AvatarIcon />
			</div>
		</Header>
	);
};

export default LayoutHeader;
