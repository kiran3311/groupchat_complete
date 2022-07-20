
  window.onload= function(){

    let getName = JSON.parse(localStorage.getItem('logedinUser'))
    if(getName){
     return true

    }
  else{
    window.location.href='./welcome.html'
    return false
  }
  }


var userdata = JSON.parse(localStorage.getItem('user'))
        var html = "<table border ='1|1' id='users' class='usertable'>"
            html += `<thead class="head">`

            html += '<tr>'
            html += '<td>'+' Name'+' </td>'  
            html += '<td>'+'User Email ID'+' </td>'
            html += '<td>'+'  '+'</td>'
            html += '</tr>'
            html += '</thead>'

            

        for (var i = 0; i < userdata.length; i++) {
            var name = userdata[i].fullName
            var email = userdata[i].email
            var userId= userdata[i].id
            console.log(name, email)
             
            html += '<tr>'
            html += '<td>' + userdata[i].fullName + '</td>'
            html += '<td>' + userdata[i].email + '</td>'
          html += '<td>' + `<a href="./edit-user.html?id=${userdata[i].id}">Edit</a>`+'|' + 
          `<a href="./delete.html?id=${userdata[i].id}">Delete</a>`
          //`<a href="" data-bs-toggle="modal" data-bs-target="#myModal" onClick ="func(${userdata[i].id})">Delete</a>`
          + '</td>'
            html += '</tr>'

            // `<a href="" data-bs-toggle="modal"
            // data-bs-target="#myModal" onclick='deletingUser(${object[i].id})'>Delete</a></td>`

            

            document.getElementById('main').innerHTML=html

              }


              let logout = () => {
            localStorage.removeItem('logedinUser');
        }


        // function dclick(){
        //   function func(id){
        //     var userdata = JSON.parse(localStorage.getItem('user'))
        //     var index = userdata.findIndex(item => item.id == id);
        //     var selectUser = userdata[index]
        //     userdata.splice(index, 1)
        //     localStorage.setItem('user', JSON.stringify(userdata))
        //     window.location.href="./Users.html"
        //     console.log(selectUser)
  
        //   }

        //   func()


        // }

        



        


