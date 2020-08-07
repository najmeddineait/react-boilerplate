# React Boilerplate with JWT and AdminLTE 3

## Introduction

This is a react boilerplate build for enterprise application, and that can be customized in any way.
This application uses the adminLTE 3 template and manages authentication with JWT

> **TL;DR:** this is an early version of the code and documentation,so it can have a lot of bugs, and thing that are not covered in the documentation
> If you see something that have to change you can create a new issue/Pull request. thank you

---

## Tech Stack

- React
- React Router
- Redux
- JWT
- adminLTE 3

---

## File Structure

This file architecture follows a modular approach intended to provide the best starting point for any type of applications from small to large ones.
Following this file/code structure is not mandatory, but it's preferable

### `/src`

This is the main folder of the application … here we find the most of our code, so we will focus in this documentation on the folders/files inside this folder.

### `/src/index.js`

This is the entry point of the project. This application is created using the **create-react-app** tool, so it follows some of its design architecture.
Here you can change the axios default base URL, and provide just the path in the requests.

### `/src/App.js`

The **App.js** file Contain the first component of our application.
Here we connect the App component with **Redux** store and wrap the Router from **react router** around it.
Also in this file we check if the token is in localStorage and is it valid

### `/src/assets`

This directory also houses our assets such as images,icons … etc.

### `/src/modules`

The **modules** directory contains all the parts of our application.
We follow a **modular** design pattern, so our application are separated to multiple modules, the main/required modules are **Layout** / **Users**
We'll explore this directory in more details below.

### `/src/redux`

In this directory we have the Redux Store, and the mainReducer that combine all the reducers from all modules

### `/src/utils`

Here we put all functions that are too general or widely used to be included in another module and too small to warrant their own module.

---

## Modules

In the modules folder every folder represents a module in the application.
We use **/src/modules/index.js** to export all the modules that will be used in the application as a group

> E.g we use this file to automatically build the menu using the exported objects from it

### Module file Structure

This is an example structure from the Users module

![Users module file structure](https://user-images.githubusercontent.com/17097954/89644976-d0f85200-d8b0-11ea-8461-1a188446514b.png)

The index.js and UsersContainers.js are the required files for every module

### `/index.js`

This file contains a description of the module and what its need if its depending on other modules.
This is the entry point of every module, here we export every think we will need outside of this module.
This is an example from the **Users** module :

![Users/index.js](https://user-images.githubusercontent.com/17097954/89644984-d3f34280-d8b0-11ea-93ec-321b30a9739f.png)

In the default export we mainly need this properties : **moduleName**, **routeProps**, **menu**.

* We define the module name in the **moduleName**, this name should not be repeated.
* In The **routeProps** we find the configuration for the module route(react router).
* The **Menu** object contains the configuration for the menu.
  * If the **setting** property is true this menu will be added to the settings as sub-menu.
  * The **icon** property contains the name of the icon from **Font Awesome Icons**.
  * The **label** have the displayed name of the module.
  * And the **name** property contain the unique name of the module in the menu, needed for styling … etc
  * If a module have sub-menu, we will need an items property as shown below.
  
  ![subMenu array](https://user-images.githubusercontent.com/17097954/89644998-d9e92380-d8b0-11ea-8d87-9f046e0c8e32.png)
  * **For a clear menu purpose, if the setting property is true, you can’t have a sub-menu**

### `/UsersContainer.js`

This file contains the main/class component of the module here we can define the nested routes for every module and we can manage the logic for all the views of the module

> **Note:** for more info about the code, and the architecture of the application, you can look around the repo its simple and clean
