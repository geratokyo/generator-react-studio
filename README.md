# __Studio Template Generator__

## Getting started

install Yeoman and generator-studio globally

```
npm install yo -g
npm install generator-react-studio -g
```


## How it works

To create the project template run the following

## studio
```

yo react-studio {AppName}

```
Where {AppName} is the name of the application

### Flags
```
--is-story  // specifies that the project 
            // will include storybook libs 
            // so it will copy relevant files

--src-dir {directory}   // in case the src files will 
                        // need to sit on a different 
                        // directory specifies the directory

--exclude-public    // flag if the public folder 
                    // should be excluded when 
                    // generating the project
```

## Controller
To create a controller run the following 

```
yo studio:ctrl {CtrlName}
```
Where {CtrlName} is the name of the controller

## Page
To create a page run the following 

```
yo studio:page {PageName}
```
Where {PageName} is the name of the page

### Flags
```
--add-reducer // this flag will also create a file Reducer.ts
```

## UI Component
To create a ui component run the following 

```
yo studio:ui {UiName}
```
Where {UiName} is the name of the ui component

### Flags
```
--folder {folderName}   // specify a folder name 
                        // under under components for files to be generated
                        // default value "ui"
```

## Presentation Component (Functional component)
To create a ui component run the following 

```
yo studio:pr {PrName}
```
Where {PrName} is the name of the functional component

### Flags
```
--folder {folderName}   // specify a folder name 
                        // under under components for files to be generated
                        // default value "ui"
```

## Higher Order Component
To create a higher order component run the following 

```
yo studio:hoc {PrName}
```
Where {PrName} is the name of the functional component

### Flags
```
--folder {folderName}   // specify a folder name 
                        // under under components for files to be generated
                        // default value "ui"
```

## Model Script
To create a model scafolding template run the following 

```
yo studio:model {ModelName}
```
Where {ModelName} is the name of the model



## Links

* [Details](https://roobley.com/details-react-studio-generator)
* [Tutorial](https://roobley.com/getting-started-with-react-studio-generator)
* [github.com](https://github.com/geratokyo/generator-react-studio)