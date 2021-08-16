'use strict';
/* globals $, app */

define('admin/plugins/rc', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('rc', $('.rc-settings'));

		$('#save').on('click', function() {
			Settings.save('persona', $('.rc-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'rc-saved',
					title: 'Settings Saved',
					message: 'RC settings saved'
				});
			});
		});
	};

	return ACP;
});
