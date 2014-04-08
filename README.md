# Lpe (under planning stage)
Lightest promise ever. Use promise with ease.  

### Installation
Install Lpe in Node.js:

```
sudo npm install lpever
```

Install Lpe in the browser

```
<script src="//path/to/vendor/lpe.js"></script>
```

Better to use `lpe.min.js` in production.

### Usage

Use Lpe in Node.js:

```
var $P = require('lpever');
```

Use Lpe with the help of AMD style module loader in browser:

```
require(['lpever'], function($P) { ... });
```

If `window.define` is not detected, standalone version of Lpe will be adopted (in browser). You can reference it via `$P` object.

### API

#### $P.deferred()
Generate a deferred object, which will be used to configure the promise object.

```
var d = $P.deferred();
```

#### d.resolve()
Notify the promise object that the job is done.

#### d.fail()
Notify the promise object that the job failed.

#### d.notify(payload)
Update the job information according to progress, the `payload` object can be any information you want to deliever to the promise object.

#### d.promise()
Returns the promise object

```
var p = d.promise();
```

#### p.onResolve(resolveFns)
Functions to be executed when the promise is resolved. `resolveFns` can be a single function, or an array of functions.

#### p.onFail(failFns)
Functions to be executed when the job failed. `failFns` can be a single function, or an array of functions.

#### p.onNotify(notifyFns)
Functions to be executed when the job's information is updated. `notifyFns` can be a single function, or an array of functions.
