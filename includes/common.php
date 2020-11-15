<?php

namespace MFBlocks\Common;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );

/**
 * Retrieve the current plugin version.
 *
 * @return string The current plugin version.
 */
function get_version() {
	return time();
}

/**
 * Enqueue assets to be used in the block editor.
 */
function enqueue_block_editor_assets() {
    wp_enqueue_script(
        'mfblocks-js',
		plugins_url( 'build/index.js', dirname( __FILE__ ) ),
		array(),
		get_version()
	);

	wp_enqueue_style(
		'mfblocks-editor-style',
		plugins_url( 'css/editor.css', dirname( __FILE__ ) ),
		array(),
		get_version()
	);
}
