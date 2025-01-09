import AlignLeftIcon from '@elementor/icons/AlignLeftIcon';
import LinkIcon from '@elementor/icons/LinkIcon';
import {
	GrayscaleIcon,
	LineHeightIcon,
	ReadableFontIcon,
	TextSizeIcon,
	ContrastIcon,
	PageStructureIcon,
	ReadingPanelIcon,
	HideImagesIcon,
	PauseAnimationsIcon,
} from '@ea11y/icons';
import { __ } from '@wordpress/i18n';

const iconStyle = { color: 'black' };

export const MENU_SETTINGS = {
	'content-adjustments': {
		title: __('Content Adjustments', 'pojo-accessibility'),
		options: {
			'bigger-text': {
				title: __('Adjust text size', 'pojo-accessibility'),
				icon: <TextSizeIcon sx={iconStyle} />,
			},
			'bigger-line-height': {
				title: __('Adjust line height', 'pojo-accessibility'),
				icon: <LineHeightIcon sx={iconStyle} />,
			},
			'text-align': {
				title: __('Align text', 'pojo-accessibility'),
				icon: <AlignLeftIcon sx={iconStyle} />,
			},
			'readable-font': {
				title: __('Readable font', 'pojo-accessibility'),
				icon: <ReadableFontIcon sx={iconStyle} />,
			},
		},
	},
	'color-adjustments': {
		title: __('Color Adjustments', 'pojo-accessibility'),
		options: {
			grayscale: {
				title: __('Greyscale', 'pojo-accessibility'),
				icon: <GrayscaleIcon sx={iconStyle} />,
			},
			contrast: {
				title: __('Contrast', 'pojo-accessibility'),
				icon: <ContrastIcon sx={iconStyle} />,
			},
		},
	},
	'orientation-adjustments': {
		title: __('Orientation Adjustments', 'pojo-accessibility'),
		options: {
			'page-structure': {
				title: __('Page structure', 'pojo-accessibility'),
				icon: <PageStructureIcon sx={iconStyle} />,
			},
			'reading-mask': {
				title: __('Reading mask', 'pojo-accessibility'),
				icon: <ReadingPanelIcon sx={iconStyle} />,
			},
			'hide-images': {
				title: __('Hide images', 'pojo-accessibility'),
				icon: <HideImagesIcon sx={iconStyle} />,
			},
			'pause-animations': {
				title: __('Pause animations', 'pojo-accessibility'),
				icon: <PauseAnimationsIcon sx={iconStyle} />,
			},
			'highlight-links': {
				title: __('Highlight links', 'pojo-accessibility'),
				icon: <LinkIcon sx={iconStyle} />,
			},
		},
	},
};
