<?php

namespace MFBlocks\Patterns;

add_action( 'admin_init', __NAMESPACE__ . '\register_block_pattern_categories' );
add_filter( 'allowed_block_types', __NAMESPACE__ . '\register_block_patterns', 999 );

/**
 * Register the block pattern categories provided by this plugin.
 */
function register_block_pattern_categories() {
	register_block_pattern_category(
		'microformats',
		array(
			'label' => __( 'Microformats', 'mfblocks' ),
		)
	);
}

/**
 * Register the block patterns provided by this plugin.
 *
 * Note: I'm intentionally hooking into the hackiest place possible to register
 * these as a placeholder to remind myself that I should follow up on this open
 * GitHub issue: https://github.com/WordPress/gutenberg/issues/26607
 *
 * @param array $allowed_block_types Allowed block types.
 * @return array Unmodified list of allowed block types.
 */
function register_block_patterns( $allowed_block_types ) {

	register_block_pattern(
		'mfblocks/thought',
		array(
			'title'       => __( 'Thought', 'mfblocks' ),
			'categories'  => array( 'microformats' ),
			'description' => _x( 'A contained thought as part of a larger post.', 'Block pattern description', 'mfblocks' ),
			'content'     => "<!-- wp:mfblocks/h-entry -->\n<article class=\"wp-block-mfblocks-h-entry h-entry\"><!-- wp:mfblocks/e-content -->\n<div class=\"wp-block-mfblocks-e-content e-content\"><!-- wp:paragraph -->\n<p>A placeholder paragraph that can be removed or edited.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>A second placeholder paragraph.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:mfblocks/e-content --></article>\n<!-- /wp:mfblocks/h-entry -->",
		)
	);

	register_block_pattern(
		'mfblocks/thought-title',
		array(
			'title'       => __( 'Thought with title', 'mfblocks' ),
			'categories'  => array( 'microformats' ),
			'description' => _x( 'A contained thought with a title or name as part of a larger post.', 'Block pattern description', 'mfblocks' ),
			'content'     => "<!-- wp:mfblocks/h-entry -->\n<article class=\"wp-block-mfblocks-h-entry h-entry\"><!-- wp:heading {\"level\":1,\"className\":\"p-name\"} -->\n<h1 class=\"p-name\">An entry name/title</h1>\n<!-- /wp:heading -->\n\n<!-- wp:mfblocks/e-content -->\n<div class=\"wp-block-mfblocks-e-content e-content\"><!-- wp:paragraph -->\n<p>A placeholder paragraph that can be removed or edited.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>A second placeholder paragraph.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:mfblocks/e-content --></article>\n<!-- /wp:mfblocks/h-entry -->",
		)
	);

	return $allowed_block_types;
}
