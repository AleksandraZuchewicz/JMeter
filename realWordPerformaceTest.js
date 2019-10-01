 # What is a real-word performance test?

**Think time** - simulate actual user action with timing/delays.
**Pacing** - controlled ramp-up and down or virtual users:
    - control timing between iterations
    - achieve x iterations in y  min/sec 

**Add plugin called** - Stepping Thread (jpgc Standard Set)

**How to set up a realistic performance test with timers?**

**Purpose** - to pause thread for some time 
- to add delay between threads
- to avoid over flooding the server and achieve real-time behaviour by pacing the load 
(to simulate v.user's THINK TIME)

**The most common timers to use are:** 
**Constant Timer** 
**Uniform Pardom Timer:**
- Random Delay Maximum: 
- Constant Delay offset: 

0.x * Random Delay Maximum + Constant Delay Offset  
x = from 0 to 9 
eg. 0.x *100 + 0



