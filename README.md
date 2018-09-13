## Introduction to e2e testing with Nightwatch

This repository shows the basic setup one needs to get started with e2e testing with [Nightwatch](http://nightwatchjs.org/). 

You will need to have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) installed, minimum required version is 7. You can check this by running ```$ java -version``` from the command line.

### Setup

Download the latest version of selenium standalone driver from <https://www.seleniumhq.org/download/>
Downloag the latest version of Google Chrome driver from <https://sites.google.com/a/chromium.org/chromedriver/downloads>

```Note: Make sure that you have downloaded the specific distribution for your Operation system```
 
```Note: Make sure to place the chromedriver and selenim-server-standalone-${version}.jar in /lib/drivers```

Windows users:

```Note: Your chromedriver will have an .exe extension```


```
    $ git clone https://github.com/TangentSolutions/AfricanBank-Lulu-e2etests.git
    
    $ npm install -g nightwatch
    
    $ nightwatch -v 
    
    $ cd intro-to-2e2-testing
    
    $ npm install 
    
```

### Run e2e test

```
    $ nightwath (Runs all tests)
    $ nightwatch --tag <your-tag-name> (Runs specific test with a specific tag name)
    
```

### References

<http://nightwatchjs.org/>

<https://sites.google.com/a/chromium.org/chromedriver/downloads>

<https://www.seleniumhq.org/download/>

<http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>

<https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links>

