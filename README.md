# Coffee & Cake Dojo



## Orders

### Objective
_Simulate customers placing orders_

### Steps

* Create an order by picking random items from the menu
* Create an SNS Order Topic
* Post the order to an SNS Order Topic

#### 

Menu: https://raw.githubusercontent.com/mattlaver/coffee-cake/master/menu.js


## Till

### Objectives
_Creates a recipt for the order_


* Add an event for the SNS Order Topic
* Calculate the total from the order
* Post the total to Splunk