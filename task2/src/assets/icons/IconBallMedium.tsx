import { SVGProps } from 'react'

export const IconBallMedium = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			style={{ position: 'absolute' }}
			width='94'
			height='81'
			viewBox='0 0 94 81'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_bdf_0_14)'>
				<circle
					cx='44'
					cy='28'
					r='30'
					fill='url(#paint0_radial_0_14)'
					fillOpacity='0.8'
					shapeRendering='crispEdges'
				/>
			</g>
			<defs>
				<filter
					id='filter0_bdf_0_14'
					x='0'
					y='-13'
					width='94'
					height='94'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feGaussianBlur in='BackgroundImageFix' stdDeviation='2' />
					<feComposite
						in2='SourceAlpha'
						operator='in'
						result='effect1_backgroundBlur_0_14'
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
						result='effect2_dropShadow_0_14'
					/>
					<feOffset dx='3' dy='6' />
					<feGaussianBlur stdDeviation='13.5' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.694118 0 0 0 0 0.462745 0 0 0 0 0.85098 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='effect1_backgroundBlur_0_14'
						result='effect2_dropShadow_0_14'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect2_dropShadow_0_14'
						result='shape'
					/>
					<feGaussianBlur
						stdDeviation='5'
						result='effect3_foregroundBlur_0_14'
					/>
				</filter>
				<radialGradient
					id='paint0_radial_0_14'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(30.35 13.9) rotate(51.0412) scale(49.3828)'
				>
					<stop stopColor='#ECD0FF' stopOpacity='0.8' />
					<stop offset='0.596678' stopColor='#A15DCF' stopOpacity='0.3' />
					<stop offset='0.785899' stopColor='#7631A4' stopOpacity='0.26' />
					<stop offset='1' stopColor='#561880' stopOpacity='0.29' />
				</radialGradient>
			</defs>
		</svg>
	)
}
