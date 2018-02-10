# Boilerplate Drupal8 theme
This as a starting point for setting up a Drupal8 theme, after performing the following, the references to the libraries in the info.yml adjust to the theme name, after all this should result in a working theme (theme put in /themes/custom/yourtheme)

## Instalatie
Install the theme with git or download zip file
```
git clone git@github.com:illutek/theme-directory.git yourtheme
```

Go to directory yourtheme
 ```
cd yourtheme
```

Install all dev dependencies with
```
yarn install
```
or  
```
npm install
```

Rename illutek.theme to yourtheme.theme
```
mv illutek.theme yourtheme.theme
```
Rename illuetk.libraries.yml to yourtheme.libraries.yml
```
mv illutek.libraries.yml yourtheme.libraries.yml
```
Rename illutek.info.yml to yourtheme.info.yml
```
mv illutek.info.yml yourtheme.info.yml
```
- and edit this file, change all illutek naming to yourtheme name.  

Install theme dependencies with bower  
```
bower install
```
- this downloads bootstrap 4 en fontawesome.  

The dist directory and css create with  
```
yarn start
```
or with  
```
gulp
```  

Yarn as component manager for dev modules
Gulp as an automation tool (commando 'yarn start' or with 'gulp' starts gulp), this create a dist folder.  

### Error handler
With gulp-prettyerror display Errors in a pretty way, without breaking watching tasks


