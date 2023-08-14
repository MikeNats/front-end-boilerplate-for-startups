### **The project features:**

* Lerna Mono-repo
* Individual packages can be extracted to sepearte repos and import eith git submodules.
* Micro Front-End Architecture
* Mui Theaming
* Common Componet Lib
* Shared code linters and  dependencies.
* Ability to run End to End tests in the hole application and in a micro front end level.
* Ability to run Unitests tests in the hole application and in a micro front end level.
* Configurations for each enviroment: local, dev, test, uat, prod
* Docker
* Kubernetes
* AWS - Teraform

I hope this projects to helps people move faster towards their goals.

### **Run:**

    ``npm run start``

### **Build**:

    ``npm run build:prod``

### **Unit Tests:**

- Single Run
  ```
  npm run test:unit
  ```
- Watch Mode
  ```
  npm run test:unit:watch
  ```
- Coverage
  ```
  npm run test:unit:coverage
  ```

### **E2E Tests:**

- All E2E on given enviroment and given browser \*\*

```

ENV=local BROWSER=chrome TAGS='@all' npm run test:e2

```

### **E2E Visual Regration Tests:**

- E2E with Visual Regration **Test** on given enviroment and given \*\*
- ```
  ENV=local BROWSER=chrome VISUAL=test TAGS='@all' npm run test:e2e:visual
  ```

### \*\* **Configuration:**

ENV:

- local
- development
- test
- uat
- production

TAGS:

- '@all'
- '@myTag1 @myTag2'

BROWSER:
[webdriver docs](https://webdriver.io/docs/automationProtocols/)

VISUAL:
[BackstopJS docs](https://github.com/garris/BackstopJS#the-backstopjs-workflow)

- reference
- test
- approve
