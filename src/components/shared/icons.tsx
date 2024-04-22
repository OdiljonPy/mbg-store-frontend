import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const Icons = {
	repeat: (props: IconProps) => (
		<svg
			width='20'
			height='19'
			viewBox='0 0 20 19'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M17.125 9.49992C17.1252 11.3731 16.3877 13.171 15.0721 14.5045C13.7565 15.838 11.9688 16.5998 10.0958 16.6249H10C8.18034 16.6295 6.42881 15.9331 5.10899 14.6804C5.05232 14.6268 5.00676 14.5625 4.97491 14.4913C4.94306 14.4201 4.92555 14.3433 4.92338 14.2653C4.92121 14.1874 4.93442 14.1097 4.96226 14.0368C4.99009 13.964 5.03201 13.8973 5.08562 13.8406C5.13922 13.7839 5.20347 13.7384 5.27468 13.7065C5.34589 13.6747 5.42268 13.6572 5.50067 13.655C5.57865 13.6528 5.65629 13.666 5.72917 13.6939C5.80204 13.7217 5.86872 13.7636 5.9254 13.8172C6.77431 14.6178 7.84031 15.1505 8.99021 15.3488C10.1401 15.5471 11.323 15.4021 12.391 14.9321C13.459 14.462 14.3648 13.6877 14.9953 12.7058C15.6258 11.7239 15.953 10.578 15.936 9.41126C15.919 8.24451 15.5586 7.10863 14.8998 6.1455C14.241 5.18238 13.3131 4.43473 12.2318 3.99593C11.1506 3.55714 9.96406 3.44667 8.82041 3.67831C7.67676 3.90996 6.62672 4.47345 5.80146 5.2984C5.79539 5.30496 5.78895 5.31115 5.78216 5.31695L4.99989 6.03317L6.26161 7.29488C6.34589 7.37759 6.4036 7.48354 6.42736 7.59921C6.45112 7.71487 6.43985 7.83499 6.395 7.94422C6.35014 8.05345 6.27374 8.14683 6.17555 8.21241C6.07736 8.278 5.96184 8.31282 5.84376 8.31242H2.28126C2.12379 8.31242 1.97277 8.24987 1.86142 8.13852C1.75007 8.02717 1.68751 7.87615 1.68751 7.71867V4.15617C1.68683 4.03842 1.72117 3.92312 1.78618 3.82494C1.85119 3.72675 1.94393 3.65012 2.0526 3.60477C2.16127 3.55942 2.28098 3.54741 2.39649 3.57027C2.51201 3.59312 2.61812 3.64981 2.70134 3.73313L4.15974 5.19524L4.97169 4.45305C5.96918 3.45944 7.23868 2.78362 8.61993 2.51091C10.0012 2.23821 11.4323 2.38083 12.7325 2.92079C14.0328 3.46075 15.144 4.37383 15.9257 5.54477C16.7075 6.7157 17.1248 8.092 17.125 9.49992Z'
				fill='#39B969'
			/>
		</svg>
	),
	closeModal: (props: IconProps) => (
		<svg
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M15 2.8125C17.4105 2.8125 19.7668 3.52728 21.771 4.86646C23.7752 6.20564 25.3373 8.10907 26.2598 10.336C27.1822 12.563 27.4236 15.0135 26.9533 17.3777C26.4831 19.7418 25.3223 21.9134 23.6179 23.6179C21.9134 25.3223 19.7418 26.4831 17.3777 26.9533C15.0135 27.4236 12.563 27.1822 10.336 26.2598C8.10907 25.3373 6.20564 23.7752 4.86646 21.771C3.52728 19.7668 2.81249 17.4105 2.81249 15C2.81591 11.7687 4.10104 8.67076 6.3859 6.3859C8.67076 4.10104 11.7687 2.81591 15 2.8125ZM10.5867 18.0867C10.4996 18.1738 10.4305 18.2772 10.3834 18.391C10.3362 18.5048 10.312 18.6268 10.312 18.75C10.312 18.8732 10.3362 18.9952 10.3834 19.109C10.4305 19.2228 10.4996 19.3262 10.5867 19.4133C10.6738 19.5004 10.7772 19.5695 10.891 19.6166C11.0048 19.6638 11.1268 19.688 11.25 19.688C11.3732 19.688 11.4952 19.6638 11.609 19.6166C11.7228 19.5695 11.8262 19.5004 11.9133 19.4133L15 16.3254L18.0867 19.4133C18.1738 19.5004 18.2772 19.5695 18.391 19.6166C18.5048 19.6638 18.6268 19.688 18.75 19.688C18.8732 19.688 18.9952 19.6638 19.109 19.6166C19.2228 19.5695 19.3262 19.5004 19.4133 19.4133C19.5004 19.3262 19.5695 19.2228 19.6166 19.109C19.6638 18.9952 19.688 18.8732 19.688 18.75C19.688 18.6268 19.6638 18.5048 19.6166 18.391C19.5695 18.2772 19.5004 18.1738 19.4133 18.0867L16.3254 15L19.4133 11.9133C19.5892 11.7374 19.688 11.4988 19.688 11.25C19.688 11.0012 19.5892 10.7626 19.4133 10.5867C19.2374 10.4108 18.9988 10.312 18.75 10.312C18.5012 10.312 18.2626 10.4108 18.0867 10.5867L15 13.6746L11.9133 10.5867C11.8262 10.4996 11.7228 10.4305 11.609 10.3834C11.4952 10.3362 11.3732 10.312 11.25 10.312C11.1268 10.312 11.0048 10.3362 10.891 10.3834C10.7772 10.4305 10.6738 10.4996 10.5867 10.5867C10.4996 10.6738 10.4305 10.7772 10.3834 10.891C10.3362 11.0048 10.312 11.1268 10.312 11.25C10.312 11.3732 10.3362 11.4952 10.3834 11.609C10.4305 11.7228 10.4996 11.8262 10.5867 11.9133L13.6746 15L10.5867 18.0867Z'
				fill='black'
				fillOpacity='0.2'
			/>
			<path
				d='M15 2.8125C17.4105 2.8125 19.7668 3.52728 21.771 4.86646C23.7752 6.20564 25.3373 8.10907 26.2598 10.336C27.1822 12.563 27.4236 15.0135 26.9533 17.3777C26.4831 19.7418 25.3223 21.9134 23.6179 23.6179C21.9134 25.3223 19.7418 26.4831 17.3777 26.9533C15.0135 27.4236 12.563 27.1822 10.336 26.2598C8.10907 25.3373 6.20564 23.7752 4.86646 21.771C3.52728 19.7668 2.81249 17.4105 2.81249 15C2.81591 11.7687 4.10104 8.67076 6.3859 6.3859C8.67076 4.10104 11.7687 2.81591 15 2.8125ZM10.5867 18.0867C10.4996 18.1738 10.4305 18.2772 10.3834 18.391C10.3362 18.5048 10.312 18.6268 10.312 18.75C10.312 18.8732 10.3362 18.9952 10.3834 19.109C10.4305 19.2228 10.4996 19.3262 10.5867 19.4133C10.6738 19.5004 10.7772 19.5695 10.891 19.6166C11.0048 19.6638 11.1268 19.688 11.25 19.688C11.3732 19.688 11.4952 19.6638 11.609 19.6166C11.7228 19.5695 11.8262 19.5004 11.9133 19.4133L15 16.3254L18.0867 19.4133C18.1738 19.5004 18.2772 19.5695 18.391 19.6166C18.5048 19.6638 18.6268 19.688 18.75 19.688C18.8732 19.688 18.9952 19.6638 19.109 19.6166C19.2228 19.5695 19.3262 19.5004 19.4133 19.4133C19.5004 19.3262 19.5695 19.2228 19.6166 19.109C19.6638 18.9952 19.688 18.8732 19.688 18.75C19.688 18.6268 19.6638 18.5048 19.6166 18.391C19.5695 18.2772 19.5004 18.1738 19.4133 18.0867L16.3254 15L19.4133 11.9133C19.5892 11.7374 19.688 11.4988 19.688 11.25C19.688 11.0012 19.5892 10.7626 19.4133 10.5867C19.2374 10.4108 18.9988 10.312 18.75 10.312C18.5012 10.312 18.2626 10.4108 18.0867 10.5867L15 13.6746L11.9133 10.5867C11.8262 10.4996 11.7228 10.4305 11.609 10.3834C11.4952 10.3362 11.3732 10.312 11.25 10.312C11.1268 10.312 11.0048 10.3362 10.891 10.3834C10.7772 10.4305 10.6738 10.4996 10.5867 10.5867C10.4996 10.6738 10.4305 10.7772 10.3834 10.891C10.3362 11.0048 10.312 11.1268 10.312 11.25C10.312 11.3732 10.3362 11.4952 10.3834 11.609C10.4305 11.7228 10.4996 11.8262 10.5867 11.9133L13.6746 15L10.5867 18.0867Z'
				fill='#999999'
			/>
			<path
				d='M10.3839 18.3911C10.431 18.2773 10.5001 18.1739 10.5872 18.0868L13.6751 15L10.5872 11.9133C10.5001 11.8262 10.431 11.7228 10.3839 11.609C10.3368 11.4952 10.3125 11.3732 10.3125 11.25C10.3125 11.1269 10.3368 11.0049 10.3839 10.8911C10.431 10.7773 10.5001 10.6739 10.5872 10.5868C10.6743 10.4996 10.7778 10.4306 10.8916 10.3834C11.0054 10.3363 11.1273 10.312 11.2505 10.312C11.3737 10.312 11.4957 10.3363 11.6095 10.3834C11.7233 10.4306 11.8267 10.4996 11.9138 10.5868L15.0005 13.6746L18.0872 10.5868C18.2632 10.4108 18.5017 10.312 18.7505 10.312C18.9993 10.312 19.2379 10.4108 19.4138 10.5868C19.5897 10.7627 19.6885 11.0013 19.6885 11.25C19.6885 11.4988 19.5897 11.7374 19.4138 11.9133L16.3259 15L19.4138 18.0868C19.5009 18.1739 19.57 18.2773 19.6171 18.3911C19.6643 18.5049 19.6885 18.6269 19.6885 18.75C19.6885 18.8732 19.6643 18.9952 19.6171 19.109C19.57 19.2228 19.5009 19.3262 19.4138 19.4133C19.3267 19.5004 19.2233 19.5695 19.1095 19.6167C18.9957 19.6638 18.8737 19.6881 18.7505 19.6881C18.6273 19.6881 18.5054 19.6638 18.3916 19.6167C18.2778 19.5695 18.1743 19.5004 18.0872 19.4133L15.0005 16.3254L11.9138 19.4133C11.8267 19.5004 11.7233 19.5695 11.6095 19.6167C11.4957 19.6638 11.3737 19.6881 11.2505 19.6881C11.1273 19.6881 11.0054 19.6638 10.8916 19.6167C10.7778 19.5695 10.6743 19.5004 10.5872 19.4133C10.5001 19.3262 10.431 19.2228 10.3839 19.109C10.3368 18.9952 10.3125 18.8732 10.3125 18.75C10.3125 18.6269 10.3368 18.5049 10.3839 18.3911Z'
				fill='white'
			/>
		</svg>
	),
	eye: (props: IconProps) => (
		<svg
			width='24'
			height='25'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M30.4574 15.7975C30.4149 15.7025 29.3924 13.4362 27.1037 11.1475C24.9837 9.0275 21.3374 6.5 15.9999 6.5C10.6624 6.5 7.01619 9.0275 4.89619 11.1475C2.60744 13.4362 1.58494 15.7025 1.54244 15.7975C1.51461 15.8616 1.50024 15.9307 1.50024 16.0006C1.50024 16.0705 1.51461 16.1396 1.54244 16.2038C1.58494 16.3 2.60744 18.565 4.89619 20.8538C7.02119 22.9788 10.6637 25.5 15.9999 25.5C21.3362 25.5 24.9837 22.9738 27.1037 20.8538C29.3924 18.565 30.4149 16.3 30.4574 16.2038C30.4853 16.1396 30.4996 16.0705 30.4996 16.0006C30.4996 15.9307 30.4853 15.8616 30.4574 15.7975ZM26.3699 20.1725C23.4862 23.0475 19.9949 24.5 15.9949 24.5C11.9949 24.5 8.50869 23.0438 5.61994 20.1725C4.3908 18.9467 3.3571 17.5395 2.55494 16C3.35859 14.4602 4.394 13.0529 5.62494 11.8275C8.51369 8.95625 11.9999 7.5 15.9999 7.5C19.9999 7.5 23.4862 8.95625 26.3749 11.8275C27.6057 13.0531 28.6411 14.4603 29.4449 16C28.6413 17.5398 27.6059 18.947 26.3749 20.1725H26.3699ZM15.9999 10.5C14.9121 10.5 13.8488 10.8226 12.9443 11.4269C12.0398 12.0313 11.3349 12.8902 10.9186 13.8952C10.5023 14.9002 10.3934 16.0061 10.6056 17.073C10.8178 18.1399 11.3417 19.1199 12.1109 19.8891C12.88 20.6583 13.86 21.1821 14.9269 21.3943C15.9938 21.6065 17.0997 21.4976 18.1047 21.0813C19.1097 20.6651 19.9687 19.9601 20.573 19.0556C21.1774 18.1512 21.4999 17.0878 21.4999 16C21.4983 14.5418 20.9183 13.1438 19.8872 12.1127C18.8561 11.0816 17.4581 10.5017 15.9999 10.5ZM15.9999 20.5C15.1099 20.5 14.2399 20.2361 13.4999 19.7416C12.7599 19.2471 12.1831 18.5443 11.8425 17.7221C11.5019 16.8998 11.4128 15.995 11.5864 15.1221C11.76 14.2492 12.1886 13.4474 12.818 12.818C13.4473 12.1887 14.2491 11.7601 15.122 11.5865C15.9949 11.4128 16.8997 11.5019 17.722 11.8425C18.5443 12.1831 19.2471 12.7599 19.7416 13.4999C20.236 14.24 20.4999 15.11 20.4999 16C20.4999 17.1935 20.0258 18.3381 19.1819 19.182C18.338 20.0259 17.1934 20.5 15.9999 20.5Z'
				fill='#343330'
			/>
		</svg>
	),
	eyeOff: (props: IconProps) => (
		<svg
			width='24'
			height='25'
			viewBox='0 0 24 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M21.375 16.9063C21.2893 16.9551 21.1948 16.9866 21.097 16.9989C20.9991 17.0112 20.8998 17.0041 20.8047 16.978C20.7097 16.9518 20.6207 16.9072 20.5428 16.8467C20.465 16.7861 20.3999 16.7108 20.3512 16.625L18.57 13.5125C17.5344 14.2127 16.392 14.7402 15.1875 15.0744L15.7378 18.3763C15.754 18.4735 15.7509 18.5729 15.7287 18.6689C15.7065 18.7649 15.6656 18.8556 15.6083 18.9358C15.551 19.016 15.4784 19.0841 15.3948 19.1363C15.3112 19.1884 15.2181 19.2236 15.1209 19.2397C15.0809 19.2462 15.0405 19.2497 15 19.25C14.8225 19.2498 14.6509 19.1866 14.5157 19.0718C14.3804 18.9569 14.2903 18.7979 14.2612 18.6228L13.7203 15.381C12.5795 15.5397 11.4223 15.5397 10.2815 15.381L9.74058 18.6228C9.71147 18.7982 9.62103 18.9575 9.48538 19.0724C9.34974 19.1872 9.1777 19.2502 8.99995 19.25C8.9585 19.2498 8.91712 19.2464 8.8762 19.2397C8.77898 19.2236 8.6859 19.1884 8.60227 19.1363C8.51864 19.0841 8.44611 19.016 8.38882 18.9358C8.33153 18.8556 8.29061 18.7649 8.26839 18.6689C8.24617 18.5729 8.24309 18.4735 8.25933 18.3763L8.81245 15.0744C7.60835 14.7391 6.46664 14.2107 5.43183 13.5097L3.6562 16.625C3.55675 16.7983 3.39252 16.925 3.19965 16.9772C3.00678 17.0294 2.80107 17.0029 2.62776 16.9035C2.45446 16.804 2.32777 16.6398 2.27555 16.4469C2.22333 16.254 2.24987 16.0483 2.34933 15.875L4.22433 12.5938C3.56573 12.0248 2.96013 11.3972 2.41495 10.7188C2.34696 10.6429 2.29516 10.5539 2.2627 10.4573C2.23024 10.3607 2.2178 10.2585 2.22616 10.1569C2.23451 10.0554 2.26347 9.95657 2.31127 9.86657C2.35908 9.77657 2.42472 9.69726 2.5042 9.63347C2.58367 9.56969 2.67531 9.52277 2.77353 9.49558C2.87174 9.46839 2.97446 9.4615 3.07542 9.47533C3.17639 9.48916 3.27347 9.52342 3.36075 9.57602C3.44804 9.62862 3.52368 9.69846 3.58308 9.78127C5.13933 11.7069 7.86183 14 12 14C16.1381 14 18.8606 11.7041 20.4168 9.78127C20.4755 9.69676 20.551 9.62525 20.6386 9.57117C20.7261 9.51708 20.8238 9.4816 20.9257 9.46691C21.0275 9.45222 21.1313 9.45865 21.2306 9.48579C21.3298 9.51293 21.4224 9.56021 21.5026 9.62468C21.5828 9.68915 21.6489 9.76943 21.6968 9.86054C21.7446 9.95164 21.7732 10.0516 21.7807 10.1542C21.7883 10.2569 21.7746 10.3599 21.7406 10.4571C21.7066 10.5542 21.653 10.6433 21.5831 10.7188C21.0379 11.3972 20.4323 12.0248 19.7737 12.5938L21.6487 15.875C21.699 15.9606 21.7319 16.0552 21.7454 16.1535C21.7588 16.2519 21.7527 16.3519 21.7272 16.4478C21.7017 16.5437 21.6575 16.6337 21.597 16.7123C21.5366 16.791 21.4611 16.857 21.375 16.9063Z'
				fill='#C2C2C2'
			/>
		</svg>
	),
};
