## I accidentally pushed node_modules 😢, What I can do?

1. make sure you have `.gitignore` file or you can do

```bash
touch .gitignore
```

1. add the unwanted files to it

```bash
node_modules
dist
src/styles
# or any other ones(later we will)
```

1. we need to remove the node_modules folder from the git repository

```bash
git rm -r --cached node_modules
```

1. commit your work

```bash
git commit -m 'Removed node_module 😉'
```

1. push to Github

```bash
git push
```
