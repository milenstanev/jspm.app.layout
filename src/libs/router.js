export default function(angularModule, futureRoutes) {

	angularModule.requires.push('ui.router');
	angularModule.requires.push('ct.ui.router.extras.core');
	angularModule.requires.push('ct.ui.router.extras.future');
	angularModule.requires.push('oc.lazyLoad');

	var RouterConfig = ['$ocLazyLoadProvider', '$stateProvider', '$futureStateProvider',
		function($ocLazyLoadProvider, $stateProvider, $futureStateProvider) {

			$futureStateProvider.stateFactory('load', ['$q', '$ocLazyLoad', 'futureState',
				function($q, $ocLazyLoad, futureState) {

					var def = $q.defer();

					System.import(futureState.src).then(loaded => {
						var newModule = loaded;
						if (!loaded.name) {
							/**
							 * @desc They are an issue in original file, missing {window} and Object can't be acessed in component closure!
							 */
							var key = window.Object.keys(loaded);
							newModule = loaded[key[0]];
						}

						$ocLazyLoad.load(newModule).then(function() {
							def.resolve();
						}, function(err) {
							throw err;
						});
					});

					return def.promise;
				}
			]);

			futureRoutes.forEach(function(r) {
				$futureStateProvider.futureState(r);
			});
		}
	];

	return RouterConfig;
}
