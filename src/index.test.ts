import sleep from './index';

test('basic', async () => {
    console.log(new Date());
    // sleep 2000 seconds
    await sleep(2000);
    console.log(new Date());
});