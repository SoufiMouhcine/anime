importScripts('sw-toolbox-master/sw-toolbox.js')
toolbox.precache(['index.php','style.css'])
toolbox.router.get('/*',toolbox.networkFirst,{
	networkTimeoutSeconds:5
})
