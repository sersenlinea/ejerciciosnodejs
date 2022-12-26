const useValue=(valueInitial)=>{
  const todo={
    a:valueInitial,
    b:(value)=>{
      if(typeof value === typeof todo.a){
        if(Array.isArray(value)){
          for(let a=0;a <= todo.a.length;a++){
            todo.a.pop();
          }
          value.forEach((v)=>{
            todo.a.push(v)
            return [todo.a,todo.b]
          })
        }
      }
    }
  }

    return [todo.a,todo.b]
  }
         
const [valor,setValor]=useValue([]);

setValor([3])
console.log(valor);
setValor([9,0])
console.log(valor);
setValor([19,35]);
console.log(valor);