# Coffee & Cake Dojo


AWS account and CLI configured

```
aws --version
```


1. install nodejs
```
https://nodejs.org/en/
```

2. install serverless

```
npm install -g serverless
```

3. Clone this repo

```
git clone https://github.com/mattlaver/coffee-cake.git
```


## Orders

### Objective
_Simulate customers placing orders_

### Steps

* Create an order by picking random items from the menu
* Create an SNS Order Topic, update serverless.yaml
* Post the order to an SNS Order Topic

#### tips:

Menu: https://raw.githubusercontent.com/mattlaver/coffee-cake/master/menu.js


## Till

### Objectives
_Creates a recipt for the order_


* Add an event for the SNS Order Topic
* Calculate the total from the order
* Post the total to Splunk
