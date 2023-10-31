var loadSelectedPage=(PageType)=>{
    var templeteUrl;
    switch(PageType){
        case 'login':
            templeteUrl ='templetes/login.htm'
            break;
        case 'fgpwd':
            templeteUrl ='templetes/fgpwd.htm'
            break;
            case 'dashboard':
            templeteUrl ='templetes/dashboard.htm'
            break;
    }
    $.ajax({
        url:templeteUrl,
        method:'GET',
        data:{},
        success:(response)=>{
            console.log(response);
            $("main").html(response);
        },
        error:(err)=>{
            console.log(err);
        }
    });

}
loadSelectedPage('login')