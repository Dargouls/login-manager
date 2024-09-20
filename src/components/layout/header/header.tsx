import logo from '@/assets/brand/cognai.webp';
import Image from 'next/image';

export const Header = () => {
	return (
		<header>
			<a className='text-contrast font-poppins flex items-center gap-2 font-bold tracking-wider' href='/'>
				<Image height={40} src={logo} alt='logo' />
				Cognai
			</a>
			<nav></nav>
		</header>
	);
};
