function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(email){
  return email.map(function(email){
   return new IcebreakerResponse(email)
  })​
