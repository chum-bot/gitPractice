function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function multiplyArrayNumbers(arr){
    for (i = 0; i < arr.length; i++){
        sleep(250);
        console.log("Multiplying element " + arr[i]);
        arr[i] *= 2;
        sleep(1000);
        console.log("Doubled number: " + arr[i]);
    }
    console.log("Completed array: " + arr);
}

const numbersYay = [0.5,1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,];

multiplyArrayNumbers(numbersYay);