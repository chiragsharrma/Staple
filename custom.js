axios
.get("https://api.hnpwa.com/v0/newest/1.json")
.then(function(response){
    createListItem(response);
})
.catch(function(error)
{
    console.log("error");
});
/*CHIRAG SHARMA*/

function createListItem(response){
    response.data.forEach(function(listItem){
        
        var li = document.createElement("li");
        li.setAttribute("class","list-group-item");
        
        /*Create badge*/
        var span = document.createElement("span");
        span.setAttribute("class","badge badge-primary");
        span.innerHTML = listItem.points;
        
        var anchor = document.createElement("a"); /* to hava the links active i declared an anchor tag*/
        anchor.setAttribute("href",listItem.url);
        anchor.setAttribute("target", "__blank"); /* to open in new tab*/
        anchor.innerHTML = listItem.title;
        anchor.prepend(span);
        
        
        li.appendChild(anchor);
        
        document.querySelector(".list-group").appendChild(li);
        
    });
}