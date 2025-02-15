//react ka vitual dom ek tree structure banata jo ki hum aise show kr skte hain
//to jo hum html tag return krte hain vo react kaise samajhta hai
const reactElement={
    tag:"a",
    property:{
        href:"https://google.com",
        target:"_blank"
    },
    child:"this is a link to google"
}

const container=document.getElementById("root")

//this function will help to render the html on webpage using react
function customRender (reactElement,container){
    const domElement=document.createElement(reactElement.tag)
    domElement.innerHTML=reactElement.child
    /*
    domElement.setAttribute('href',reactElement.property.href)
    domElement.setAttribute('target',reactElement.property.target)
    container.appendChild(domElement)
    */
   //now we will do it using loop 
   for (const property in reactElement.property) {
        domElement.setAttribute(property,reactElement.property[property])
        
    }
    container.appendChild(domElement)
}


customRender(reactElement,container)