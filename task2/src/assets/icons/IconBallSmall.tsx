import { SVGProps } from 'react'

export const IconBallSmall = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			style={{ position: 'absolute' }}
			width='62'
			height='62'
			viewBox='0 0 62 62'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_bdf_0_12)'>
				<circle
					cx='28'
					cy='25'
					r='14'
					fill='url(#paint0_radial_0_12)'
					fillOpacity='0.8'
					shapeRendering='crispEdges'
				/>
			</g>
			<defs>
				<filter
					id='filter0_bdf_0_12'
					x='0'
					y='0'
					width='62'
					height='62'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feGaussianBlur in='BackgroundImageFix' stdDeviation='2' />
					<feComposite
						in2='SourceAlpha'
						operator='in'
						result='effect1_backgroundBlur_0_12'
					/>
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feMorphology
						radius='10'
						operator='erode'
						in='SourceAlpha'
						result='effect2_dropShadow_0_12'
					/>
					<feOffset dx='3' dy='6' />
					<feGaussianBlur stdDeviation='13.5' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.87451 0 0 0 0 0.490196 0 0 0 0 0.490196 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='effect1_backgroundBlur_0_12'
						result='effect2_dropShadow_0_12'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect2_dropShadow_0_12'
						result='shape'
					/>
					<feGaussianBlur
						stdDeviation='2.5'
						result='effect3_foregroundBlur_0_12'
					/>
				</filter>
				<radialGradient
					id='paint0_radial_0_12'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(21.63 18.42) rotate(51.0412) scale(23.0453)'
				>
					<stop stopColor='#FFD0D0' stopOpacity='0.6' />
					<stop offset='0.596678' stopColor='#D45D5D' stopOpacity='0.31' />
					<stop offset='0.785899' stopColor='#A73131' stopOpacity='0.33' />
					<stop offset='1' stopColor='#821919' stopOpacity='0.29' />
				</radialGradient>
			</defs>
		</svg>
	)
}
