interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({ children, ...props }: LabelProps) {
	return (
		<>
			<label {...props} className='font-semibold'>
				{children}
			</label>
		</>
	);
}
