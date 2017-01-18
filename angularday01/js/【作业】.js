$.getJSON("data/Data.json",function(res){
    $.each(res,function(index,n){

        $("<div/>").attr({"class":"col-md-3","ng-repeat":"filter:searchKey"}).append(
            $("<div/>").append(
                $("<img/>").attr({"src": "img/1.jpg"})

            )
        ).append(
            $("<div/>").attr({"ng-repeat":"filter:6"}).html("{{"+n.name+"}}")
        ).append(
            $("<div/>").html(n.desc)
        ).append(
            $("<div/>").html(n.price)
        ).append(
            $("<div/>").append(
                $("<span/>").attr("class","btn btn-info").html("-")
            ).append(
                $("<input/>").attr("class","form-control").val(n._num)
            ).append(
                $("<span/>").attr("class","btn btn-info").html("+")
            )
        )

            .appendTo($(".container .row .col-md-10"))
    })



})