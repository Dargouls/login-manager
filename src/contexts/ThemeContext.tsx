import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

type Theme = 'light' | 'dark' | 'custom' | 'theme1' | 'theme2';
interface IThemeContext {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({ theme: 'light', setTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: any) => {
	const [theme, setTheme] = useLocalStorage<Theme>('@app-theme', 'light');

	const changeTheme = (theme: string) => {
		document.querySelector('html')?.setAttribute('data-theme', theme);
	};
	useEffect(() => {
		changeTheme(theme);
	}, [theme]);
	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
