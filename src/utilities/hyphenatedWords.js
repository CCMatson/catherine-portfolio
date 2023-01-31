function hyphenatedWords (string){
  const title =string.toLowerCase().replace(/ /g, '-').replace(/'/g, '')
  console.log(title)

return title
}

export { hyphenatedWords };

