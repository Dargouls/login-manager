import { HTMLAttributes } from 'react';
import InputMask from 'react-input-mask';
import { twMerge } from 'tailwind-merge';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
	register?: any;
	placeholder?: string;
	type: string;
	mask?: string;
	id?: string;
	className?: string;
}

export default function TextField({
	placeholder,
	mask,
	type,
	register,
	id,
	className,
	...props
}: TextFieldProps) {
	const inputElement = (
		<input
			className={twMerge(
				`bg-placeholder ring-offset-background w-full rounded-lg px-3 py-3 text-black outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
				className
			)}
			type={type}
			id={id}
			placeholder={placeholder}
			{...register}
			{...props}
		/>
	);

	return mask ? (
		<InputMask mask={mask} maskChar={null} {...register}>
			{() => inputElement}
		</InputMask>
	) : (
		inputElement
	);
}
