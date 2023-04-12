/* Nama : Fikri Maulana Setiawan 
    Kelas : 4B Informatika*/

function fibonacci(num) {
  if(num <= 1) {
    return [0, 1].slice(0, num + 1);
  } else {
    let result = fibonacci(num - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
}

console.log(fibonacci(10));