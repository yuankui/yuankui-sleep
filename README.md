# yuankui-sleep
a sleep works with promise


## Installation 
```sh
# npm
npm install yuankui-sleep --save
yarn add yuankui-sleep
```

## Usage

### Basic Usage

```typescript
import sleep from 'yuankui-sleep';

async function test() {
    console.log(new Date());
    // sleep 2000 seconds
    await sleep(2000);
    console.log(new Date());
}

```
