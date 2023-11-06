const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 68 degrees outside, rather nice for a fall day. To take advantage of this, :insertx: went for a long drive. When he arrived at :inserty:, he sat down and took in the scenery, smiling as he gazed the surroundings. Then, :insertz:. :insertx: was not surprised — :insertx:, an absolute perfect being at 200 pounds, he had seen things of this nature before, and felt that it was rather humorous.";
var insertX = ["Scott", "Scottington", "ScottingtonMcgee"];
var insertY = ["his destination", "where they felt fulfilled", "a relatively good stopping point"];
var insertZ = ["in the distance a seagull pooped on a citizens head", "explosions erupted across the sky", "Jesus himself floated down from the heavens"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:",xItem);
    newStory = newStory.replace(":inserty:",yItem);
    newStory = newStory.replace(":insertz:",zItem);

  if(customName.value !=='') {
    const name = customName.value;
    newStory = newStory.replace("Ardvarkington", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(200/2.204) + ('kilos');
    const temperature = `${Math.round((68-32) * 5/9)} centigrade`;
    newStory = newStory.replace ("200 pounds", weight);
    newStory = newStory.replace ("68", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}