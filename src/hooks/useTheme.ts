import defaultTheme from "@/styles/theme/theme-default.less";
import darkTheme from "@/styles/theme/theme-dark.less";
import { ThemeConfigProp } from "@/redux/interface";

/**
 * @description 全局主题设置
 * */
const useTheme = (themeConfig: ThemeConfigProp) => {
	const { weakOrGray, isDark } = themeConfig;
	const initTheme = () => {
		// 灰色和弱色切换
		const body = document.documentElement as HTMLElement;

		// 添加滤镜
		if (!weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");

		// 移除自定义属性：data-type
		let head = document.getElementsByTagName("head")[0];
		const getStyle = head.getElementsByTagName("style");
		if (getStyle.length > 0) {
			for (let i = 0, l = getStyle.length; i < l; i++) {
				if (getStyle[i]?.getAttribute("data-type") === "dark") getStyle[i].remove();
			}
		}

		// 添加自定义属性：切换皮肤
		let styleDom = document.createElement("style");
		styleDom.dataset.type = "dark";
		styleDom.innerHTML = isDark ? darkTheme : defaultTheme;
		head.appendChild(styleDom);
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
