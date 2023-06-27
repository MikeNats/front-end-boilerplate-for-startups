### **Run:**

    ``npm run start``

### **Build**:

    ``npm run prod:build``

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

NODE_ENV=local BROWSER=chrome TAGS='@all' npm run test:e2

```

### **E2E Visual Regration Tests:**

- E2E with Visual Regration **Test** on given enviroment and given \*\*
- ```
  NODE_ENV=local BROWSER=chrome VISUAL=test TAGS='@all' npm run test:e2e:visual
  ```

### \*\* **Configuration:**

NODE_ENV:

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
