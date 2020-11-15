import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

registerBlockType( 'mfblocks/e-content', {
    title: 'E-Content Group',

    edit: ( { className } ) => {
        return (
            <div className={ className }>
				<span className="mfblocks-group-hint">e-content</span>
                <InnerBlocks />
            </div>
        );
    },

    save: ( { className } ) => {
        return (
            <div className={ classnames( className, 'e-content' ) }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
