# git-diff-git-apply

get diff

```sh
git diff > diff.patch
```

use patch.

```sh
cd ./src/
patch -s -u < ../diff.patch
```

use git apply.

```sh
git apply diff.patch 
```
