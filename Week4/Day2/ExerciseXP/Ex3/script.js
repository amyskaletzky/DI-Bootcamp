// Exercise 3 : Fortune Teller
// Instructions:
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


(function (numOfChildren, partnerName, geoLocation, jobTitle) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    let sentence = document.createTextNode(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numOfChildren} kids.`)
    div.appendChild(sentence)
})(4, 'Harry', 'America', 'reporter')

