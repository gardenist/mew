function wrap(text, start, end) {
  // split으로 배열에 넣음 
  let pool = text.split("\n");
  // 각 요소의 앞, 뒤에 start랑 end를 넣음 
  for(var i=0; i < pool.length; i++) {
      pool[i] = start + pool[i] + end;
      console.log(pool[i]);
  };
  // 다시 구분자로 배열 합침 
  let result = pool.join("\n");
  return result;
};

