// Bob
// Bob is a lackadaisical teenager. In conversation, his responses are very limited.
// Bob answers 'Sure.' if you ask him a question.
// He answers 'Whoa, chill out!' if you yell at him.
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.

function bob(convo){
  // Check if anything is said first, or .includes will break
	if(!convo) return 'Fine. Be that way!'
  // Check for questions
	else if(convo.includes('?')) return 'Sure.'
  // Check for yelling
	else if(convo.includes('!')) return 'Whoa, chill out!'
	else return 'Whatever.'
}