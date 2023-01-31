// const { myProjects }  = require( "../data/projects")
// const {hyphenatedWords} = require( "./hyphenatedWords" ) 

function findProjects (string){
  // const title = string.replace('/projects/' ,'')

  const foundProject = myProjects.filter(project => { const thisTitle = hyphenatedWords(project.title)
    console.log(thisTitle)
  return thisTitle === title
  }) 
  return foundProject

}

findProjects( 'Class Cookbook')

