import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import CircularProgress from '../CircularProgress/circularProgress';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'contained' | 'text' | 'outlined';
	isLoading?: boolean;
}

export default function Button({ children, variant, isLoading, ...props }: ButtonProps) {
	const variantStyle = {
		outlined: 'border-2 text-primary hover:bg-primary hover:text-white',
		text: 'text-primary',
		contained: 'bg-primary text-white',
	};

	return (
		<>
			<button
				{...props}
				className={twMerge(
					`border-primary flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 tracking-wider outline-none transition-colors duration-500 hover:brightness-95 ${variantStyle[variant || 'contained']} ${isLoading && 'cursor-not-allowed opacity-50'} `,
					props.className
				)}
			>
				{children}
				{isLoading && <CircularProgress />}
			</button>
		</>
	);
}
