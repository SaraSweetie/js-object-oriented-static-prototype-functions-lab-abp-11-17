function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(emails){
   return new IcebreakerResponse(emails)
  })​
