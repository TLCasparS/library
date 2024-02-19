var myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  
  
}


function addBookToLibrary(book){
    myLibrary.push(book)

}


function openDialog(dial) {
    // Get the dialog element
    var dialog = document.getElementById(dial);

    // Show the dialog
    dialog.showModal();
}

function closeDialog(dial) {
    // Get the dialog element
    var dialog = document.getElementById(dial);
    dialog.close()
    

   
    // Show the dialog.closeDialog()

}



function displayBooks(){
    document.getElementById("shelf").innerHTML = ""; 
    
    myLibrary.forEach(book => {
        
        var entry = book.title +" written by "+ book.author +" has "+book.pages + " pages"
        const node = document.createElement("div");
        const bookdiv = document.createElement("div")
        const text = document.createTextNode(entry);
        var checker = book.status

     


        console.log(checker)
        
       

        var lab = document.createElement("label")
        
        var check = document.createElement("INPUT")
        var checkspan = document.createElement("span")

        
        check.setAttribute("type", "checkbox");
        if (book.status =="read" || book.status == "on"){
            check.checked = true;      
        }
        else{
            check.checked = false;
        }
        
        lab.appendChild(check)
        lab.appendChild(checkspan)
        const checkpanel = document.createElement("div")

        check.addEventListener("click", function() {
            if (book.status =="read" || book.status == "on"){
                check.checked = false;  
                book.status = "off"    
            }
            else{
                check.checked = true;
                book.status = "on"
            }

           
        });

        const cpanel = document.createTextNode("read?")
        
        lab.classList.add("switch")
        checkspan.classList.add("round")
        checkspan.classList.add("slider")
        
        checkpanel.appendChild(cpanel)
        checkpanel.appendChild(lab)

        
        node.appendChild(bookdiv);
        
        bookdiv.classList.add("bookcard")
        bookdiv.appendChild(text);
        bookdiv.appendChild(checkpanel)
        bookdiv.classList.add("mystyle");
        document.getElementById("shelf").appendChild(node);


        const del = document.createElement("button");
        del.innerHTML = "delete"
        del.addEventListener("click", function() {
            myLibrary = myLibrary.filter(element => element!== book);
           
            displayBooks(myLibrary)

        });
        bookdiv.appendChild(del);

        
    });

}



theHobbit = new Book("the Hobbit", "Tolkin", 343, "not read")
addBookToLibrary(theHobbit)
theLoTR = new Book("LOTR", "tolkin", 444, "read")
addBookToLibrary(theLoTR)

function submitBook(event) {
    event.preventDefault(); // Prevent form submission, sonst wird die Seite komplett neugeladen

    // Retrieve input values
    let title = document.getElementById('btitle').value;
    let author = document.getElementById('bauthor').value;
    let pages = document.getElementById('bpages').value;
    let status = document.getElementById('bstatus').value;

    // Create a new Book object
    let bookA = new Book(title, author, pages, status);

    // Call a function to add the book to your library
    addBookToLibrary(bookA);
    displayBooks(myLibrary)
}




