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

- Functionality: Generate a deferred object, which
- Returns: a deferred object `d`.  

```
var d = $P.deferred();
```

#### d.resolve()
#### d.fail()
#### d.notify(payload)
#### d.promise()

- Functionality: Returns the promise object
- Returns: a promise object `p`

```
var p = d.promise();
```

#### p.onResolve([resolveFns])
#### p.onFail([failFns])
#### p.onNotify([notifyFns])