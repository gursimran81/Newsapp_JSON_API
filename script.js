var key="371960ee03266a824e02c35177e3b971";

var endpoint="https://gnews.io/api/v4/top-headlines?apikey="+key+"&lang=en&country=in&max=9&category=";

function getNews(c){
    let url=endpoint+c;
    let text="";
 $("#news_result").empty();
    $.getJSON( url,function( data ) {
        $.each(data.articles,function(key,val) {
text=text+`<div class="col-md-4 mb-1">
            <div class="border p-2">
                <img src="${val.image}" class="w-100">
                <p class="fs-4"> ${val.title}</p>
                <p class="small text-muted">${val.description}</p>
                <a href="${val.url}" class="btn btn-dark text-warning">Read Full Article </a>
            </div>
          </div>`    
})
       $('#news_result').append(text);
})
}       