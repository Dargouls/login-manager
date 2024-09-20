interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({ children, ...props }: ContainerProps) {
	return (
		<>
			<main className='mt-8 w-full p-4'>{children}</main>
		</>
	);
}
