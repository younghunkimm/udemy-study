{
  const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

  const highScore = scores[0]; // 최고점수
  const secondhighScore = scores[1]; // 2등점수

  // 위에 방식을 이렇게 구현가능
  let [gold, silver, bronze, ...everyoneElse] = scores;
  console.log(gold);
  console.log(silver);
  console.log(bronze);
  console.log(everyoneElse);
}

console.log('-------------');

{
  const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];
  
  let [gold, silver, bronze] = raceResults;
  console.log(`gold: ${gold}`);
  console.log(`silver: ${silver}`);
  console.log(`bronze: ${bronze}`);
  
  let [fastest, ...everyoneElse] = raceResults;
  console.log(`fastest: ${fastest}`);
  console.log(`everyoneElse: ${everyoneElse}`);
}