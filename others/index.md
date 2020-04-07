# 其他常见算法

### 缓存淘汰策略

当缓存存储空间满了之后，需要清除掉一些不常用的缓存来给新增的缓存腾空间。常用的策略有这些： FIFO（First In First Out）先进先出、LFU（Least Frenqently Used）最少使用、LRU（Least Recently Used）最近最少使用

##### LRU（Least Recently Used） 

根据数据的历史使用记录来淘汰最近一段时间使用地最少的数据。其核心思想是：数据若最近被访问过的话，将来被访问的几率也比不常用的数据要高，所以优先清掉最近没被访问到的数据。

应用： Vue中`keep-alive`的实现

[leetcode题目——LRU缓存机制](https://leetcode-cn.com/problems/lru-cache/)

[leetcode题目——LFU缓存机制](https://leetcode-cn.com/problems/lfu-cache/)

