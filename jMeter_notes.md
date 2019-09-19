### JMeter!

One of the most popular performance testing tool in the industry. 

## Performance testing should:
Start early and continue through the whole development process.
Test how an application or resource performs under a given load to see impact.
Locate bottleneck.

A performance test is done after function testing. 
Response time is how long the application is taking to respond to the HTTP request.
**Response time:** Request Time + Processing Time + Response Time (depends on the Network Latency).

**Throughput:**
Number of transactions(request/response) / unit per time.

**Reliability:**
Numbers of error/number of request 
**Scalability:**
Measure response time, throughput and percentage of errors when we adding additional users for our app.
**Vertical scalability:**
Adding more memory connected to hardware 
**horizontal scalability:** adding servers to a cluster.

Sometimes performance requirements are given in contracts.
## The performance requirements: 
The average/maximum response time should be ...
The system should be able to support ... pages per second.
The system should be capable of supporting at least ... users per hour.


# Performance testing process: 
1. Design and build tests. 
2. Prepare the test environment.
3. Run the test. 
4. Analyze the results.
5. Re-test.

# Performance test using JMeter: 
Increasing the numbers of users 
Increasing the number of request independently of numbers of users
First step is smoke test with light load usually only one user to verify if the test works correctly 

**Load test:**
At a specific load lever, to monitor the behavior of application.

**Stress test:**
To see at which point the app stays stable and responsive use linearly increasing.

**Spike test:** 
Application is subjected to brief periods of sudden increments in the load beyond its maximum capacity to see if the application is resisted enough to work correctly during and after the spike. 

**Endurance test:** 
It is subjected to load within its limits but for a long duration, hours, or in some cases days to see, if the app has
memory leaks or does not properly close database or network connections.


Jmeter is not a browser, it does not render an HTML response is received and it sounded execute JavaScript Code.
It works on the protocol level: HTTP FTP or SMTP. 


**How to run JMeter:**

Go to the Jmeter website.
Downland the later version of Jmeter.
Extract to the folder of your choice.
In "/bin" folder find "jmeter.bat" to open UAT version 













