function parent() {
  let a = 20;
  function child() {
    a = 30;
    function child2() {
      console.log(a);
    }
    child2();
  }
  child();
  console.log(a);
}

parent();
