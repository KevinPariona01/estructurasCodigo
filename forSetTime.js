async function main(){
    
    arreglo = [5,4,6,7,8,9]

    for (const element of arreglo) {
        await new Promise(resolve => setTimeout(() => {
          console.log(element);
          resolve();
        }, 1000));
      }

}

main();