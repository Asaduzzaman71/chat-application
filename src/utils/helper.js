export const H = {
    logoutIfExpireToken: function(){
        if(useCookie('tokenExpire').value <= (new Date().getTime() / 1000) || useCookie('tokenExpire').value == undefined){
            authMethods().resetCookies()
            if(State('chat').socket?.close) State('chat').socket.close()
            if(useRoute().path != '/login'){
                setTimeout(()=> console.clear(), 100)
                navigateTo('/login?' + (
                    encodeURI(useRoute().path != '/' ?
                        ('redirect_to=' + encodeURI(useRoute().fullPath)) : ''))
                )
            }
        }
    },
} 