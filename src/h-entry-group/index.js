import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

registerBlockType( 'mfblocks/h-entry', {
    title: 'H-Entry Group',

    edit: ( { className } ) => {
        return (
            <div className={ className }>
				<span className="mfblocks-group-hint">h-entry</span>
                <InnerBlocks />
            </div>
        );
    },

    save: ( { className } ) => {
        return (
            <article className={ classnames( className, 'h-entry' ) }>
                <InnerBlocks.Content />
            </article>
        );
    },
} );
