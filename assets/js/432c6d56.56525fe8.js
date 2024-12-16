"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1454],{75459:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"testing/e2e/selenium","title":"Testing with Selenium","description":"This documentation outlines the process for testing a webforJ apps using Selenium, specifically focusing on the HelloWorldView from","source":"@site/docs/testing/e2e/selenium.md","sourceDirName":"testing/e2e","slug":"/testing/e2e/selenium","permalink":"/docs/testing/e2e/selenium","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/testing/e2e/selenium.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Testing with Selenium"},"sidebar":"documentationSidebar","previous":{"title":"Testing with Playwright","permalink":"/docs/testing/e2e/playwright"},"next":{"title":"PropertyDescriptorTester","permalink":"/docs/testing/property-descriptor-tester"}}');var r=i(74848),s=i(28453);const o={sidebar_position:3,title:"Testing with Selenium"},l=void 0,c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Maven configuration",id:"maven-configuration",level:2},{value:"Testing example: <code>HelloWorldView</code>",id:"testing-example-helloworldview",level:2},{value:"Key steps",id:"key-steps",level:3},{value:"Running tests",id:"running-tests",level:3},{value:"Expected behavior",id:"expected-behavior",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This documentation outlines the process for testing a webforJ apps using Selenium, specifically focusing on the ",(0,r.jsx)(n.code,{children:"HelloWorldView"})," from\nthe ",(0,r.jsx)(n.code,{children:"webforj-archetype-hello-world"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"App Basics",type:"info",children:(0,r.jsxs)(n.p,{children:["To learn more about the ",(0,r.jsx)(n.code,{children:"webforj-archetype-hello-world"}),", refer to the ",(0,r.jsx)(n.a,{href:"../../introduction/basics",children:"App Basics Introduction"})," section."]})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before running the Selenium tests, ensure the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"webforJ app is correctly set up and running on your local server."}),"\n",(0,r.jsxs)(n.li,{children:["You have installed:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Selenium Java bindings."}),"\n",(0,r.jsx)(n.li,{children:"A compatible WebDriver for your browser."}),"\n",(0,r.jsx)(n.li,{children:"Maven for project dependencies."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"maven-configuration",children:"Maven configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Add the necessary dependencies in your ",(0,r.jsx)(n.code,{children:"pom.xml"})," for Selenium and other testing libraries:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml"',children:"<dependencies>\n  <dependency>\n    <groupId>org.seleniumhq.selenium</groupId>\n    <artifactId>selenium-java</artifactId>\n    <version>4.27.0</version>\n  </dependency>\n  <dependency>\n    <groupId>io.github.bonigarcia</groupId>\n    <artifactId>webdrivermanager</artifactId>\n    <version>5.9.2</version>\n  </dependency>\n  <dependency>\n    <groupId>org.junit.jupiter</groupId>\n    <artifactId>junit-jupiter-api</artifactId>\n    <scope>test</scope>\n  </dependency>\n</dependencies>\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"testing-example-helloworldview",children:["Testing example: ",(0,r.jsx)(n.code,{children:"HelloWorldView"})]}),"\n",(0,r.jsxs)(n.p,{children:["The following code demonstrates a Selenium based test for the ",(0,r.jsx)(n.code,{children:"HelloWorldView"})," component."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="HelloWorldViewTest.java"',children:'package com.example.views;\n\nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\n\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.chrome.ChromeDriver;\nimport org.openqa.selenium.support.ui.WebDriverWait;\n\nimport static java.time.Duration.ofSeconds;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.openqa.selenium.support.ui.ExpectedConditions.titleIs;\nimport io.github.bonigarcia.wdm.WebDriverManager;\n\nclass HelloWorldViewTest {\n\n  private WebDriver driver;\n  private static final String PORT = System.getProperty("server.port", "8080");\n\n  @BeforeAll\n  static void setupAll() {\n    WebDriverManager.chromedriver().setup();\n  }\n\n  @BeforeEach\n  void setup() {\n    driver = new ChromeDriver();\n    driver.get("http://localhost:" + PORT + "/");\n    new WebDriverWait(driver, ofSeconds(30))\n            .until(titleIs("webforJ Hello World"));\n  }\n\n  @AfterEach\n  void teardown() {\n    if (driver != null) {\n        driver.quit();\n    }\n  }\n\n  @Test\n  void shouldClickButton() {\n    WebElement button = driver.findElement(By.tagName("dwc-button"));\n    assertEquals("Say Hello", button.getText(), "Button text mismatch!");\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"key-steps",children:"Key steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Initialize WebDriver"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"https://github.com/bonigarcia/webdrivermanager",children:(0,r.jsx)(n.code,{children:"WebDriverManager"})})," to automatically manage the driver executable for the browser."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Set Up Test Environment"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Start the test server on ",(0,r.jsx)(n.code,{children:"http://localhost:<port>/"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Wait until the page title matches the expected ",(0,r.jsx)(n.code,{children:"webforJ Hello World"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Interact with Elements"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Locate elements using ",(0,r.jsx)(n.code,{children:"By.tagName"}),", ",(0,r.jsx)(n.code,{children:"By.id"}),", or other Selenium locators."]}),"\n",(0,r.jsx)(n.li,{children:"Verify expected behaviors like button clicks or text changes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Because webforJ produces a single-page web app, Selenium isn\u2019t aware of DOM manipulation after the initial page has been loaded. You can use Selenium\u2019s ",(0,r.jsx)(n.a,{href:"https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/support/ui/WebDriverWait.html",children:"WebDriverWait API"})," to wait until the DOM has been compiled."]})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Teardown"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Quit the WebDriver session to release resources."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"running-tests",children:"Running tests"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the webforJ server:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mvn jetty:run\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Execute the test cases:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mvn test\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"expected-behavior",children:"Expected behavior"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["On visiting ",(0,r.jsx)(n.code,{children:"http://localhost:<port>/"}),", the ",(0,r.jsx)(n.code,{children:"HelloWorldView"})," page loads."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"dwc-button"})," element with the text ",(0,r.jsx)(n.code,{children:"Say Hello"})," should be present."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);