import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	InnerBlocks,
	InspectorControls,
	RichText
} from '@wordpress/block-editor';

import { ToggleControl, PanelBody } from '@wordpress/components';
import classnames from 'classnames';

registerBlockType( 'mfblocks/h-entry', {
	title: 'H-Entry Group',

	attributes: {
		has_title: {
			type: 'boolean',
			default: false,
		},
		has_summary: {
			type: 'boolean',
			default: false,
		},
		has_content: {
			type: 'boolean',
			default: true,
		},
		display_author: {
			type: 'boolean',
			default: false,
		},
		display_publish_date: {
			type: 'boolean',
			default: false,
		},
		title: {
			type: 'string',
			source: 'html',
			selector: '.p-name',
		},
		summary: {
			type: 'string',
			source: 'html',
			selector: '.p-summary',
		}
	},

	edit: ( { attributes, setAttributes, className } ) => {
		const {
			has_title,
			has_summary,
			has_content,
			display_author,
			display_publish_date,
			title,
			summary,
		} = attributes;

		return (
			<Fragment>
				<div className={ className }>
					<span className="mfblocks-group-hint">h-entry</span>
					{ has_title &&
						<Fragment>
							<span className="mfblocks-group-hint">p-name</span>
							<RichText
								identifier="h-entry-title"
								tagName="h1"
								value={ title }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								placeholder={ __( 'Write an entry title…' ) }
							/>
						</Fragment>
					}
					{ has_summary &&
					<Fragment>
						<span className="mfblocks-group-hint">p-summary</span>
						<RichText
							identifier="h-entry-summary"
							tagName="p"
							value={ summary }
							onChange={ ( value ) => setAttributes( { summary: value } ) }
							placeholder={ __( 'Write an entry summary…' ) }
						/>
					</Fragment>
					}
					{ has_content &&
					<div className="e-content-wrapper">
						<span className="mfblocks-group-hint">e-content</span>
						<InnerBlocks />
					</div>
					}
				</div>
				<InspectorControls>
					<PanelBody title={ __( 'Microformat Options' ) }>
						<ToggleControl
							label={ __( 'Include title' ) }
							checked={ has_title }
							onChange={ () => setAttributes( { has_title: ! has_title } ) }
						/>
						<ToggleControl
							label={ __( 'Include summary' ) }
							checked={ has_summary }
							onChange={ () => setAttributes( { has_summary: ! has_summary } ) }
						/>
						<ToggleControl
							label={ __( 'Include e-content' ) }
							checked={ has_content }
							onChange={ () => setAttributes( { has_content: ! has_content } ) }
						/>
						<ToggleControl
							label={ __( 'Display author' ) }
							checked={ display_author }
							onChange={ () => setAttributes( { display_author: ! display_author } ) }
						/>
						<ToggleControl
							label={ __( 'Display publish date' ) }
							checked={ display_publish_date }
							onChange={ () => setAttributes( { display_publish_date: ! display_publish_date } ) }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>

		);
	},

	save: ( { attributes, className } ) => {
		const {
			has_title,
			has_summary,
			has_content,
			display_author,
			display_publish_date,
			title,
			summary,
		} = attributes;

		return (
			<article className={ classnames( className, 'h-entry' ) }>
				{ has_title &&
				<h1 className="p-name">{ title }</h1>
				}
				{ has_summary &&
				<p className="p-summary">{ summary }</p>
				}
				{ has_content &&
				<div className={ classnames( className, 'e-content' ) }>
					<InnerBlocks.Content />
				</div>
				}
			</article>
		);
	},
} );
