# tb-skeleton
a toy bricks of skeleton

# install
 ```bash
 $ npm i tb-skeleton -s
 ```
 
# use npm
```js
  import Vue from 'Vue'
  import skeleton from 'tb-skeleton'
  Vue.use(skeleton)
  //or
  import {Skeleton,TbSkeleton} from 'tb-skeleton'
```

# use cdn
```html
<script src="https://cdn.jsdelivr.net/npm/zy-fetch@1.3.1/dist/zy-fetch.js"></script>
```





# start
```html
<template>
  <div width="20%">
    <tb-skeleton :aspect-ratio="1" :theme="opacity" :shape="circle"></tb-skeleton>
  </div>
</template>
<script>
  import {TbSkeleton} from 'tb-skeleton'
  export default {
    components: {
      tb-skeleton
    }
  }
</script>
```
# use skeleton
> use skeleton component, you can  set common props
```html
<template>
  <div>
    <skeleton :theme="opacity" :shape="radius" :bg-color="#dcdbdc">
     <tb-skeleton  width="30%" :aspect-ratio="1"  :shape="circle" :bg-color="#eee"></tb-skeleton>
     <tb-skeleton  width="30%" :aspect-ratio=".3"></tb-skeleton>
     <tb-skeleton  width="30%" :aspect-ratio=".3"></tb-skeleton>
   </skeleton>
  </div>
</template>
<script>
  import {TbSkeleton,Skeleton} from 'tb-skeleton'
  export default {
    components: {
      tb-skeleton,
      skeleton
    }
  }
</script>
```

# use grid layout
> about grid layout,please see [simple-grid](https://github.com/anthinkingcoder/simple-grid)
```html
<template>
<skeleton theme="opacity" style="width:200px" shape="radius">
    <row>
      <col :span="8">
        <tb-skeleton :aspect-ratio="1" shape="circle">
        </tb-skeleton>
      </col>
      <col :span="16">
        <row>
          <col :span="12" style="padding-left: 10px;margin-top: 5px">
            <tb-skeleton :aspect-ratio="0.2"></tb-skeleton>
          </col>
          <col :span="24" style="padding-left: 10px;margin-top: 10px">
            <tb-skeleton :aspect-ratio="0.1"></tb-skeleton>
          </col>
          <col :span="24" style="padding-left: 10px;margin-top: 10px">
            <tb-skeleton :aspect-ratio="0.1"></tb-skeleton>
          </col>
        </row>
      </col>
    </row>
  </skeleton>
</template>
<script>
  import {Col,Row} from 'simple-grid'
  import {TbSkeleton,Skeleton} from 'tb-skeleton'
  export default {
    components: {
      tb-skeleton,
      skeleton,
      Col,
      Row
    }
  }
</script>
```
# more example
> please see /example

# skeleton Component
### props
| param | description | type | default |
| :-: | :-: | :-: | :-: |
| theme | ```opacity```,```gradient```, ```normal``` | String | normal |
| shape | tb-skeleton shape, ```circle```、```normal```、```radius``` | String |  |
| bgColor | tb-skeleton background-color | String |  |
# tb-skeleton Component
### props
| param | description | type | default |
| :-: | :-: | :-: | :-: |
| theme | the same as skeleton theme | String |  |
| shape | the same as skeleton shape | String |  |
| bgColor | the same as skeleton bgColor | String |  |
| aspectRatio | ratio about width,height  | Number | 1 |
| height | the tb-skeleton height  | Number,String |  |
| width | the tb-skeleton width  | String | 100% |
