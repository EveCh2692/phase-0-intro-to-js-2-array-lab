const cats = ['Milo', 'Otis', 'Garfield']


 let destructivelyAppendCat = function (Ralph){
   cats.push('Ralph')
 }

 let destructivelyPrependCat = function (Bob){
cats.unshift(Bob)
 }

 let destructivelyRemoveLastCat = function (){
     cats.pop()
 }

 let destructivelyRemoveFirstCat = function (){
     cats.shift()
 }

 let appendCat = function(Broom){
  return [...cats,Broom]
 }

 let prependCat = function (Arnold){
     return [Arnold, ...cats]
 }

 let removeLastCat = function (){
     return cats.slice(0, -1)
 }

 let removeFirstCat = function(){
     return cats.slice(1)
 }