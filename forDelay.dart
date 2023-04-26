void main(){

  List<int> array = [5,4,7,8,9,5];

  metodoAsincrono(array);
  

}

metodoAsincrono(array) async{
  for (var e in array) {
    await new Future(() => new Future.delayed(Duration(seconds: 3), (){
        print(e);
      })
    );

  }
}