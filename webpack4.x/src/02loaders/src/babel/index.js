const hello = () => 'hello world'

new Promise(() => {
  console.log(1)
}).then(() => {
  console.log(2);
})