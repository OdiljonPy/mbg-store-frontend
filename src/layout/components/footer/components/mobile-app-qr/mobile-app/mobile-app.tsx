import Link from "next/link";
import css from "./mobile-app.module.css";

const MobileApp = () => {
	return (
		<div className={css.apps}>
			<Link href={"#"} className={css.card}>
				<div className={css.icon}>
					<svg
						width='33'
						height='39'
						viewBox='0 0 33 39'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M27.3613 20.707C27.3167 15.8725 31.4213 13.5205 31.609 13.411C29.2844 10.1065 25.6813 9.65499 24.4152 9.61899C21.389 9.30849 18.4537 11.3845 16.9121 11.3845C15.3398 11.3845 12.966 9.64899 10.4075 9.69999C7.11519 9.74949 4.03519 11.608 2.34596 14.494C-1.14019 20.3785 1.45981 29.026 4.79981 33.7825C6.47058 36.112 8.42288 38.713 10.9783 38.6215C13.4783 38.521 14.4121 37.0675 17.429 37.0675C20.4183 37.0675 21.2952 38.6215 23.9013 38.563C26.5844 38.521 28.2737 36.223 29.886 33.8725C31.8167 31.2025 32.5921 28.573 32.6229 28.438C32.5598 28.417 27.4121 26.5015 27.3613 20.707Z'
							fill='white'
						/>
						<path
							d='M22.4383 6.48999C23.7829 4.85049 24.7029 2.61999 24.4475 0.356491C22.5013 0.440491 20.0675 1.66899 18.666 3.27249C17.426 4.68549 16.3183 7.00149 16.6044 9.17949C18.7906 9.33849 21.0352 8.10399 22.4383 6.48999Z'
							fill='white'
						/>
					</svg>
				</div>
				<div>
					<p className={css.download}>Download on the</p>
					<p className={css.app}>App Store</p>
				</div>
			</Link>
			<Link href={"#"} className={css.card}>
				<div className={css.icon}>
					<svg
						width='37'
						height='39'
						viewBox='0 0 37 39'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1.5992 0.601215C1.14728 1.06246 0.885742 1.78059 0.885742 2.71059V35.8831C0.885742 36.8131 1.14728 37.5312 1.5992 37.9925L1.71074 38.0937L20.7761 19.5125V19.0737L1.71074 0.492468L1.5992 0.601215Z'
							fill='url(#paint0_linear_2869_6519)'
						/>
						<path
							d='M27.1244 25.7093L20.7764 19.5125V19.0737L27.1321 12.8768L27.2744 12.9575L34.8014 17.1331C36.9494 18.3181 36.9494 20.2681 34.8014 21.4606L27.2744 25.6287L27.1244 25.7093Z'
							fill='url(#paint1_linear_2869_6519)'
						/>
						<path
							d='M27.2746 25.6287L20.7765 19.2931L1.59961 37.9925C2.31307 38.7237 3.47653 38.8118 4.79961 38.0806L27.2746 25.6287Z'
							fill='url(#paint2_linear_2869_6519)'
						/>
						<path
							d='M27.2746 12.9575L4.79961 0.505605C3.47653 -0.218145 2.31307 -0.130022 1.59961 0.601227L20.7765 19.2931L27.2746 12.9575Z'
							fill='url(#paint3_linear_2869_6519)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_2869_6519'
								x1='19.0833'
								y1='36.2285'
								x2='-6.08219'
								y2='10.4178'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#00A0FF' />
								<stop offset='0.0066' stop-color='#00A1FF' />
								<stop offset='0.2601' stop-color='#00BEFF' />
								<stop offset='0.5122' stop-color='#00D2FF' />
								<stop offset='0.7604' stop-color='#00DFFF' />
								<stop offset='1' stop-color='#00E3FF' />
							</linearGradient>
							<linearGradient
								id='paint1_linear_2869_6519'
								x1='37.5985'
								y1='19.291'
								x2='0.372529'
								y2='19.291'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#FFE000' />
								<stop offset='0.4087' stop-color='#FFBD00' />
								<stop offset='0.7754' stop-color='#FFA500' />
								<stop offset='1' stop-color='#FF9C00' />
							</linearGradient>
							<linearGradient
								id='paint2_linear_2869_6519'
								x1='23.7411'
								y1='15.849'
								x2='-10.3854'
								y2='-19.1526'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#FF3A44' />
								<stop offset='1' stop-color='#C31162' />
							</linearGradient>
							<linearGradient
								id='paint3_linear_2869_6519'
								x1='-3.22762'
								y1='49.0288'
								x2='12.0114'
								y2='33.3992'
								gradientUnits='userSpaceOnUse'
							>
								<stop stop-color='#32A071' />
								<stop offset='0.0685' stop-color='#2DA771' />
								<stop offset='0.4762' stop-color='#15CF74' />
								<stop offset='0.8009' stop-color='#06E775' />
								<stop offset='1' stop-color='#00F076' />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div>
					<p className={css.download}>Get it on</p>
					<p className={css.app}>Google Play</p>
				</div>
			</Link>
		</div>
	);
};

export default MobileApp;
