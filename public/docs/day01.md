# title of day01.md

* a point
* a second point


```python
freq = 0
actline = 0
freqArr = dict()
```


```python
for i in range(200):
    data = open('data/day01.data','r')
    for line in data:
      value = line.replace('\n','')
      actline += 1
      freq += int(value)
      try:
        freqArr[freq] += 1
      except:
        freqArr[freq] = 1
    
    data.close()
```


```python
len(freqArr)
```




    166628


