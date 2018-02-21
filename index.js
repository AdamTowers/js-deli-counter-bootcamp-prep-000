function takeANumber (adam_towers, name) {
  adam_towers.push(name);
  return `Welcome, ${name}. You are number ${adam_towers.indexOf(name) + 1} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var nowServingName = katzDeliLine.shift()
    return `Currently serving ${nowServingName}.`
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return `The line is currently empty.`
  } else {
    var placesInLine = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      placesInLine.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${placesInLine.join(`, `)}`
  }
}
