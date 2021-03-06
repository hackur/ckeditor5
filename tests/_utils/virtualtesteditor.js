/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

import StandardEditor from '/ckeditor5/editor/standardeditor.js';
import HtmlDataProcessor from '/ckeditor5/engine/dataprocessor/htmldataprocessor.js';

/**
 * A simple editor implementation useful for testing the engine part of the features.
 * It contains full data pipepilne and the engine pipeline but without rendering to DOM.
 *
 * Should work in Node.js. If not now, then in the future :).
 *
 * @memberOf tests.ckeditor5._utils
 */
export default class VirtualTestEditor extends StandardEditor {
	constructor( config ) {
		super( null, config );

		this.document.createRoot();

		this.editing.createRoot( 'div' );

		this.data.processor = new HtmlDataProcessor();
	}

	/**
	 * Creates a virtual, element-less editor instance.
	 *
	 * @param {Object} config See {@link ckeditor5.editor.StandardEditor}'s param.
	 * @returns {Promise} Promise resolved once editor is ready.
	 * @returns {ckeditor5.editor.VirtualTestEditor} return.editor The editor instance.
	 */
	static create( config ) {
		return new Promise( ( resolve ) => {
			const editor = new this( config );

			resolve(
				editor.initPlugins()
					.then( () => editor )
			);
		} );
	}
}
