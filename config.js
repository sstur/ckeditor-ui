/**
 * Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
  var m = location.search.match(/[&?]skin=([\w-]+)/);
  config.skin = m ? m[1] : 'ozone';
};

