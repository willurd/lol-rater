# LOL Rater

This code is super alpha right now.

## Usage

### Downloading new tiers

This currently only supports http://www.nerfplz.com.

This information is turned into a JSON object and saved to `data/tiers.js`.

```
node tools/gettiers.js http://www.nerfplz.com/2014/09/solo-queue-fotm-tier-list-patch-415.html
```

### Calculating ratings

```
node ratings.js goodness
```

```
node ratings.js versatility
```

```
node ratings.js positions
```
