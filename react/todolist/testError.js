function testBis() {
  try { console.log(i); }
  catch (error) {
    console.error(`erreur attrapée dans testBis : `, error);
    throw new Error(error);
  }
}

function test() {
  try {
    testBis();
  } catch (error) {
    console.error(`erreur attrapée dans test : `, error);
  }
}
test();


